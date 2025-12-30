import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-principal.png";
import { Button } from "@/components/ui/button";
import { Headset, MessageCircle, Shield, ShoppingCart, Truck } from "lucide-react";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511951061998", "_blank");
  };

  const handleMercadoLivre = () => {
    window.open("https://www.mercadolivre.com.br/loja/pemasp#client=HOME&component_id=header_logo&component=header_logo&label=Pemasp&tracking_id=99493adb-5f6b-49bb-9079-e5a24b8dbaee&global_position=1", "_blank");
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
      
      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-12 right-8 w-40 h-40 bg-brand-yellow/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-float" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-4 text-center animate-fade-in-up">
        {/* Logo/Brand */}
        <div className="mb-8 inline-block">
          <div className="flex items-center justify-center gap-3 bg-white shadow-lg px-12 py-12 rounded-2xl border border-gray-200">
            <img 
              src={logo} 
              alt="PEMASP Auto Peças Logo" 
              className="h-44 md:h-48 w-auto object-contain max-w-[90%]"
            />
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight max-w-4xl mx-auto">
          Qualidade e Variedade em<br />
          <span className="text-primary">Peças Automotivas</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Especializada em componentes de motor, pistões, camisas e muito mais. 
          Atendimento personalizado e as melhores marcas do mercado.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-200">
          <Button 
            size="xl" 
            variant="whatsapp"
            onClick={handleWhatsApp}
            className="w-full sm:w-auto sm:min-w-[280px] transition-all hover:scale-105 hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </Button>
          
          <Button 
            size="xl" 
            variant="mercadolivre"
            onClick={handleMercadoLivre}
            className="w-full sm:w-auto sm:min-w-[280px] transition-all hover:scale-105 hover:shadow-lg"
          >
            <ShoppingCart className="w-5 h-5" />
            Acessar Loja no Mercado Livre
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
          <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl border-2 border-primary/20 hover:border-primary transition-all hover:shadow-[0_0_25px_rgba(164,206,51,0.3)] hover:scale-105 duration-300">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Marcas Originais</h3>
              <p className="text-sm text-gray-600">Produtos certificados e garantidos</p>
            </div>
          </div>
          
          <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl border-2 border-primary/20 hover:border-primary transition-all hover:shadow-[0_0_25px_rgba(164,206,51,0.3)] hover:scale-105 duration-300">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Entrega Rápida</h3>
              <p className="text-sm text-gray-600">Receba suas peças com agilidade</p>
            </div>
          </div>
          
          <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl border-2 border-primary/20 hover:border-primary transition-all hover:shadow-[0_0_25px_rgba(164,206,51,0.3)] hover:scale-105 duration-300">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Headset className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Atendimento Especializado</h3>
              <p className="text-sm text-gray-600">Equipe técnica pronta para ajudar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
