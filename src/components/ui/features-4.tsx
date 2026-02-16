import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap, Layout, Code2, Rocket, Shield, Terminal, MousePointer2 } from 'lucide-react'

export function Features() {
    return (
        <section id="context" className="py-16 md:py-24 bg-[#000401]">
            <div className="mx-auto max-w-5xl space-y-12 px-6 md:space-y-20">
                <div className="relative z-10 max-w-3xl space-y-6 text-left">
                    <h2 className="text-balance text-4xl font-headline font-bold lg:text-5xl text-white">
                        Para quem é o Mini Curso?
                    </h2>
                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            O “Do MVP ao SaaS” é um mini curso direto ao ponto, criado para pessoas que já estão inseridas no universo de tecnologia, criação de aplicações, automações ou produtos digitais e querem finalmente construir um projeto real do zero, com estrutura profissional.
                        </p>
                        <p>
                            Aqui você não vai aprender apenas conceitos superficiais. Você vai entender como sair da ideia bruta e transformar em um Micro SaaS funcional, com lógica, banco de dados, versionamento e deploy, utilizando ferramentas modernas do mercado.
                        </p>
                        <p>
                            Este não é um curso teórico ou genérico. É um conteúdo focado em execução, construção e domínio prático das ferramentas utilizadas na criação de softwares, aplicativos e produtos digitais com IA.
                        </p>
                    </div>
                    
                    <div className="pt-8">
                        <h3 className="text-xl font-headline font-semibold text-primary/90">
                            Este conteúdo é ideal para quem:
                        </h3>
                    </div>
                </div>

                <div className="relative mx-auto grid max-w-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/5 bg-white/[0.02] rounded-3xl overflow-hidden divide-x divide-y divide-white/5">
                    <div className="p-10 space-y-4 hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center gap-3">
                            <MousePointer2 className="size-5 text-primary" />
                            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Automação</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">Já testou ferramentas de IA para criação de sites, apps ou automações e busca o próximo nível.</p>
                    </div>
                    
                    <div className="p-10 space-y-4 hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center gap-3">
                            <Layout className="size-5 text-primary" />
                            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Produtos</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">Já pensou em criar um SaaS, software ou produto digital próprio mas não sabia por onde começar.</p>
                    </div>
                    
                    <div className="p-10 space-y-4 hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center gap-3">
                            <Rocket className="size-5 text-primary" />
                            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Execução</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">Quer sair do consumo de conteúdo raso e começar a construir projetos reais e funcionais.</p>
                    </div>
                    
                    <div className="p-10 space-y-4 hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center gap-3">
                            <Shield className="size-5 text-primary" />
                            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Estrutura</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">Quer entender como estruturar um projeto do zero com lógica profissional e escalável.</p>
                    </div>
                    
                    <div className="p-10 space-y-4 hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center gap-3">
                            <Terminal className="size-5 text-primary" />
                            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Domínio</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">Busca dominar ferramentas modernas como IDEs, builders e stacks de desenvolvimento assistido por IA.</p>
                    </div>

                    <div className="p-10 space-y-4 hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center gap-3">
                            <Code2 className="size-5 text-primary" />
                            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Profissional</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">Deseja aprender o fluxo real de trabalho de um desenvolvedor de produtos digitais moderno.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}