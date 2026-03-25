import { useState, useEffect } from "react";
import { X, ArrowRight, Quote, Sparkles, ChevronLeft, ChevronRight, Fingerprint } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const fellows = [
  { 
    id: 2, 
    name: "Manisha Yadav", 
    tagline: "Inspiring the Next Generation", 
    schools: "Fellowship Journey", 
    story: `मेरा नाम मनिषा यादव है और मैं झारखंड से हूं।
मैंने 24 सितंबर को iDiscover फेलोशिप ज्वाइन की।
शुरुआत में मुझे सोशल सेंटर या इस फेलोशिप के बारे में कोई जानकारी नहीं थी।
सब कुछ मेरे लिए नया और थोड़ा मुश्किल भी था।
लेकिन धीरे-धीरे मैंने सीखना शुरू किया।
मैंने समझा कि यह फेलोशिप बच्चों और समुदाय के साथ काम करने का एक अच्छा मौका है।
पहले मुझे लोगों से बात करने में झिझक होती थी, लेकिन अब मेरा आत्मविश्वास बढ़ गया है।
मैंने स्कूल और समुदाय में जाकर बच्चों से जुड़ना शुरू किया।
उनकी समस्याओं को समझा और उन्हें पढ़ाई के लिए प्रेरित किया।
अब मुझे लगता है कि मैं किसी की जिंदगी में छोटा सा बदलाव ला सकती हूं।
इस सफर में मुझे कई चुनौतियाँ भी मिलीं,
लेकिन हर चुनौती ने मुझे कुछ नया सिखाया।
अब मैं पहले से ज्यादा मजबूत और आत्मनिर्भर महसूस करती हूं।`, 
    image: "/manisha-action-1.jpg",
    gallery: [
      "/manisha-profile.jpg",
      "/manisha-action-2.jpg"
    ]
  },
  { 
    id: 3, 
    name: "Ritika", 
    tagline: "Empowering Through Education", 
    schools: "Fellowship Journey", 
    story: `Achievement)
बच्चों के साथ स्थापित हुआ यह संबंध केवल एक औपचारिक या शैक्षणिक जुड़ाव तक सीमित नहीं है, बल्कि यह विश्वास, स्नेह और भावनात्मक समझ पर आधारित एक गहरा एवं स्थायी रिश्ता बन चुका है। यह संबंध जीवन के विभिन्न उतार-चढ़ावों में निरंतर प्रेरणा और संबल प्रदान करता है। किसी भी भावनात्मक परिस्थिति में उनका साथ और समर्थन आत्मविश्वास को सुदृढ़ करता है तथा आगे बढ़ने की नई ऊर्जा देता है।
इसी प्रकार, समुदाय के साथ विकसित हुआ संबंध भी एक महत्वपूर्ण उपलब्धि के रूप में उभरकर सामने आया है। यह रिश्ता आपसी विश्वास, सहयोग और संवेदनशीलता पर आधारित है, जो हर कठिन परिस्थिति में मार्गदर्शन और साहस का स्रोत बनता है। समुदाय का यह साथ न केवल कार्यों को अधिक प्रभावी बनाता है, बल्कि व्यक्तिगत एवं सामूहिक विकास के लिए एक सशक्त आधार भी प्रदान करता है।
इस प्रकार, ये संबंध मात्र उपलब्धि नहीं, बल्कि दीर्घकालिक प्रेरणा, समर्थन और सकारात्मक परिवर्तन की मजबूत नींव के रूप में स्थापित हुए हैं।`, 
    image: "/ritika-profile.jpg",
    gallery: [
      "/ritika-action-1.jpeg",
      "/ritika-action-2.jpeg"
    ]
  },
  { 
    id: 14, 
    name: "Raushani", 
    tagline: "Inspiring the Next Generation", 
    schools: "Fellowship Journey", 
    image: "/raushani-main.png",
    story: `एक नया दृष्टिकोण
कई बार मैंने पाया कि मैं ऐसी समस्याओं में फंस जाती हूं, जिनका उत्तर तुरंत मेरे पास नहीं होता। पहले इस स्थिति में मैं हार मान लेती थी या हताश हो जाती थी। लेकिन अब, मैं धैर्य के साथ बार-बार प्रयास करती हूं। इस प्रक्रिया में केवल समस्या का समाधान नहीं मिलता, बल्कि मैं अपने भीतर छिपी नई क्षमताओं और संभावनाओं को भी पहचानती हूं। हर समस्या मेरे लिए एक नए अनुभव और सीख का द्वार खोलती है।

एक नई दृष्टि, एक नया जीवन
फेलोशिप ने मुझे खुद को समझने, अपने भीतर की कमजोरियों और क्षमताओं को स्वीकार करने और बेहतर बनाने का अद्भुत अवसर दिया है। इसने मुझे सिखाया है कि हर कठिनाई और चुनौती एक अवसर है, जो हमें हमारे वास्तविक स्वरूप से मिलाती है।

अंतिम में बस यही कहूँगी।
डियर, क्षमतालय, जब से तुम मिले हो मुझे, जीवन का आधार मिला।
कांटो की राह चल कर फिर, यह सुनहरा बाहार मिला।
चंद पैसे भरकर मुट्ठी में, मुझे तो अब पूरा संसार मिला।`, 
    gallery: [
      "/raushani-action-1.jpg",
      "/raushani-action-2.jpg",
      "/raushani-action-3.jpg"
    ]
  },
  { 
    id: 15, 
    name: "Amisha", 
    tagline: "Empowering Through Education", 
    schools: "Fellowship Journey", 
    image: "/amisha-profile.jpeg",
    story: "मैं यह सीख पाई कि बच्चों को कैसे समझा जाए और टीचर्स और समुदाय के साथ कैसे काम करते हैं। मैंने अपने बात करने के तरीके को सुधारा, साथ ही डेटा को कैसे भरा जाता है और किस तरीके से डेटा को देखा और समझा जाता है, यह भी सीखा।", 
    gallery: [
      "/amisha-action-1.jpeg",
      "/amisha-action-2.jpeg"
    ]
  },
  { 
    id: 16, 
    name: "Muskan", 
    tagline: "Inspiring the Next Generation", 
    schools: "Fellowship Journey", 
    image: "/muskan-profile.jpeg",
    story: `इस पूरे वर्ष की मेरी सबसे बड़ी उपलब्धि मेरे बच्चों और समुदाय का स्नेह और विश्वास रहा। यहाँ मुझे सिर्फ एक फैलो के रूप में नहीं, बल्कि एक बेटी, एक बहन और एक साथी के रूप में स्वीकार किया गया।

फेलोशिप की यात्रा की एक छोटी सी कहानी | 
इस फ़ेलोशिप के यात्रा की शुरुआत मैंने 2/ 11/2023 में एक फैसिलिटेटर की भूमिका से शुरू किया था | मुझे लगा था की ये एक जॉब है | जहा मै काम करुँगी और मुझे पैसे मिलेंगे | लेकिन जब मैंने ये जाना की ये जॉब नहीं है | ये आपको खुद को खोजने में मदद करती है आप खुद को जान सको की आपके अन्दर क्या है ? आपकी क्या kshamta है ? आप क्या कर सकती हो | मै खुद की बात करू तो मेरे लिए सब कुछ नया था | जिस तरीके से मैंने पढ़ा था और जैसे मुझे पढाया गया था | मैंने उसी तरीके से अपने डेमो में पढाया था | जहा मुझे गलत नही बोला गया था | मुझे एक फेलो का क्लास दिखाया गया था की कैसे हम बच्चो को पुरानी तरीके से नहीं नये तरीके से पढ़ा सकते है | मैंने यहाँ आ कर जाना की एक बच्चे का क्लासरूम कैसा दीखता है उनकी दीवारे बोलती है | हम बच्चे को करके सीखने का मौका देते है | जो कही न कही मुझे नहीं मिला था | मै क्षमतालय में ही आकर अपनी भावना को खुलकर बताना सीखी हु , नहीं तो पहले मै अपनी भावना को बहुत ही छिपाती थी , अगर कोई कुछ बोल देता था तो उस से बात करना बंद कर देती थी , और सबसे ज्यादा मै ओवरथिंकिंग करती थी जिस वजह से मै बहुत परेशान रहती थी | इन सबसे निकलने में मेरी सबसे ज्यादा मदद सी लर्निंग ने किया है | जिसमे मैंने अपनी भावना को रेगुलेट करना सिखा है | अपने आप को शिफ्ट करना और दुसरो के प्रति धारणा बनाना बंद किया | फिर मै जब बच्चो के साथ काम कर रही तो मुझे बहुत सारी चुनौती आ रही थी | बच्चे मेरी बात ही नहीं मान रहे थे , जिस वजह से मै परेशान हो जाती थी | जिसमे मुझे मेरी टीम के सदस्य बहुत मदद करते है | सभी लोग बैठकर हमारी परेशानी को सुनते है , और मिलकर उसका समाधान निकालते है | मैंने अपने अन्दर बहुत सारे बदलाव देखे है | जो मै पहले चुनौती आते ही घबरा जाती थी | अब वही मै हु जो घबराती नही हु बल्कि उसका समाधान निकालने की कोशिश करती हु | दुसरो के नजरिये को समझने की कोशिश करती हु |अपनी बात को खुलकर रख पाती हु , नये - नये लोग से बातचीत करने में जो मुझे डर लगता था | वो मै खुद से कर रही हु | बच्चे कैसे सीखते है उन्हें कैसा माहौल चाहिए जहा वो खुलकर बोल पाए ये मैंने सिखा है, कुछ डिजिटल टूल पर काम करना भी सिखा है जैसे की excel , कैनवा , पीपीटी , लोगो से बात करने का , | बच्चो को समझने की कोशिश करती हु वो किस तरह से सीखते है उनसे किस तरह से बात करना पसंद है | उनके नजरियों को समझना सिखा है मैंने | अपने अन्दर के हिचकिचाहट को ख़तम किया मैंने | और अभी भी मै इस सफ़र में हु जहा मुझे औए बहुत कुछ सीखना है अपने अन्दर के और kshamta को पहचाना है की मै और क्या - क्या कर सकती हु |इस सफ़र में मैंने बच्चो की ग्रोथ के साथ - साथ खुद की ग्रोथ पर ध्यान देने का सफ़र है जहा मै अपने आपको जान रही हु की मै कौन हु मेरी पहचान क्या है ? जिसमे इस फेलो शिप ने मेरी बहुत मदद की है इसने मुझे एक अलग ही पहचान दी है | बच्चो की दीदी जिसका बच्चे इंतजार करते है | मुझे एक परिवार वाला प्यार मिला | जिसमे मुझे मेरे घर की याद बहुत कम आती है | सीखने के इस सफ़र में अभी मेरी यात्रा बाकी है | अभी बहुत कुछ सीखना बाकि ক্ষমতায় है | ये थी मेरी एक छोटी सी कहानी | इसमे |`,
    gallery: [
      "/muskan-action-1.jpeg",
      "/muskan-action-2.jpeg",
      "/muskan-action-3.jpeg"
    ]
  },
  { 
    id: 17, 
    name: "Suraj", 
    tagline: "Inspiring the Next Generation", 
    schools: "Fellowship Journey", 
    image: "/suraj-profile.jpeg",
    story: "Suraj's inspiring story of transformation and leadership goes here."
  },
  { 
    id: 18, 
    name: "Ank Kumar", 
    tagline: "Inspiring the Next Generation", 
    schools: "Fellowship Journey", 
    image: "/ank-profile.jpeg",
    story: "इस वर्ष मैंने विद्यालय, समुदाय, छात्रों और शिक्षकों के साथ मिलकर एक सहयोगात्मक वातावरण तैयार किया। मेरे प्रयासों के फलस्वरूप न केवल छात्रों की उपस्थिति (Attendance) में सुधार हुआ, बल्कि उनके आत्मविश्वास में भी उल्लेखनीय वृद्धि देखी गई। मैंने अभिभावकों के साथ निरंतर संवाद कर उनकी भागीदारी सुनिश्चित की। साथ ही, शिक्षकों के सहयोग से शिक्षण प्रक्रिया को गतिविधि-आधारित (Activity-based) और अधिक रोचक बनाया, जिससे कक्षा का वातावरण अधिक सक्रिय हुआ।",
    gallery: [
      "/ank-action-1.jpeg"
    ]
  },
  { 
    id: 19, 
    name: "Anand", 
    tagline: "Inspiring the Next Generation", 
    schools: "Fellowship Journey", 
    image: "/anand-profile.jpeg",
    story: `1. फेलोशिप का अनुभव मेरे लिए बहुत impactful और यादगार रहा, जिसमें मैंने बच्चों की learning में सकारात्मक बदलाव देखा।

2. मैंने समुदाय के युवाओं के साथ मिलकर उनकी क्षमताओं को पहचानने और उन्हें विकसित करने में सहयोग किया।

3. Learning Festival के माध्यम से बच्चों में विभिन्न कौशल विकसित हुए, जैसे समूह में काम करना, अपनी बात रखना, एक-दूसरे की मदद करना और सीखने के प्रति रुचि बढ़ना।

4. इस अनुभव ने मुझे अपनी क्षमताओं और skills (communication, leadership) को पहचानने और उन्हें बेहतर बनाने में मदद की।`,
    gallery: [
      "/anand-action-1.jpeg",
      "/anand-action-2.jpeg",
      "/anand-action-3.jpeg"
    ]
  },
  { 
    id: 20, 
    name: "Swati", 
    tagline: "Inspiring the Next Generation", 
    schools: "Fellowship Journey", 
    image: "/swati-profile.jpeg",
    story: "मेरा नाम स्वाति है l और मैं जुरंति चाय बागान , पश्चिम बंगाल की रहने वाली हूं l मैंने 12th pass सरकारी स्कूल से किया है l बारवीं के बाद मुझे नहीं पता था कि आगे क्या करना है l फिर मैं hamar pratayn से मिली l जो कि चाय बागान के विद्यार्थियों को दूसरे राज्य (out of state) में पढ़ने का मौका देता है l फिर मैं mangalore university में Batchelor of social work विषय से graduation complete किया l उसके बाद  post graduation मैंने Pondicherry University से women's studies विषय से complete किया l फिर अपने गांव के बच्चों को देखी की बच्चे school drop out हो रहे है, child Labour बन रहे है और दूसरे राज्यों में काम करने के लिए जा रहे हैं जिससे missing और murder हो रहा है l इसलिए मैं Kshmatayala organization में fellowship करने के लिए join की क्योंकि education sector में काम करके सीखना चाहती हूं कि drop out को कैसे कम किया जा सकता है, और बच्चों को उनके रूचि के अनुसार और अर्थ पूर्ण शिक्षा मिले l जो कि मैं इस fellowship के द्वारा सीख रही हूँ l इस fellowship से  मुझे केवल बच्चों के साथ नहीं , बल्कि शिक्षकों, अभिभावकों और युवाओं के साथ भी काम करने का मौका दिया l  fellowship के बाद मैं अपने चाय बागान के बच्चों,शिक्षकों,अभिभावकों और युवाओं के साथ काम करना चाहती हूं,  हमारे समाज के विकास के लिए l"
  },
  {
    id: 21,
    name: "Alisha",
    image: "/alisha-main.jpeg",
    tagline: "“चुप्पी टूटी, बदलाव बोला” - संघर्ष से विश्वास तक मेरी कहानी",
    schools: "महीसारी स्कूल, चांद चोर चपता स्कूल",
    gallery: [
      "/alisha-main.jpeg",
      "/alisha-action-1.jpeg",
      "/alisha-action-2.jpeg"
    ],
    story: "मेरा नाम अलीशा है। मैं एक छोटे से गांव की साधारण लड़की हूँ, जिसने सरकारी स्कूल से पढ़ाई की और सीमित संसाधनों के बीच अपने सपनों को जिंदा रखा। पढ़ाई से लगाव था, लेकिन हालात हमेशा साथ नहीं देते थे। आर्थिक तंगी, जिम्मेदारियाँ और असफलताओं ने कई बार मुझे रोका। मैंने कई सरकारी परीक्षाएं पास कीं, लेकिन जॉइनिंग नहीं मिल पाई। उस समय लगा जैसे सब खत्म हो गया हो। मैंने पढ़ाई भी छोड़ दी।\n\nलेकिन एक सपना था जो कभी नहीं टूटा — शिक्षक बनने का सपना।\n\n2023 में मैंने फेलोशिप की शुरुआत की। शुरुआत डर, झिझक और खुद पर शक से भरी थी। लगता था मैं शायद इस काबिल नहीं हूँ। लेकिन हर दिन की चुनौतियों ने मुझे मजबूत बनाया। मैंने सीखा कि असफलता रुकने का नहीं, सीखने का मौका होती है।\n\nजब मैंने स्कूल में काम शुरू किया, तो सबसे बड़ी समस्या थी — बच्चों की कम उपस्थिति और पढ़ाई में रुचि की कमी। कई बार क्लास खाली मिलती थी। लेकिन मैंने हार नहीं मानी। मैं बच्चों के घर-घर गई, उनके माता-पिता से बात की, उनके जीवन को समझा। कई बार उनके घर रुककर उनके साथ समय बिताया।\n\nधीरे-धीरे विश्वास बनने लगा। बच्चे स्कूल आने लगे, मुस्कुराने लगे, सवाल पूछने लगे।\n\nमहीसारी स्कूल में मिड-डे मील तक नहीं बनता था। बच्चों का हक उनसे छिन रहा था। मैंने इस मुद्दे को उठाया, समुदाय से बात की, और अंततः आज वहां बच्चों को खाना मिलने लगा। यह मेरे लिए एक बड़ी जीत थी।\n\nशिक्षकों के साथ काम करना भी आसान नहीं था। कई बार उन्होंने मना किया, मेरी बातों को नकारा। लेकिन मैंने संवाद नहीं छोड़ा। उन्हें साथ जोड़ा, उनके काम की सराहना की। धीरे-धीरे वही शिक्षक अब बच्चों को मन से पढ़ाने लगे।\n\nचांद चोर चपता स्कूल में तो शुरुआत में समुदाय को स्कूल में बुलाना भी मना था। लेकिन मैंने हिम्मत नहीं हारी। लगातार प्रयास के बाद लर्निंग फेस्टिवल में पहले 31, फिर 51 और फिर 90 से ज्यादा अभिभावक जुड़े। यह सिर्फ संख्या नहीं थी, यह विश्वास की जीत थी।\n\nइस सफर में मैंने बच्चों के साथ दोस्ती की, उन्हें समझा, और उन्हें यह एहसास दिलाया कि वे खास हैं। जो बच्चे पहले चुप रहते थे, आज वे आत्मविश्वास से अपनी बात रखते हैं।\n\nलेकिन सबसे बड़ा बदलाव मेरे अंदर आया।\n\nमैं जो पहले झिझकती थी, डरती थी, लोगों से दूर रहती थी — आज वही अलीशा आत्मविश्वास से संवाद करती है। मैंने अपने अंदर के पूर्वाग्रह तोड़े, लोगों को समझना सीखा, हर इंसान को इंसानियत से देखना सीखा।\n\nयह फेलोशिप मेरे लिए सिर्फ एक काम नहीं थी —\nयह खुद को पहचानने और बदलने की यात्रा थी।\n\nआज जब मैं पीछे देखती हूँ, तो समझ आता है —\nबदलाव एक दिन में नहीं आता, लेकिन अगर हम हार न मानें, तो बदलाव जरूर आता है।"
  },
  {
    id: 22,
    name: "Naureen",
    image: "/naureen-main-new.jpeg",
    tagline: "Inspiring the Next Generation",
    schools: "Fellowship Journey",
    gallery: [
      "/naureen-main-new.jpeg",
      "/hero-img-2.jpeg",
      "/naureen-action-1.jpeg"
    ],
    story: "Naureen's journey is one of resilience and hope, bringing light to her students and transforming her community through dedication."
  }
];

const FellowsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedFellow, setSelectedFellow] = useState<typeof fellows[0] | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useScrollReveal();

  useEffect(() => {
    document.body.style.overflow = selectedFellow ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedFellow]);

  useEffect(() => {
    if (selectedFellow || !isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % fellows.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [selectedFellow, isAutoPlaying]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % fellows.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + fellows.length) % fellows.length);

  return (
    <section id="fellows" className="relative bg-background py-24 sm:py-32 overflow-hidden" ref={ref}>
      {/* Immersive Dark Background with Reactive Glow based on active index */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,auto_0%,transparent_60%)] pointer-events-none opacity-40 transition-colors duration-1000"
        style={{ backgroundImage: `radial-gradient(ellipse at center, hsl(var(--primary)/0.15) 0%, transparent 70%)` }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        {/* Header section with dramatic typography */}
        <div className="text-center mb-6 sm:mb-12 scroll-hidden flex flex-col items-center max-w-3xl">
          <div className="inline-flex items-center justify-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <Sparkles size={16} className="text-primary" />
            <p className="text-sm font-bold uppercase tracking-widest text-primary">The Architects of Change</p>
          </div>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-foreground uppercase leading-[1.1]">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-accent to-primary drop-shadow-[0_0_20px_hsl(var(--primary)/0.2)]">{fellows.length} Fellows</span>
          </h2>
          
          <p className="mt-6 text-muted-foreground sm:text-lg font-medium tracking-wide">
            Scroll through our constellation of leaders. Select a portrait to uncover their transformative impact across the schools of Bihar Samastipur.
          </p>
        </div>

        {/* Cinematic 3D Spotlight Carousel */}
        <div 
          className="relative w-full h-[500px] sm:h-[600px] flex items-center justify-center z-20"
          style={{ perspective: "1500px" }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={() => setIsAutoPlaying(false)}
          onTouchEnd={() => setIsAutoPlaying(true)}
        >
          {fellows.map((fellow, i) => {
            const distance = i - activeIndex;
            const absOffset = Math.abs(distance);
            const isVisible = absOffset <= 3; // Keep only a window of items loaded aggressively in DOM
            
            if (!isVisible && absOffset > 4) return null; // Unmount distant items for performance

            // Responsive 3D Math distances
            const spreadDistance = typeof window !== 'undefined' && window.innerWidth < 640 ? 120 : 200;
            const depthDistance = typeof window !== 'undefined' && window.innerWidth < 640 ? 150 : 250;
            const rotateFactor = typeof window !== 'undefined' && window.innerWidth < 640 ? 25 : 45;

            return (
              <div
                key={fellow.id}
                onClick={() => {
                  setActiveIndex(i);
                  setSelectedFellow(fellow);
                }}
                className={`absolute top-1/2 left-1/2 w-[260px] sm:w-[340px] aspect-[2/3] sm:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-2xl origin-center group
                  ${distance === 0 ? 'pointer-events-auto' : 'pointer-events-none sm:pointer-events-auto'}
                `}
                style={{
                  transform: `translate(-50%, -50%) translateX(${distance * spreadDistance}px) translateZ(${-absOffset * depthDistance}px) rotateY(${distance === 0 ? 0 : distance > 0 ? -rotateFactor : rotateFactor}deg)`,
                  zIndex: 50 - absOffset,
                  opacity: absOffset > 3 ? 0 : 1 - absOffset * 0.25,
                  filter: `blur(${absOffset * 2}px) brightness(${1 - absOffset * 0.1})`,
                  transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
              >
                {/* Img Layer */}
                <img 
                  src={fellow.image} 
                  alt={fellow.name} 
                  className="w-full h-full object-cover select-none transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ transform: distance === 0 ? 'scale(1.05)' : 'scale(1)' }}
                />

                {/* Overlays */}
                <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent transition-opacity duration-1000 ${distance === 0 ? 'opacity-90' : 'opacity-100'}`} />
                <div className={`absolute inset-0 border-2 rounded-2xl sm:rounded-3xl transition-colors duration-1000 shadow-[inset_0_0_60px_hsl(var(--primary)/0.5)] ${distance === 0 ? 'border-primary opacity-100' : 'border-white/10 opacity-30'}`} />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-30 flex flex-col justify-end text-center h-full pb-8">
                  <div className={`transition-all duration-700 delay-100 transform ${distance === 0 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    
                    <Fingerprint className="w-10 h-10 text-primary mx-auto mb-4 opacity-80" strokeWidth={1} />
                    
                    <p className="text-xs font-black tracking-[0.3em] text-primary/80 uppercase mb-2">ID // {fellow.id.toString().padStart(3, '0')}</p>
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wider drop-shadow-lg mb-2">{fellow.name}</h3>
                    <p className="text-primary-foreground/90 font-medium text-sm italic drop-shadow-sm mb-6 max-w-[200px] mx-auto line-clamp-2">"{fellow.tagline}"</p>
                    
                    {/* Pulsing access button */}
                    <button className="relative overflow-hidden inline-flex items-center justify-center gap-2 group/btn max-w-max mx-auto px-6 py-2 rounded-full border border-primary/50 text-xs uppercase tracking-widest font-bold text-white bg-primary/20 backdrop-blur-md shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:bg-primary transition-colors flex items-center justify-center select-none active:scale-95 duration-300">
                      ACCESS FILE
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      <div className="absolute inset-x-0 top-0 h-px bg-white/40" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-6 mt-6 sm:mt-12 z-20">
          <button 
            onClick={handlePrev}
            className="w-14 h-14 rounded-full border border-border/50 bg-background/50 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 disabled:opacity-30 disabled:hover:bg-background/50 disabled:hover:text-foreground disabled:hover:border-border/50 active:scale-95"
            aria-label="Previous Profile"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="hidden sm:flex items-center gap-3">
            {fellows.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${i === activeIndex ? "w-10 bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.6)]" : "w-2 bg-border/50 hover:bg-muted"}`}
                aria-label={`Jump to profile ${i + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-14 h-14 rounded-full border border-border/50 bg-background/50 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 disabled:opacity-30 disabled:hover:bg-background/50 disabled:hover:text-foreground disabled:hover:border-border/50 active:scale-95"
            aria-label="Next Profile"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>

      {/* Cinematic HUD Overlay */}
      {selectedFellow && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-3xl animate-in fade-in duration-500" onClick={() => setSelectedFellow(null)}></div>
          
          <div className="relative w-full max-w-6xl rounded-[32px] overflow-hidden flex flex-col md:flex-row max-h-[90vh] shadow-[0_0_100px_hsl(var(--primary)/0.15)] border border-primary/20 bg-card/80 animate-in zoom-in-95 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            
            {/* Tech Corner HUD Marks */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-primary/50 pointer-events-none z-50 rounded-tl-[32px]"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-accent/50 pointer-events-none z-50 rounded-br-[32px]"></div>

            <button 
              onClick={() => setSelectedFellow(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/50 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 active:scale-90 transition-all z-50 text-foreground group shadow-2xl"
              aria-label="Close modal"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Left Huge Image Pane */}
            <div className="md:w-[45%] h-72 md:h-auto relative shrink-0 overflow-hidden">
              <img 
                src={selectedFellow.image} 
                alt={selectedFellow.name} 
                className="absolute inset-0 w-full h-full object-contain bg-black/40 backdrop-blur-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card via-card/50 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-8 left-8 z-10 hidden md:flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-primary/40 bg-background/50 backdrop-blur flex items-center justify-center font-black text-primary font-mono text-sm shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                  {selectedFellow.id.toString().padStart(2, '0')}
                </div>
                <div className="px-4 py-1.5 bg-background/70 backdrop-blur-md border border-white/10 rounded-full inline-flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse"></span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground opacity-80">Sync Active</span>
                </div>
              </div>
            </div>

            {/* Right Information Pane */}
            <div className="md:w-[55%] p-8 sm:p-12 lg:p-16 overflow-y-auto relative text-card-foreground custom-scrollbar">
              
              <div className="max-w-xl pb-10">
                <div className="flex items-center gap-4 mb-4 opacity-60 relative w-max">
                  <div className="w-8 h-[2px] bg-primary"></div>
                  <span className="text-xs font-black tracking-[0.4em] font-mono text-primary uppercase">Fellow Profile</span>
                </div>
                
                <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-4 text-foreground leading-[1.1]">
                  {selectedFellow.name}
                </h2>
                
                <div className="glass-card mb-10 border-l-4 border-primary bg-primary/5 p-6 rounded-r-2xl shadow-inner relative overflow-hidden backdrop-blur-sm">
                  <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12">
                    <Quote size={80} />
                  </div>
                  <p className="text-xl lg:text-3xl font-serif italic text-primary/90 relative z-10 leading-snug">
                    "{selectedFellow.tagline}"
                  </p>
                </div>

                <div className="mb-10 group">
                  <p className="text-[11px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-3 flex items-center gap-2">
                    <span className="w-4 h-[2px] bg-accent/50 group-hover:bg-accent group-hover:w-8 transition-all"></span>
                    Operational Sector // Impact Zones
                  </p>
                  <p className="font-semibold text-lg sm:text-xl text-foreground bg-background/50 border border-border/50 rounded-xl p-5 backdrop-blur shadow-sm">
                    {selectedFellow.schools}
                  </p>
                </div>

                <div className="relative pt-4 border-t border-border/40">
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground font-medium pb-8 text-pretty whitespace-pre-wrap">
                    {selectedFellow.story}
                  </p>
                </div>

                {/* Sub-Gallery for individual Fellows if provided */}
                {'gallery' in selectedFellow && selectedFellow.gallery && (
                  <div className="mt-8 border-t border-white/5 pt-8">
                    <p className="text-[11px] font-black uppercase tracking-[0.25em] text-primary/80 mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      Field Logs // Moments in Action
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {selectedFellow.gallery.map((imgUrl, idx) => (
                        <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-white/10 group cursor-pointer relative">
                          <img 
                            src={imgUrl} 
                            alt={`Action record ${idx}`} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                          />
                          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
              </div>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
};

export default FellowsSection;
