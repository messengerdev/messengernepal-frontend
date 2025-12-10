import { 
  Megaphone, 
  Briefcase, 
  Bell, 
  MessageSquare, 
  Heart,
  User 
} from "lucide-react";

export default function UseCases() {
  const useCases = [
    {
      icon: Megaphone,
      title: "मार्केटिङ क्याम्पेन",
      description:
        "खुद्रा पसल, रेस्टुरेन्ट, होटल, रियल स्टेट, सेवा प्रदायक, व्यक्तिगत उद्यमी र कार्यक्रम आयोजकका लागि उपयुक्त। प्रचार–प्रसार सन्देश, विशेष अफर र नयाँ उत्पादनबारे जानकारी पठाएर बिक्री बढाउन र ग्राहक आकर्षित गर्न मद्दत गर्छ।"
    },
    {
      icon: Briefcase,
      title: "बिजनेस क्याम्पेन",
      description:
        "कम्पनीहरू, बैंक, वित्तीय संस्था, रियल स्टेट, सेवा प्रदायकहरू तथा एनजीओका लागि आदर्श। ग्राहक, साझेदार र सरोकारवालासँग प्रभावकारी रूपमा जानकारी आदान–प्रदान गर्न सहयोग गर्छ।"
    },
    {
      icon: MessageSquare,
      title: "ग्राहक सूचना",
      description:
        "बैंक, वित्तीय संस्था, अस्पताल, क्लिनिक, सरकारी कार्यालय, सेवा प्रदायक र विद्यालयका लागि आवश्यक। महत्वपूर्ण सूचना, अपडेट र जानकारी पठाएर ग्राहकलाई समयमै जानकारी गराउन मद्दत गर्छ।"
    },
    {
      icon: Bell,
      title: "अलर्ट SMS",
      description:
        "अस्पताल, क्लिनिक, विद्यालय, कलेज, सरकारी कार्यालय, बैंक र कार्यक्रम आयोजकका लागि महत्वपूर्ण। आपतकालीन सूचना, तुरुन्त पठाउनु पर्ने खबर र समय–सम्वेदनशील जानकारी छिटो पुर्‍याउन उपयोगी।"
    },
    {
      icon: Heart,
      title: "शुभकामना सन्देश",
      description:
        "व्यवसाय, विद्यालय, कलेज, अस्पताल, क्लिनिक, सरकारी कार्यालय, एनजीओ, रेस्टुरेन्ट, होटल र व्यक्तिगत उद्यमीहरूले धेरै प्रयोग गर्छन्। चाडपर्व, विशेष दिन वा अवसरमा शुभकामना र मेलमिलापका सन्देश पठाउन उपयोगी।"
    },
    {
      icon: User,
      title: "व्यक्तिगत SMS",
      description:
        "व्यक्तिगत उद्यमी, साना व्यवसायी, फ्रिलान्सर र व्यक्तिगत सन्देश पठाउन चाहने सबैका लागि उत्तम। साथी, परिवार, ग्राहक वा सम्पर्कमा रहेका व्यक्तिलाई छिटो र सजिलै व्यक्तिगत सन्देश पठाउन सकिन्छ।"
    }
  ];
  

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-3">
            हाम्रो प्लेटफर्मका प्रयोगहरू
          </h2>
          <p className="text-lg text-gray-600">
            विभिन्न संस्थाहरू र व्यक्तिहरूले हाम्रो सन्देश सेवाहरूबाट कसरी फाइदा लिन सक्छन् भनेर जान्नुहोस्
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <IconComponent className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

