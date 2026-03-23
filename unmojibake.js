import fs from 'fs';

const path = 'src/components/FellowsSection.tsx';
const content = fs.readFileSync(path, 'utf8');

// The file is currently valid UTF-8, but the characters inside it are Mojibake.
// They were created because UTF-8 bytes of Hindi were read as UTF-16LE characters.
// So we need to take the character codes of the file, turn them back into bytes (as LE),
// and then decode those bytes as UTF-8!

// However, any normal ASCII character (like 'c', 'o', 'n', 's', 't') would have been padded with \x00
// when read as UTF-16LE if the original file was UTF-8. 
// Wait, my first PS script read the UTF-16LE file AS UTF-8!
// Let's trace carefully:
// 1. Original: UTF-16LE. Hindi char 'म' = U+092E. In file: 2E 09.
// 2. Read as UTF-8: '2E' is '.', '09' is '\t'. So 'म' became ".\t".
// BUT THAT IS NOT MOJIBAKE! 'ꓠ' is U+A4E0.
// If 'ꓠ' is U+A4E0, its UTF-16LE bytes are E0 A4.
// E0 A4 AE are the UTF-8 bytes for 'म'!
// This means the ORIGINAL file was UTF-8!
// 1. Original file: UTF-8. 'म' is E0 A4 AE.
// 2. PowerShell `Get-Content src/components/FellowsSection.tsx -Encoding Unicode` reads it as UTF-16LE.
// It takes [E0 A4], forms U+A4E0 ('ꓠ'). Then takes [AE E0], forms U+E0AE, etc.
// 3. `Set-Content -Encoding UTF8` writes 'ꓠ' as UTF-8 (EA 93 A0).
// 
// So to recover:
// For the corrupted string, we just take the corrupted characters, get their 16-bit char codes,
// write them as little-endian bytes, and then decode that byte array as UTF-8!

const corrupted = fs.readFileSync(path, 'utf8');

let buffer = Buffer.alloc(corrupted.length * 2);
let offset = 0;
for (let i = 0; i < corrupted.length; i++) {
    buffer.writeUInt16LE(corrupted.charCodeAt(i), offset);
    offset += 2;
}

// Now `buffer` contains the original bytes of the UTF-8 file!
// But wait, what if `Get-Content -Encoding Unicode` threw away a trailing odd byte?
// Let's try decoding it!
let recovered = buffer.toString('utf8');

// There might be a UTF-8 BOM or it might just be the exact original text.
// Let's check if `recovered` looks like valid JSX.
if (recovered.includes('const fellows')) {
    fs.writeFileSync('src/components/FellowsSection_Recovered.tsx', recovered, 'utf8');
    console.log('SUCCESS: Recovered perfectly!');
} else {
    console.log('FAILED: Recovery did not produce valid code. Sample:', recovered.substring(0, 200));
}
