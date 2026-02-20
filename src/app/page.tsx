
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
  Sparkles,
  ArrowRight,
  PhoneCall
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

export default function LandingPage() {
  const navItems = [
    { name: 'Início', url: '#', icon: Home },
    { name: 'Público', url: '#context', icon: Users },
    { name: 'Conteúdo', url: '#modules', icon: LayoutList },
    { name: 'FAQ', url: '#faq', icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen bg-[#000401] selection:bg-primary/30 selection:text-white">
      {/* Header Corrigido */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-6">
        <div className="pointer-events-auto">
          <NavBar items={navItems} />
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection />
      
      {/* Logos Section */}
      <LogosSection />

      {/* SEÇÃO 2 – PÚBLICO ALVO */}
      <Features />

      {/* SEÇÃO 3 – O QUE É O CURSO */}
      <SectionContainer className="text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-white">O que você vai aprender</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            No Mvp ao SaaS, o objetivo central é contextualizar toda a estrutra lógica, funcional e estratégica que um SaaS, ou MVP, precisam ter para escalar no mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              icon: Target, 
              title: "Conceitos gerais", 
              desc: "A teoria necessária para todo o entendimento de siglas, Stacks e conceitos necessários." 
            },
            { 
              icon: Monitor, 
              title: "Conteúdo prático", 
              desc: "Aulas teóricas com embasamento prático e com atividades no final de cada módulo." 
            },
            { 
              icon: Users, 
              title: "Acompanhamento ao vivo", 
              desc: "Chamadas semanais em grupo construindo sistemas do zero." 
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 text-left space-y-4 hover:border-primary/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline text-white">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* SEÇÃO 4 – O QUE VOCÊ TERÁ AO FINAL (ATUALIZADA) */}
      <SectionContainer className="my-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4 text-white">O que você terá ao final do curso</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mais do que teoria. Você sai com conhecimento técnico aplicado e um projeto real estruturado do zero.
          </p>
        </div>

        <FeaturesSectionWithHoverEffects />
      </SectionContainer>

      {/* SEÇÃO 5 – MÓDULOS */}
      <SectionContainer id="modules">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4 text-white">Conteúdo completo</h2>
            <p className="text-muted-foreground text-lg">Uma jornada estruturada do zero absoluto até o deploy final.</p>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-white/80">7 Aulas • 100% Gravadas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
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
            },
            {
              id: 4,
              title: "Deploy e Monetização",
              content: ["Ambiente de Produção", "Modelos de Assinatura", "Erros comuns de iniciantes"],
              objective: "Colocar no ar e faturar."
            },
            {
              id: 5,
              title: "Git e GitHub Sem Dor",
              content: ["Commit, Push e Pull", "Segurança ao usar IA", "Organização de projetos"],
              objective: "Versionamento profissional."
            },
            {
              id: 6,
              title: "Migração entre Ferramentas",
              content: ["Firebase Studio e Windsurf", "Variáveis de ambiente", "Autonomia técnica"],
              objective: "Independência de ferramenta."
            }
          ].map((aula) => (
            <div key={aula.id} className="group bg-white/[0.03] rounded-3xl p-8 relative overflow-hidden transition-all hover:scale-[1.02] border border-white/5 hover:border-primary/30">
              <div className="text-xs font-bold text-primary mb-4 uppercase tracking-widest">Aula 0{aula.id}</div>
              <h3 className="text-xl font-bold font-headline mb-6 text-white">{aula.title}</h3>
              <ul className="space-y-3 mb-8">
                {aula.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="text-xs text-muted-foreground italic">
                  Objetivo: <span className="text-white/80 not-italic">{aula.objective}</span>
                </div>
                <PlayCircle className="w-6 h-6 text-primary/40 group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
          {/* Aula 7 - Destaque */}
          <div className="lg:col-span-1 group bg-primary/5 rounded-3xl p-8 border border-primary/20">
            <div className="text-xs font-bold text-primary mb-4 uppercase tracking-widest">Aula 07</div>
            <h3 className="text-xl font-bold font-headline mb-4 text-white">Polimento e Aparência Real</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Dê o toque profissional que diferencia amadores de produtos reais. UX, fluxo de usuário e organização final do código.
            </p>
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              Finalização do Projeto
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* SEÇÃO 6 – OFERTA */}
      <SectionContainer className="py-24">
        <div className="relative rounded-[3rem] overflow-hidden p-8 md:p-16 lg:p-24 text-center bg-card border border-primary/30 shadow-[0_0_100px_rgba(160,145,234,0.1)] max-w-5xl mx-auto">
          <div className="glow-purple -top-40 -left-40 opacity-40 animate-pulse-glow" />
          <div className="glow-purple -bottom-40 -right-40 opacity-40 animate-pulse-glow" />
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold mb-6 tracking-tight text-white">
            Comece sua jornada do <br className="hidden md:block" /> MVP ao SaaS hoje
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
            Transforme suas ideias em produtos digitais reais com o método Do MVP ao SaaS.
          </p>

          <div className="space-y-4 mb-16">
            <p className="text-muted-foreground line-through text-lg font-medium opacity-60">De R$ 497,00</p>
            <div className="flex flex-col items-center justify-center">
              <div className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                12x R$ <span className="text-primary">19,70</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground mt-2">ou R$ 197,00 à vista</p>
            </div>
          </div>

          <Button size="lg" className="h-20 px-12 md:px-20 rounded-2xl bg-white text-[#000401] hover:bg-white/90 text-xl font-bold uppercase tracking-wide group mb-12 transition-transform hover:scale-105">
            Quero acessar agora
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-[10px] md:text-xs font-bold text-muted-foreground tracking-[0.2em] uppercase opacity-60">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Pix</span>
            <span>7 Dias de Garantia</span>
          </div>
        </div>
      </SectionContainer>

      {/* SEÇÃO 7 – FAQ */}
      <SectionContainer id="faq" className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12 text-center text-white">Dúvidas Frequentes</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {[
            { q: "Preciso saber programar?", a: "Não! O curso é focado em Vibe Coding e uso de IA, permitindo que qualquer pessoa com determinação consiga construir seu Micro SaaS." },
            { q: "As aulas são para iniciantes?", a: "Sim, começamos do absoluto zero, explicando conceitos fundamentais de front-end, back-end e banco de dados de forma simples." },
            { q: "Quanto tempo dura cada aula?", a: "As aulas têm média de 15 minutos, focando no que realmente importa para você não perder tempo." },
            { q: "O curso é teórico ou prático?", a: "Totalmente prático! A teoria é introduzida enquanto construímos o produto real." },
            { q: "Vou conseguir criar um SaaS real?", a: "Com certeza. Ao final do curso você terá um projeto funcional, versionado e pronto para deploy." }
          ].map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-2xl px-6 bg-white/5 data-[state=open]:border-primary/40 transition-all">
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

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#000401]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="font-headline font-bold text-white text-lg flex items-center gap-2">
            <Rocket className="w-5 h-5 text-primary" />
            Do MVP ao SaaS
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
          <div className="text-white/40">
            © 2024 SaaS Genesis. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
