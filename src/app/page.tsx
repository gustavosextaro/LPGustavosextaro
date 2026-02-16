'use client';

import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Target, 
  Lightbulb, 
  Monitor, 
  CheckCircle2, 
  Zap, 
  Github, 
  ChevronRight,
  PlayCircle,
  Sparkles,
  HelpCircle,
  Home
} from "lucide-react";
import { SectionContainer } from "@/components/SectionContainer";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import Image from "next/image";
import { HeroSection, LogosSection } from "@/components/ui/hero-1";
import { NavBar } from "@/components/ui/tubelight-navbar";

export default function LandingPage() {
  const navItems = [
    { name: 'Início', url: '#', icon: Home },
    { name: 'Para quem?', url: '#context', icon: Target },
    { name: 'Conteúdo', url: '#modules', icon: Zap },
    { name: 'FAQ', url: '#faq', icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen bg-[#000401] selection:bg-primary/30 selection:text-white">
      <NavBar items={navItems} />

      {/* Hero Section */}
      <HeroSection />
      <div className="-mt-16 sm:-mt-24">
        <LogosSection />
      </div>

      {/* SEÇÃO 2 – CONTEXTUALIZAÇÃO */}
      <SectionContainer id="context" className="bg-white/2 border-y border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
              Para quem é o mini curso <br className="hidden md:block" /> Do MVP ao SaaS?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Este mini curso foi criado para iniciantes, criadores digitais, gestores de tráfego, empreendedores e pessoas que querem transformar ideias em produtos digitais reais sem depender de programação avançada.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Iniciantes em SaaS",
                "Criadores de Micro SaaS",
                "Pessoas interessadas em Vibe Coding",
                "Empreendedores digitais",
                "Quem quer validar ideias"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image 
              src="https://picsum.photos/seed/context1/800/600" 
              alt="Course Context" 
              fill 
              className="object-cover"
              data-ai-hint="saas concept"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000401]/80 to-transparent" />
          </div>
        </div>
      </SectionContainer>

      {/* SEÇÃO 3 – O QUE É O CURSO */}
      <SectionContainer className="text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">O que você vai aprender</h2>
          <p className="text-muted-foreground text-lg">
            Uma sequência de aulas gravadas, curtas e objetivas (média de 15 minutos), focadas em ensinar desde a mentalidade de produto até a criação, estruturação e deploy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Conteúdo direto ao ponto", desc: "Nada de teoria cansativa. Aprendizado prático desde o primeiro minuto." },
            { icon: Target, title: "Sem enrolação", desc: "Aulas focadas na execução e no resultado final esperado." },
            { icon: Monitor, title: "Foco em execução prática", desc: "Você verá a construção real acontecendo na sua frente." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl card-gradient text-left space-y-4 hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* SEÇÃO 4 – O QUE VOCÊ VAI CONSTRUIR */}
      <SectionContainer className="bg-primary/5 rounded-[3rem] my-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">O que você terá ao final</h2>
          <p className="text-muted-foreground">O aluno não apenas aprende teoria, mas sai com um produto digital real em funcionamento.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { title: "Micro SaaS funcional", icon: Rocket },
            { title: "Interface estruturada", icon: Monitor },
            { title: "Banco de dados", icon: CheckCircle2 },
            { title: "Projeto no GitHub", icon: Github },
            { title: "Pronto para validar", icon: Lightbulb }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-6 rounded-2xl bg-[#000401]/60 border border-white/5 text-center group hover:bg-[#000401] transition-all">
              <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8" />
              </div>
              <span className="font-bold text-sm tracking-tight">{item.title}</span>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* SEÇÃO 5 – MÓDULOS */}
      <SectionContainer id="modules">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Conteúdo completo</h2>
            <p className="text-muted-foreground text-lg">Uma jornada estruturada do zero absoluto até o deploy final.</p>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium">7 Aulas • 100% Gravadas</span>
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
            <div key={aula.id} className="group card-gradient rounded-3xl p-8 relative overflow-hidden transition-all hover:scale-[1.02] border-white/5 hover:border-primary/30">
              <div className="text-xs font-bold text-primary mb-4 uppercase tracking-widest">Aula 0{aula.id}</div>
              <h3 className="text-xl font-bold font-headline mb-6">{aula.title}</h3>
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
          <div className="lg:col-span-1 group card-gradient rounded-3xl p-8 border-primary/20 bg-primary/5">
            <div className="text-xs font-bold text-primary mb-4 uppercase tracking-widest">Aula 07</div>
            <h3 className="text-xl font-bold font-headline mb-4">Polimento e Aparência Real</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Dê o toque profissional que diferencia amadores de produtos reais. UX, fluxo de usuário e organização final do código.
            </p>
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              Finalização do Projeto
            </div>
          </div>
        </div>
        
        <p className="text-center mt-12 text-sm text-muted-foreground">
          O curso também inclui exercícios práticos opcionais para fixação do conteúdo.
        </p>
      </SectionContainer>

      {/* SEÇÃO 6 – CTA PRINCIPAL (PREÇO) */}
      <SectionContainer className="py-24">
        <div className="relative rounded-[3rem] overflow-hidden p-8 md:p-16 lg:p-24 text-center bg-card border border-primary/30 shadow-[0_0_100px_rgba(160,145,234,0.1)] max-w-5xl mx-auto">
          <div className="glow-purple -top-40 -left-40 opacity-40 animate-pulse-glow" />
          <div className="glow-purple -bottom-40 -right-40 opacity-40 animate-pulse-glow" />
          
          <h2 className="text-4xl md:text-6xl font-headline font-bold mb-6 tracking-tight">
            Comece sua jornada hoje
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
            Transforme suas ideias em produtos digitais reais com o método Do MVP ao SaaS.
          </p>

          <div className="space-y-4 mb-16">
            <p className="text-muted-foreground line-through text-lg font-medium opacity-60">De R$ 497,00</p>
            <div className="flex flex-col items-center justify-center">
              <div className="text-5xl md:text-7xl font-bold tracking-tighter">
                12x R$ <span className="text-primary">19,70</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground mt-2">ou R$ 197,00 à vista</p>
            </div>
          </div>

          <Button size="lg" className="h-20 px-12 md:px-20 rounded-2xl bg-white text-[#000401] hover:bg-white/90 text-xl font-bold uppercase tracking-wide group mb-12">
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
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12 text-center">Dúvidas Frequentes</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {[
            { q: "Preciso saber programar?", a: "Não! O curso é focado em Vibe Coding e uso de IA, permitindo que qualquer pessoa com determinação consiga construir seu Micro SaaS." },
            { q: "As aulas são para iniciantes?", a: "Sim, começamos do absoluto zero, explicando conceitos fundamentais de front-end, back-end e banco de dados de forma simples." },
            { q: "Quanto tempo dura cada aula?", a: "As aulas têm média de 15 minutos, focando no que realmente importa para você não perder tempo." },
            { q: "O curso é teórico ou prático?", a: "Totalmente prático! A teoria é introduzida enquanto construímos o produto real." },
            { q: "Vou conseguir criar um SaaS real?", a: "Com certeza. Ao final do curso você terá um projeto funcional, versionado e pronto para deploy." }
          ].map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-2xl px-6 bg-white/5 data-[state=open]:border-primary/40 transition-all">
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline">
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
