import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/pemasp-logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8">
      {/* Decorative top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green via-brand-yellow to-brand-green" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="PEMASP Auto Peças" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Especializada em peças automotivas de qualidade. 
              Atendimento personalizado e as melhores marcas do mercado.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:1123128251" 
                className="flex items-center gap-2 text-gray-400 hover:text-brand-green transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>(11) 2312-8251</span>
              </a>
              <a 
                href="tel:1123128252" 
                className="flex items-center gap-2 text-gray-400 hover:text-brand-green transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>(11) 2312-8252</span>
              </a>
              <a 
                href="https://wa.me/5511951061998" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-brand-green transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>(11) 95106-1998</span>
              </a>
              <a 
                href="mailto:vendas@pecauto.com.br" 
                className="flex items-center gap-2 text-gray-400 hover:text-brand-green transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>vendas@pecauto.com.br</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Localização</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  Av. Queiroz Pedroso, 187<br />
                  Jardim Pedroso<br />
                  Mauá - SP
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Horário</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-gray-400">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Segunda a Sexta:</p>
                  <p className="text-white">08:00 - 18:00</p>
                  <p className="mt-2">Sábado:</p>
                  <p className="text-white">08:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2024 PEMASP AUTO PEÇAS - Todos os direitos reservados</p>
            <p>CNPJ: 46.251.267/0001-52</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
