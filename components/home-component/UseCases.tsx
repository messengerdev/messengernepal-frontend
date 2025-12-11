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
      title: "Marketing Campaign",
      description: "Perfect for retail stores, restaurants, hotels, real estate companies, service providers, individual entrepreneurs, and event organizers. Reach your target audience with promotional messages, special offers, and product announcements to boost sales and customer engagement."
    },
    {
      icon: Briefcase,
      title: "Business Campaign",
      description: "Ideal for businesses, banks, financial institutions, real estate companies, service providers, and NGOs. Launch professional campaigns to communicate with clients, partners, and stakeholders effectively, building stronger business relationships."
    },
    {
      icon: MessageSquare,
      title: "Client Notice",
      description: "Essential for banks, financial institutions, hospitals, clinics, government offices, service providers, and schools. Send important notices, updates, and information to your clients and customers, ensuring they stay informed about critical matters."
    },
    {
      icon: Bell,
      title: "Alert SMS",
      description: "Critical for hospitals, clinics, schools, colleges, government offices, banks, and event organizers. Send urgent alerts, emergency notifications, and time-sensitive information instantly to keep people informed and safe."
    },
    {
      icon: Heart,
      title: "Shuvakamana Sandesh",
      description: "Widely used by businesses, schools, colleges, hospitals, clinics, government offices, NGOs, restaurants, hotels, and individual entrepreneurs. Send warm greetings, festival wishes, and heartfelt messages to connect with your community and customers on special occasions."
    },
    {
      icon: User,
      title: "Personal SMS",
      description: "Perfect for individual entrepreneurs, small business owners, freelancers, and anyone who needs to send personal messages. Stay connected with friends, family, clients, and contacts by sending personalized SMS messages quickly and efficiently through our platform."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-3">
            Uses of Our Bulk Messaging Platform
          </h2>
          <p className="text-lg text-gray-600">
            How are we useful & benificial for you?
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
                <h3 className="text-xl font-bold text-primary mb-3">
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

