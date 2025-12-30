import apexLogo from "@/assets/apex-logo.png";
import ksLogo from "@/assets/ks-logo.png";
import mahleLogo from "@/assets/mahle-logo.png";
import suloyLogo from "@/assets/suloy-logo.svg";
import takaoLogo from "@/assets/takao-logo.svg";
import victorReinzLogo from "@/assets/victor-reinz.png";

const brands = [
  { name: "MAHLE", logo: mahleLogo, url: "https://www.br.mahle.com/pt/" },
  { name: "TAKAO", logo: takaoLogo, url: "https://www.takao.com.br" },
  { name: "SULOY", logo: suloyLogo, url: "https://www.suloy.com" },
  { name: "APEX", logo: apexLogo, url: "https://www.apex.com" },
  { name: "VICTOR REINZ", logo: victorReinzLogo, url: "https://www.victorreinz.com" },
  { name: "ORIGINAL KS", logo: ksLogo, url: "https://www.original-ks.com" }
];

const Brands = () => {
  return (
    <section className="relative py-16 bg-white border-y border-gray-200 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Trabalhamos com as <span className="text-primary">Melhores Marcas</span>
          </h2>
          <p className="text-gray-600">
            Qualidade e confiança garantidas pelos maiores fabricantes do mercado
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center animate-fade-in-up animation-delay-200">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-16 w-32 md:h-20 md:w-36 object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="font-bold text-gray-700 text-lg">${brand.name}</span>`;
                  }
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            E muitas outras marcas de qualidade
          </p>
        </div>
      </div>
    </section>
  );
};

export default Brands;
