const brands = [
  { name: "MAHLE", logo: <img src="./assets/mahle-logo.png" alt="MAHLE" /> },
  { name: "TAKAO", logo: <img src="./assets/takao-logo.svg" alt="TAKAO" /> },
  { name: "SULOY", logo: <img src="./assets/suloy-logo.svg" alt="SULOY" /> },
  { name: "APEX", logo: <img src="./assets/apex-logo.png" alt="APEX" /> },
  { name: "VICTOR REINZ", logo: <img src="./assets/victor-reinz.png" alt="VICTOR REINZ" /> },
  { name: "ORIGINAL KS", logo: <img src="./assets/ks-logo.png" alt="ORIGINAL KS" /> }
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
                className="h-12 w-auto object-contain"
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
