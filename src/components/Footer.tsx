import logo from "@/assets/pemasp-logo.png";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-white via-gray-50 to-white pt-8 pb-8">
      {/* Decorative top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-brand-yellow to-primary" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="PEMASP Auto Peças" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Especializada em peças automotivas de qualidade. 
              Atendimento personalizado e as melhores marcas do mercado.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contato</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:1123128251" 
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>(11) 2312-8251</span>
              </a>
              <a 
                href="tel:1123128252" 
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>(11) 2312-8252</span>
              </a>
                <a 
                href="tel:1123128252" 
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>(11) 3410-0481</span>
              </a>
              <a 
                href="https://wa.me/5511951061998" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>(11) 95106-1998 - Whatsapp </span>
              </a>
              <a 
                href="mailto:vendas@pecauto.com.br" 
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>pemasp@pemasp.com.br</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Localização</h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://maps.app.goo.gl/p1H1fgPWJNSscX8g6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir localização no Google Maps"
                className="group block p-3 rounded-lg hover:scale-105 transform-gpu hover:shadow-lg active:scale-98 transition-all duration-200 cursor-pointer bg-white/0"
              >
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                  <div>
                    <span className="block">
                      Av. Queiroz Pedroso, 187 Sala 01/02 <br />
                      Jardim Pedroso<br />
                      Mauá - SP
                    </span>
                    <div className="mt-1 text-xs text-primary/90 font-semibold opacity-100 md:opacity-0 translate-y-0 md:translate-y-1 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-200 text-center">
                      VER NO MAPS
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Horários</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-gray-600">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <div>
                  <p>Segunda a Quinta:</p>
                  <p className="text-gray-900 font-medium">08:00 - 18:00</p>
                  <p>Sexta-Feira:</p>
                  <p className="text-gray-900 font-medium">08:00 - 17:00</p>
                  <p className="mt-2">Sábados e Domingos:</p>
                  <p className="text-gray-900 font-medium">Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© 2026 PEMASP AUTO PEÇAS - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
