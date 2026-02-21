'use client';

import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Target, 
  Monitor, 
  Users, 
  LayoutList, 
  MessageCircle, 
  Home,
  ChevronRight,
  PlayCircle,
  ArrowDown,
  CreditCard,
  PhoneCall,
  ArrowRight
} from "lucide-react";
import { SectionContainer } from "@/components/SectionContainer";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { HeroSection, LogosSection } from "@/components/ui/hero-1";
import { Features } from "@/components/ui/features-4";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-5 h-5 mr-2 fill-current" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049c0 2.123.554 4.197 1.607 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.598h.005c6.637 0 12.048-5.414 12.051-12.051 0-3.212-1.25-6.232-3.52-8.511z"/>
  </svg>
);

export default function LandingPage() {
  const CHECKOUT_URL = "https://pay.hub.la/BJnKLtoOxKRR0pZ0ddcQ";
  const WHATSAPP_URL = "https://wa.link/7pjg5p";

  const navItems = [
    { name: 'Início', url: '#', icon: Home },
    { name: 'Público', url: '#context', icon: Users },
    { name: 'Conteúdo', url: '#modules', icon: LayoutList },
    { name: 'Inscrição', url: '#offer', icon: CreditCard },
    { name: 'FAQ', url: '#faq', icon: MessageCircle }
  ];

  const modules = [
    {
      id: 1,
      title: "Fundamentos do SaaS",
      content: ["Conceitos de Front, Back e DB", "O que é MVP e Micro SaaS", "Introdução ao Vibe Coding"],
      objective: "Criar mentalidade de produto."
    },
    {
      id: 2,
      title: "Ferramentas e Stack",
      content: ["Lovable e Firebase", "GitHub para versionamento", "Custos reais de um Micro SaaS"],
      objective: "Conectar todas as ferramentas."
    },
    {
      id: 3,
      title: "Construindo na Prática",
      content: ["Dashboard e Dados", "UX básico para SaaS", "Interface + Banco Funcional"],
      objective: "Ver o SaaS ganhando vida."
    }
  ];

  return (
    <div className="min-h-screen bg-[#000401] selection:bg-white/30 selection:text-white">
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-6">
        <div className="pointer-events-auto">
          <NavBar items={navItems} />
        </div>
      </div>

      <HeroSection />
      <LogosSection />
      <Features />

      <SectionContainer className="text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6 text-white text-shadow-premium">O que você vai aprender</h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-headline">
            No Mvp ao SaaS, o objetivo central é contextualizar toda a estrutra lógica, funcional e estratégica que um SaaS, ou MVP, precisam ter para escalar no mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              icon: Target, 
              title: "Conceitos gerais", 
              desc: "Fundamentos estruturais sobre stacks, siglas, arquitetura e lógica de projetos SaaS." 
            },
            { 
              icon: Monitor, 
              title: "Conteúdo prático", 
              desc: "Conteúdo teórico com aplicação prática e exercícios orientados para construção real." 
            },
            { 
              icon: Users, 
              title: "Acompanhamento ao vivo", 
              desc: "Sessões semanais de construção ao vivo, análise de projetos e suporte técnico direcionado." 
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 text-left space-y-4 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-colors">
                <item.icon className="w-6 h-6 text-white/80" />
              </div>
              <h3 className="text-xl font-bold font-headline text-white">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pb-0">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4 text-white text-shadow-premium">O que você terá ao final do curso</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-headline">
            Mais do que teoria. Você sai com conhecimento técnico aplicado e um projeto real estruturado do zero.
          </p>
        </div>
        <FeaturesSectionWithHoverEffects />
      </SectionContainer>

      <SectionContainer id="modules" className="pt-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4 text-white text-shadow-premium">Conteúdo completo</h2>
            <p className="text-muted-foreground text-lg font-headline">Uma jornada estruturada do zero absoluto até o deploy final.</p>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-sm font-medium text-white/80 tracking-tight">Aulas Gravadas/ Ao vivo</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((aula) => (
            <div key={aula.id} className="group bg-white/[0.03] rounded-3xl p-8 relative overflow-hidden transition-all border border-white/5">
              <div className="text-xs font-bold text-white/40 mb-4 uppercase tracking-widest">Aula 0{aula.id}</div>
              <h3 className="text-xl font-bold font-headline mb-6 text-white">{aula.title}</h3>
              <ul className="space-y-3 mb-8">
                {aula.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ChevronRight className="w-4 h-4 text-white/20 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="text-xs text-muted-foreground italic">
                  Objetivo: <span className="text-white/80 not-italic">{aula.objective}</span>
                </div>
                <PlayCircle className="w-6 h-6 text-white/20 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button 
            variant="ghost" 
            className="group text-muted-foreground hover:text-white transition-all text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-3"
            asChild
          >
            <a href="#offer">
              Ver cronograma completo
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </Button>
        </div>
      </SectionContainer>

      <SectionContainer id="offer" className="py-24 px-4 md:px-12">
        <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden px-4 md:px-12 py-12 md:p-16 lg:p-24 text-center bg-card border border-white/5 shadow-[0_0_100px_rgba(255,255,255,0.02)] max-w-5xl mx-auto">
          <div className="glow-accent -top-40 -left-40 opacity-20 animate-pulse-glow" />
          <div className="glow-accent -bottom-40 -right-40 opacity-20 animate-pulse-glow" />
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold mb-6 tracking-tight text-white text-shadow-premium leading-tight">
            Comece sua jornada do <br className="hidden md:block" /> MVP ao SaaS hoje
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed font-headline">
            Transforme suas ideias em produtos digitais reais com o método Do MVP ao SaaS.
          </p>

          <div className="space-y-6 mb-16">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-white/20">
                40% de desconto
              </div>
              <p className="text-muted-foreground line-through text-lg font-medium opacity-60">De R$ 197,00</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white">
                12x R$ <span className="text-white">12,91</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground mt-2 font-headline">ou R$ 127,00 à vista</p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="h-16 md:h-20 w-full sm:w-auto px-4 md:px-20 rounded-2xl bg-white text-[#000401] hover:bg-white/90 text-lg md:text-xl font-bold uppercase tracking-wide group mb-12 transition-transform hover:scale-105 active:scale-95" 
            asChild
          >
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">Quero acessar agora</a>
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-[10px] md:text-xs font-bold text-muted-foreground tracking-[0.2em] uppercase opacity-60">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Pix</span>
            <span>7 Dias de Garantia</span>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="faq" className="max-w-4xl px-4 md:px-12">
        <h2 className="text-3xl md:text-5xl font-headline font-bold mb-12 text-center text-white text-shadow-premium">Dúvidas Frequentes</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {[
            { q: "Preciso saber programar?", a: "Não! O curso é focado em Vibe Coding e uso de IA, permitindo que qualquer pessoa com determinação consiga construir seu Micro SaaS." },
            { q: "As aulas são para iniciantes?", a: "Sim, começamos do absoluto zero, explicando conceitos fundamentais de front-end, back-end e banco de dados de forma simples." },
            { q: "Quanto tempo dura cada aula?", a: "As aulas têm média de 15 minutos, focando no que realmente importa para você não perder tempo." },
            { q: "O curso é teórico ou prático?", a: "Totalmente prático! A teoria é introduzida enquanto construímos o produto real." },
            { q: "Vou conseguir criar um SaaS real?", a: "Com certeza. Ao final do curso você terá um projeto funcional, versionado e pronto para deploy." }
          ].map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-2xl px-6 bg-white/5 data-[state=open]:border-white/20 transition-all">
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline text-white">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionContainer>

      <SectionContainer className="py-24 border-t border-white/5 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-12 relative">
          <div className="glow-accent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
          
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-white text-shadow-premium tracking-tight">
            Ainda tem dúvidas?
          </h2>
          
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-base md:text-lg text-white/90 font-headline leading-relaxed">
              Aqui você não encontrará apenas explicações genéricas, mas um processo claro de construção,<br className="hidden md:block" /> versionamento, deploy e organização de um projeto funcional.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 px-4">
            <Button size="lg" className="h-14 md:h-16 px-6 md:px-10 rounded-2xl bg-white text-black hover:bg-white/90 font-bold text-xs md:text-sm w-full sm:w-auto transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]" asChild>
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">Garantir minha vaga agora</a>
            </Button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <ShimmerButton 
                className="h-14 md:h-16 px-6 md:px-10 rounded-2xl w-full sm:w-auto shadow-2xl"
                background="rgba(255, 255, 255, 0.05)"
              >
                <WhatsAppIcon />
                <span className="font-bold text-xs md:text-sm">Tirar minhas dúvidas</span>
              </ShimmerButton>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 pt-6 text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em] px-4">
            <span>Vagas limitadas</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/20" />
            <span>Acesso imediato</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/20" />
            <span>Construção prática</span>
          </div>
        </div>
      </SectionContainer>

      <footer className="py-12 border-t border-white/5 bg-[#000401]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="font-headline font-bold text-white text-lg flex items-center gap-2">
            Do MVP ao SaaS
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
          <div className="text-white/40">
            © 2025 Gustavo Sextaro. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
