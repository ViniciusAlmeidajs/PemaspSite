import { Package, Wrench, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Package,
    title: "Amplo Estoque",
    description: "Grande variedade de peças para diversos modelos de veículos"
  },
  {
    icon: Wrench,
    title: "Especialização",
    description: "Foco em componentes de motor de alta qualidade"
  },
  {
    icon: Clock,
    title: "Pronta Entrega",
    description: "Peças disponíveis para entrega imediata"
  },
  {
    icon: Award,
    title: "Marcas Premium",
    description: "Trabalhamos com as melhores marcas do mercado"
  }
];

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Sobre a <span className="text-primary">PEMASP</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Localizada em Mauá, SP, a PEMASP AUTO PEÇAS é referência no fornecimento 
            de componentes automotivos de qualidade. Oferecemos kits de pistões, camisas, 
            anéis e demais peças essenciais para motores, sempre com foco na satisfação 
            e confiança dos nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-white border-2 border-primary/30 hover:border-primary transition-all hover:shadow-[0_0_25px_rgba(164,206,51,0.5)] hover:scale-105 duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
