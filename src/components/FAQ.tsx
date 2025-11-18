import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Qual é a garantia dos produtos?",
      answer: "Todos os nossos produtos possuem garantia de fábrica, que varia de acordo com a marca e tipo de peça. Geralmente, pistões e camisas têm garantia de 3 meses contra defeitos de fabricação. Produtos originais podem ter garantia estendida de até 1 ano."
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Aceitamos diversas formas de pagamento: dinheiro, PIX, cartões de débito e crédito (em até 12x), transferência bancária e parcelamento via Mercado Livre. Para compras no Mercado Livre, você também pode usar o Mercado Pago com todos os seus benefícios."
    },
    {
      question: "Qual é o prazo de entrega?",
      answer: "Para clientes de São Paulo e região metropolitana, o prazo médio é de 1 a 3 dias úteis. Para outras regiões, o prazo varia de 5 a 15 dias úteis dependendo da localidade. Peças sob encomenda podem ter prazos diferenciados, que serão informados no momento da compra."
    },
    {
      question: "Vocês fazem entregas em todo o Brasil?",
      answer: "Sim! Realizamos entregas para todo o território nacional através dos Correios e transportadoras parceiras. O frete é calculado de acordo com o CEP de destino e o peso do produto. Consulte o valor no momento da compra."
    },
    {
      question: "Posso trocar ou devolver um produto?",
      answer: "Sim. Você tem até 7 dias para solicitar a troca ou devolução conforme o Código de Defesa do Consumidor. O produto deve estar em perfeito estado, sem sinais de uso, com embalagem original e nota fiscal. Peças especiais ou sob encomenda podem ter políticas específicas."
    },
    {
      question: "Como saber se a peça é compatível com meu veículo?",
      answer: "Nossa equipe técnica especializada está pronta para ajudar! Entre em contato pelo WhatsApp informando o modelo, ano e motor do seu veículo. Temos um catálogo completo e podemos confirmar a compatibilidade antes da compra."
    },
    {
      question: "Vocês trabalham com peças originais ou paralelas?",
      answer: "Trabalhamos com ambas! Oferecemos peças originais de marca e também alternativas de alta qualidade. Todas as peças são certificadas e de fornecedores confiáveis. Você pode escolher a opção que melhor se adequa ao seu orçamento e necessidade."
    },
    {
      question: "Fazem instalação das peças?",
      answer: "Não fazemos instalação, mas podemos indicar oficinas parceiras de confiança na região. Nossa especialidade é fornecer peças de qualidade com o melhor atendimento e preço do mercado."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl animate-float-slow" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Perguntas Frequentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tire suas dúvidas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre nossos produtos,
            garantias e políticas
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="animate-fade-in-up animation-delay-200">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-border rounded-xl px-6 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:text-primary hover:no-underline py-6">
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center animate-fade-in-up animation-delay-400">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Fale com nossa equipe!
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
