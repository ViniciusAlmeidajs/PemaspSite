import { MessageCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/pemasp-logo.png";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511951061998", "_blank");
  };

  const handleMercadoLivre = () => {
    window.open("https://www.pemasp.com.br", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80 z-[1]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo/Brand */}
        <div className="mb-8 inline-block">
          <div className="flex items-center justify-center gap-3 bg-white shadow-lg px-8 py-6 rounded-2xl border border-gray-200">
            <img 
              src={logo} 
              alt="PEMASP Auto Peças Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto font-light">
          AUTO PEÇAS
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight max-w-4xl mx-auto">
          Qualidade e Variedade em<br />
          <span className="text-primary">Peças Automotivas</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Especializada em componentes de motor, pistões, camisas e muito mais. 
          Atendimento personalizado e as melhores marcas do mercado.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="xl" 
            variant="whatsapp"
            onClick={handleWhatsApp}
            className="w-full sm:w-auto sm:min-w-[280px]"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </Button>
          
          <Button 
            size="xl" 
            variant="mercadolivre"
            onClick={handleMercadoLivre}
            className="w-full sm:w-auto sm:min-w-[280px]"
          >
            <ShoppingCart className="w-5 h-5" />
            Acessar Loja no Mercado Livre
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            Marcas Originais
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            Entrega Rápida
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            Atendimento Especializado
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
