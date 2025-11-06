import { MessageCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511951061998", "_blank");
  };

  const handleMercadoLivre = () => {
    window.open("https://www.pemasp.com.br", "_blank");
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              Entre em Contato
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Pronto para encontrar a peça que você precisa?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Entre em contato pelo WhatsApp ou visite nossa loja oficial no Mercado Livre
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="xl" 
              variant="whatsapp"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto min-w-[280px] animate-fade-in"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
            
            <Button 
              size="xl" 
              variant="mercadolivre"
              onClick={handleMercadoLivre}
              className="w-full sm:w-auto min-w-[280px] animate-fade-in"
            >
              <ShoppingCart className="w-5 h-5" />
              Acessar Loja no Mercado Livre
            </Button>
          </div>

          <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg inline-block">
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="text-xl">📍</span>
              <span className="font-medium">Av. Queiroz Pedroso, 187 - Jardim Pedroso, Mauá - SP</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
