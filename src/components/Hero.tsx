import { MessageCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  const handleMercadoLivre = () => {
    window.open("https://www.pemasp.com.br", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo/Brand */}
        <div className="mb-8 inline-block">
          <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-primary/20">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-primary-foreground" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              PEMASP
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto font-light">
          AUTO PEÇAS
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground leading-tight max-w-4xl mx-auto">
          Qualidade e Variedade em<br />
          <span className="text-primary">Peças Automotivas</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Especializada em componentes de motor, pistões, camisas e muito mais. 
          Atendimento personalizado e as melhores marcas do mercado.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="xl" 
            variant="cta"
            onClick={handleWhatsApp}
            className="w-full sm:w-auto min-w-[240px]"
          >
            <MessageCircle className="w-5 h-5" />
            Fale no WhatsApp
          </Button>
          
          <Button 
            size="xl" 
            variant="outline"
            onClick={handleMercadoLivre}
            className="w-full sm:w-auto min-w-[240px]"
          >
            <ShoppingCart className="w-5 h-5" />
            Ver Loja Oficial
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
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
