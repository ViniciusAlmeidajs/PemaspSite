const brands = [
  { name: "MAHLE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mahle_logo.svg/2560px-Mahle_logo.svg.png" },
  { name: "TAKAO", logo: "https://www.takao.com.br/wp-content/uploads/2021/03/logo-takao-auto-parts.png" },
  { name: "SULOY", logo: "https://www.suloy.com.br/wp-content/themes/suloy/images/logo.png" },
  { name: "APEX", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKxvqL9YvPxVvH4Z5Z_RvZYqH5lZvZvZvZw&s" },
  { name: "METAL LEVE", logo: "https://www.metaleve.com.br/Images/logo.png" },
  { name: "COFAP", logo: "https://www.cofap.com.br/img/logo.png" }
];

const Brands = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Trabalhamos com as <span className="text-primary">Melhores Marcas</span>
          </h2>
          <p className="text-gray-600">
            Qualidade e confiança garantidas pelos maiores fabricantes do mercado
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
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
