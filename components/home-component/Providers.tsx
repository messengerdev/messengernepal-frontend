import Image from "next/image";
import whatsappLogo from "@/assets/whatsapp-logo.png";
import viberLogo from "@/assets/viber-logo.png";
import ntcLogo from "@/assets/ntc-logo.png";
import ncellLogo from "@/assets/ncell-logo.png";

export default function Providers() {
  const providers = [
    {
      name: "WhatsApp",
      logo: whatsappLogo,
      alt: "WhatsApp logo",
      textColor: "text-green-600",
      bgColor: "bg-green-50",
      hoverBgColor: "hover:bg-green-100"
    },
    {
      name: "Viber",
      logo: viberLogo,
      alt: "Viber logo",
      textColor: "text-purple-400",
      bgColor: "bg-purple-50",
      hoverBgColor: "hover:bg-purple-100"
    },
    {
      name: "NTC",
      logo: ntcLogo,
      alt: "NTC logo",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      hoverBgColor: "hover:bg-blue-100"
    },
    {
      name: "Ncell",
      logo: ncellLogo,
      alt: "Ncell logo",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
      hoverBgColor: "hover:bg-purple-100"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
            Our Service Providers
          </h2>
          <p className="text-lg text-gray-600">
            Send bulk messages through trusted platforms
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {providers.map((provider, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-6 ${provider.bgColor} rounded-lg ${provider.hoverBgColor} transition-colors shadow-sm hover:shadow-md`}
            >
              <div className="mb-4 w-20 h-20 flex items-center justify-center">
                <Image
                  src={provider.logo}
                  alt={provider.alt}
                  className="w-full h-full object-contain"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className={`text-lg font-semibold ${provider.textColor}`}>
                {provider.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

