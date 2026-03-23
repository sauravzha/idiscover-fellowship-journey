const fs = require('fs');

const file = 'src/components/FellowsSection.tsx';
let txt = fs.readFileSync(file, 'utf8');

const id5Str = '{ id: 5, name: "Neha Patel"';
const id15Str = '  { \n    id: 15, \n    name: "Amisha",';

const startIdx = txt.indexOf(id5Str);
let endIdx = txt.indexOf(id15Str);
if (endIdx === -1) {
    endIdx = txt.indexOf('{ \n    id: 15,');
}
if (endIdx === -1) {
    endIdx = txt.indexOf('{ \r\n    id: 15,');
}
if (endIdx === -1) {
    endIdx = txt.indexOf('name: "Amisha"');
}

// I need to find the specific start of the line for id: 15
endIdx = txt.lastIndexOf('  {', endIdx); 
if (endIdx === -1) { endIdx = txt.indexOf('{ id: 15'); }

const replacement = `{ id: 5, name: "Neha Patel", tagline: "सपनों को पंख देना", schools: "Govt. PS Harda, Govt. MS Hoshangabad", story: "Neha's art workshops uncovered incredible hidden talents. One student's painting was recently selected for a state-level exhibition, proving that structural support unlocks genius.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop" },
  { id: 6, name: "Arjun Das", tagline: "लीडरशिप की नई शुरुआत", schools: "Govt. PS Jhabua, Govt. MS Alirajpur", story: "Arjun focused on student leadership. He established the first functioning student parliament in his school, allowing 5th graders to make decisions about their own daily reading schedules.", image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=600&h=800&fit=crop" },
  { id: 7, name: "Suman Tiwari", tagline: "खेल से पढ़ाई तक", schools: "Govt. PS Rewa, Govt. UPS Satna", story: "Suman realized her students learned best when moving. She integrated kinesthetic learning and sports into the daily curriculum, dropping the dropout rate to absolute zero.", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop" },
  { id: 8, name: "Gaurav Joshi", tagline: "तकनीक से तरक्की", schools: "Govt. PS Ujjain, Govt. MS Dewas", story: "With one donated laptop, Gaurav taught basic coding to 40 kids. His classroom is now the loudest, most joyous room in the school as students race to solve logic puzzles.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop" },
  { id: 9, name: "Meera Reddy", tagline: "परंपरा और प्रगति", schools: "Govt. PS Khandwa, Govt. UPS Burhanpur", story: "Meera bridged the gap between the tribal community's heritage and the modern syllabus. She brought local artisans to teach math through traditional weaving patterns.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop" },
  { id: 10, name: "Kabir Verma", tagline: "पर्यावरण के रक्षक", schools: "Govt. PS Panna, Govt. MS Chhatarpur", story: "Kabir and his 60 students planted over 500 trees and built a fully functional rainwater harvesting system using locally sourced bamboo and waste plastic.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop" },
  { id: 11, name: "Sneha Nair", tagline: "स्वास्थ्य ही संपदा", schools: "Govt. PS Dhar, Govt. UPS Barwani", story: "Sneha started a holistic health movement focusing on nutrition and hygiene. The number of students calling in sick dropped drastically, leading to the highest test scores the district has seen.", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&h=800&fit=crop" },
  { id: 12, name: "Rohan Kapoor", tagline: "संगीत से संवाद", schools: "Govt. PS Vidisha, Govt. MS Raisen", story: "Rohan used local folk music to teach Hindi grammar. His students now write their own original songs to remember complex concepts, making learning utterly unforgettable.", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&h=800&fit=crop" },
  { id: 13, name: "Anita Desai", tagline: "समानता का अधिकार", schools: "Govt. PS Guna, Govt. UPS Ashoknagar", story: "Anita boldly tackled gender disparity by forming mixed-gender sports leagues. She actively dismantled stereotypes, encouraging young girls that they belong in mathematics and on the playground.", image: "https://images.unsplash.com/photo-1438761681033-6461c20be8cb?w=600&h=800&fit=crop" },
  { 
    id: 14, 
    name: "Raushani", 
    tagline: "Inspiring the Next Generation", 
    schools: "Fellowship Journey", 
    image: "/raushani-profile.jpg",
    story: \`एक नया दृष्टिकोण
कई बार मैंने पाया कि मैं ऐसी समस्याओं में फंस जाती हूं, जिनका उत्तर तुरंत मेरे पास नहीं होता। पहले इस स्थिति में मैं हार मान लेती थी या हताश हो जाती थी। लेकिन अब, मैं धैर्य के साथ बार-बार प्रयास करती हूं। इस प्रक्रिया में केवल समस्या का समाधान नहीं मिलता, बल्कि मैं अपने भीतर छिपी नई क्षमताओं और संभावनाओं को भी पहचानती हूं। हर समस्या मेरे लिए एक नए अनुभव और सीख का द्वार खोलती है।

एक नई दृष्टि, एक नया जीवन
फेलोशिप ने मुझे खुद को समझने, अपने भीतर की कमजोरियों और क्षमताओं को स्वीकार करने और बेहतर बनाने का अद्भुत अवसर दिया है। इसने मुझे सिखाया है कि हर कठिनाई और चुनौती एक अवसर है, जो हमें हमारे वास्तविक स्वरूप से मिलाती है।

अंतिम में बस यही कहूँगी।
डियर, क्षमतालय, जब से तुम मिले हो मुझे, जीवन का आधार मिला।
कांटो की राह चल कर फिर, यह सुनहरा बाहार मिला।
चंद पैसे भरकर मुट्ठी में, मुझे तो अब पूरा संसार मिला।\`, 
    gallery: [
      "/raushani-action-1.jpg",
      "/raushani-action-2.jpg",
      "/raushani-action-3.jpg"
    ]
  },
`;

const newTxt = txt.substring(0, startIdx) + replacement + txt.substring(endIdx);
fs.writeFileSync(file, newTxt, 'utf8');
console.log("PATCH APPLIED SUCCESSFULLY");
