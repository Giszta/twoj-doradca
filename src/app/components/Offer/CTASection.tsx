import { Phone, Mail, ArrowRight } from "lucide-react";

export default function CTASection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 text-center ">
      
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 my-5">
        Gotowy na oszczędności?
      </h3>
      
      <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
        Skontaktuj się ze mną – wspólnie wybierzemy najlepsze rozwiązanie dla Twojego domu
      </p>

      <div className="flex flex-col gap-3 mb-8 max-w-md mx-auto">
        
        <button 
          onClick={scrollToContact}
          className="group w-full px-6 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full shadow-lg active:scale-95 transition-all flex items-center justify-center gap-3"
        >
          <span>Umów bezpłatną konsultację</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="grid grid-cols-2 gap-3">
          <a 
            href="tel:+48123456789"
            className="flex items-center justify-center gap-2 px-4 py-3.5 bg-white border-2 border-gray-200 hover:border-blue-500 rounded-full transition-all active:scale-95 group"
          >
            <Phone className="w-5 h-5 text-gray-600 group-hover:text-blue-500" />
            <span className="font-semibold text-gray-700 group-hover:text-blue-500">Zadzwoń</span>
          </a>
          
          <a 
            href="mailto:kontakt@example.com"
            className="flex items-center justify-center gap-2 px-4 py-3.5 bg-white border-2 border-gray-200 hover:border-blue-500 rounded-full transition-all active:scale-95 group"
          >
            <Mail className="w-5 h-5 text-gray-600 group-hover:text-blue-500" />
            <span className="font-semibold text-gray-700 group-hover:text-blue-500">Email</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-sm">
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-green-50 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-green-700 font-semibold">Bezpłatna wycena</span>
        </div>
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-green-50 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-green-700 font-semibold">Odpowiedź w 24h</span>
        </div>
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-green-50 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-green-700 font-semibold">Pomoc z dotacjami</span>
        </div>
      </div>
    </div>
  );
}