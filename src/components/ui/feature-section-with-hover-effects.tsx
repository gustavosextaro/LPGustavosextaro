
import { cn } from "@/lib/utils";
import {
  IconTerminal2,
  IconBrandGithub,
  IconDatabase,
  IconRocket,
  IconCloud,
  IconLayout,
  IconUserCheck,
  IconChecklist,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Domínio prático de IDEs e Stacks modernas",
      description:
        "Entendimento claro de como utilizar diferentes IDEs e ferramentas como Lovable, Firebase, Antigravity e Windsurf de forma estratégica, sem depender de uma única plataforma ou ambiente.",
      icon: <IconTerminal2 className="w-6 h-6" />,
    },
    {
      title: "Conhecimento completo sobre Git e GitHub",
      description:
        "Versionamento do projeto na prática, organização de repositório, commits, histórico de alterações e segurança para evoluir o projeto sem medo de quebrar tudo.",
      icon: <IconBrandGithub className="w-6 h-6" />,
    },
    {
      title: "Estrutura lógica com banco de dados funcional",
      description:
        "Organização de dados, leitura, cadastro e conexão com banco de dados real, compreendendo a lógica por trás de aplicações SaaS e sistemas digitais.",
      icon: <IconDatabase className="w-6 h-6" />,
    },
    {
      title: "Um MVP construído do zero absoluto",
      description:
        "Criação de um Micro SaaS desde a ideia inicial até uma aplicação funcional, com interface, lógica e estrutura profissional pronta para testes.",
      icon: <IconRocket className="w-6 h-6" />,
    },
    {
      title: "Deploy, produção e variáveis de ambiente",
      description:
        "Publicação do projeto online, configuração de ambiente, variáveis e entendimento do fluxo entre desenvolvimento, teste e produção.",
      icon: <IconCloud className="w-6 h-6" />,
    },
    {
      title: "Estrutura real de um projeto SaaS",
      description:
        "Compreensão prática da arquitetura de um SaaS, incluindo organização de pastas, fluxo do sistema, separação entre interface, lógica e banco de dados, permitindo construir projetos com base sólida e escalável.",
      icon: <IconLayout className="w-6 h-6" />,
    },
    {
      title: "Autonomia para evoluir e escalar o projeto",
      description:
        "Capacidade de ajustar, melhorar e expandir o próprio projeto após a construção do MVP, sem depender de terceiros ou ficar preso a uma única ferramenta ou ambiente.",
      icon: <IconUserCheck className="w-6 h-6" />,
    },
    {
      title: "Clareza total do processo do zero ao produto online",
      description:
        "Entendimento completo do caminho desde a ideia inicial até um software funcional online, passando por construção, organização, versionamento, estruturação e publicação do projeto em ambiente real.",
      icon: <IconChecklist className="w-6 h-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-white/5",
        (index === 0 || index === 4) && "lg:border-l border-white/5",
        index < 4 && "lg:border-b border-white/5"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/10 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
