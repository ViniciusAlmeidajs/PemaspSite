import { MessageCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  const handleMercadoLivre = () => {
    window.open("https://www.pemasp.com.br", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-card to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Pronto para encontrar a peça que você precisa?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Entre em contato pelo WhatsApp ou visite nossa loja oficial no Mercado Livre
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="xl" 
              variant="cta"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto min-w-[280px]"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com Especialista
            </Button>
            
            <Button 
              size="xl" 
              variant="outline"
              onClick={handleMercadoLivre}
              className="w-full sm:w-auto min-w-[280px]"
            >
              <ShoppingCart className="w-5 h-5" />
              Acessar Loja no ML
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            📍 Av. Queiroz Pedroso, 187 - Jardim Pedroso, Mauá - SP
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
