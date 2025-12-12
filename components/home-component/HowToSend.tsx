import { Upload, MessageSquare, Send } from "lucide-react";

export default function HowToSend() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Contact List",
      description: "Import your contacts from an Excel or CSV file. Organize them into groups for better targeting."
    },
    {
      icon: MessageSquare,
      title: "Write Your Message",
      description: "Create your message and personalize it with names. You can write in Nepali or English. Schedule it for later if needed."
    },
    {
      icon: Send,
      title: "Send Instantly",
      description: "Click send and reach thousands of people at once. Track delivery in real-time across NTC and Ncell networks."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            How to Send Bulk SMS in Nepal?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sending messages to many people in Nepal is easy with our platform. Follow these easy steps to reach thousands in minutes.
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

