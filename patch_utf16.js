const fs = require('fs');

const path = 'src/components/FellowsSection.tsx';

// Read file as UTF-16 LE
let content = fs.readFileSync(path, 'utf16le');

// Check if it's actually UTF-16 or UTF-8 with BOM
if (!content.includes('export') && fs.readFileSync(path, 'utf8').includes('export')) {
    content = fs.readFileSync(path, 'utf8');
}

const newFellow = `  {
    id: 19,
    name: "Alisha",
    image: "/alisha-main.jpeg",
    tagline: "“चुप्पी टूटी, बदलाव बोला” - संघर्ष से विश्वास तक मेरी कहानी",
    schools: "महीसारी स्कूल, चांद चोर चपता स्कूल",
    gallery: [
      "/alisha-main.jpeg"
    ],
    story: "मेरा नाम अलीशा है। मैं एक छोटे से गांव की साधारण लड़की हूँ, जिसने सरकारी स्कूल से पढ़ाई की और सीमित संसाधनों के बीच अपने सपनों को जिंदा रखा। पढ़ाई से लगाव था, लेकिन हालात हमेशा साथ नहीं देते थे। आर्थिक तंगी, जिम्मेदारियाँ और असफलताओं ने कई बार मुझे रोका। मैंने कई सरकारी परीक्षाएं पास कीं, लेकिन जॉइनिंग नहीं मिल पाई। उस समय लगा जैसे सब खत्म हो गया हो। मैंने पढ़ाई भी छोड़ दी।\\n\\nलेकिन एक सपना था जो कभी नहीं टूटा — शिक्षक बनने का सपना।\\n\\n2023 में मैंने फेलोशिप की शुरुआत की। शुरुआत डर, झिझक और खुद पर शक से भरी थी। लगता था मैं शायद इस काबिल नहीं हूँ। लेकिन हर दिन की चुनौतियों ने मुझे मजबूत बनाया। मैंने सीखा कि असफलता रुकने का नहीं, सीखने का मौका होती है।\\n\\nजब मैंने स्कूल में काम शुरू किया, तो सबसे बड़ी समस्या थी — बच्चों की कम उपस्थिति और पढ़ाई में रुचि की कमी। कई बार क्लास खाली मिलती थी। लेकिन मैंने हार नहीं मानी। मैं बच्चों के घर-घर गई, उनके माता-पिता से बात की, उनके जीवन को समझा। कई बार उनके घर रुककर उनके साथ समय बिताया।\\n\\nधीरे-धीरे विश्वास बनने लगा। बच्चे स्कूल आने लगे, मुस्कुराने लगे, सवाल पूछने लगे।\\n\\nमहीसारी स्कूल में मिड-डे मील तक नहीं बनता था। बच्चों का हक उनसे छिन रहा था। मैंने इस मुद्दे को उठाया, समुदाय से बात की, और अंततः आज वहां बच्चों को खाना मिलने लगा। यह मेरे लिए एक बड़ी जीत थी।\\n\\nशिक्षकों के साथ काम करना भी आसान नहीं था। कई बार उन्होंने मना किया, मेरी बातों को नकारा। लेकिन मैंने संवाद नहीं छोड़ा। उन्हें साथ जोड़ा, उनके काम की सराहना की। धीरे-धीरे वही शिक्षक अब बच्चों को मन से पढ़ाने लगे।\\n\\nचांद चोर चपता स्कूल में तो शुरुआत में समुदाय को स्कूल में बुलाना भी मना था। लेकिन मैंने हिम्मत नहीं हारी। लगातार प्रयास के बाद लर्निंग फेस्टिवल में पहले 31, फिर 51 और फिर 90 से ज्यादा अभिभावक जुड़े। यह सिर्फ संख्या नहीं थी, यह विश्वास की जीत थी।\\n\\nइस सफर में मैंने बच्चों के साथ दोस्ती की, उन्हें समझा, और उन्हें यह एहसास दिलाया कि वे खास हैं। जो बच्चे पहले चुप रहते थे, आज वे आत्मविश्वास से अपनी बात रखते हैं।\\n\\nलेकिन सबसे बड़ा बदलाव मेरे अंदर आया।\\n\\nमैं जो पहले झिझकती थी, डरती थी, लोगों से दूर रहती थी — आज वही अलीशा आत्मविश्वास से संवाद करती है। मैंने अपने अंदर के पूर्वाग्रह तोड़े, लोगों को समझना सीखा, हर इंसान को इंसानियत से देखना सीखा।\\n\\nयह फेलोशिप मेरे लिए सिर्फ एक काम नहीं थी —\\nयह खुद को पहचानने और बदलने की यात्रा थी।\\n\\nआज जब मैं पीछे देखती हूँ, तो समझ आता है —\\nबदलाव एक दिन में नहीं आता, लेकिन अगर हम हार শক न मानें, तो बदलाव जरूर आता है।"
  }`;

// Find `];` that closes the array, by finding the last fellow's definition
// Since it's Swati, find "मेरा नाम स्वाति है"
let swatiIndex = content.lastIndexOf('मेरा नाम स्वाति है');

if (swatiIndex !== -1) {
    // Find the next `}` and `]`
    let closeBrace = content.indexOf('}', swatiIndex);
    if (closeBrace !== -1) {
        // Insert a comma after `}` if not there, then the new fellow
        // Actually, let's insert after the closing `}` but before the next element or `]`
        let insertionPoint = closeBrace + 1;
        
        // Find if there's a comma
        let nextCharIdx = insertionPoint;
        while(nextCharIdx < content.length && (content[nextCharIdx] === ' ' || content[nextCharIdx] === '\\n' || content[nextCharIdx] === '\\r' || content[nextCharIdx] === '\\t')) {
            nextCharIdx++;
        }
        
        let prefix = '\\n,';
        if (content[nextCharIdx] === ',') {
            insertionPoint = nextCharIdx + 1;
        } else {
            // Need to insert comma
        }
        
        let newContent = content.substring(0, insertionPoint) + prefix + '\\n' + newFellow + '\\n' + content.substring(insertionPoint);
        
        // Write it back as utf8
        fs.writeFileSync(path, newContent, 'utf8');
        console.log('Successfully added Alisha and converted to UTF-8!');
    } else {
        console.log('Could not find closing brace for Swati');
    }
} else {
    console.log('Could not find Swati in the file. Will try to find the fallback insertion point.');
    // Let's fallback to finding the end of the array
    let startIdx = content.indexOf('const fellows');
    if (startIdx !== -1) {
        let depth = 0;
        let endIdx = -1;
        for(let i=startIdx; i<content.length; i++) {
            if (content[i] === '[') depth++;
            if (content[i] === ']') {
                depth--;
                if (depth === 0) {
                    endIdx = i;
                    break;
                }
            }
        }
        if (endIdx !== -1) {
            let prev = endIdx - 1;
            while(prev > 0 && (content[prev] === ' ' || content[prev] === '\\n' || content[prev] === '\\r')) prev--;
            if (content[prev] !== ',') {
                content = content.substring(0, prev + 1) + ',' + content.substring(prev + 1);
                endIdx++;
            }
            let newContent = content.substring(0, endIdx) + newFellow + '\\n' + content.substring(endIdx);
            fs.writeFileSync(path, newContent, 'utf8');
            console.log('Fallback successful!');
        } else {
            console.log('Could not find end of array.');
        }
    } else {
        console.log('Could not find const fellows');
    }
}
