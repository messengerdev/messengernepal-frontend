import { Upload, MessageSquare, Send } from "lucide-react";

export default function HowToSend() {
  const steps = [
    {
      icon: Upload,
      title: "सम्पर्क सूची अपलोड गर्नुहोस्",
      description: "Excel वा CSV फाइलबाट आफ्ना सम्पर्कहरू आयात गर्नुहोस्। राम्रो लक्ष्यका लागि तिनीहरूलाई समूहमा व्यवस्थित गर्नुहोस्।"
    },
    {
      icon: MessageSquare,
      title: "सन्देश लेख्नुहोस्",
      description: "आफ्नो सन्देश बनाउनुहोस् र नामहरूसँग व्यक्तिगत बनाउनुहोस्। तपाईं नेपाली वा अङ्ग्रेजीमा लेख्न सक्नुहुन्छ। चाहिएमा पछि पठाउनुहोस्।"
    },
    {
      icon: Send,
      title: "तुरुन्तै पठाउनुहोस्",
      description: "पठाउनुहोस् क्लिक गर्नुहोस् र एकै पटकमा हजारौं मानिसहरूसम्म पुग्नुहोस्। NTC र Ncell नेटवर्कहरूमा वास्तविक समयमा डेलिभरी ट्र्याक गर्नुहोस्।"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            SMS कसरी पठाउने?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            हाम्रो प्लेटफर्मको साथ नेपालमा धेरै मानिसहरूलाई सन्देश पठाउनु सजिलो छ। मिनेटहरूमा हजारौं मानिसहरूसम्म पुग्न यी तीन सरल चरणहरू पालना गर्नुहोस्।
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

