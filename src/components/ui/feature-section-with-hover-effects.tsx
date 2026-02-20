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
      title: "Domínio de IDEs e Stacks",
      description: "Uso estratégico de ferramentas como Lovable e Windsurf sem dependência de plataforma.",
      icon: <IconTerminal2 className="w-6 h-6" />,
    },
    {
      title: "Git e GitHub Profissional",
      description: "Versionamento real com organização de repositórios e histórico seguro de alterações.",
      icon: <IconBrandGithub className="w-6 h-6" />,
    },
    {
      title: "Estrutura de Dados e Lógica",
      description: "Conexão com bancos reais e estruturação lógica funcional para aplicações escaláveis.",
      icon: <IconDatabase className="w-6 h-6" />,
    },
    {
      title: "MVP Construído do Zero",
      description: "Desenvolvimento de um Micro SaaS funcional da ideia inicial até a interface profissional.",
      icon: <IconRocket className="w-6 h-6" />,
    },
    {
      title: "Deploy e Infraestrutura",
      description: "Publicação em produção com gestão de variáveis e domínio do fluxo de lançamento.",
      icon: <IconCloud className="w-6 h-6" />,
    },
    {
      title: "Arquitetura Real SaaS",
      description: "Arquitetura escalável com separação clara entre interface, lógica e banco de dados.",
      icon: <IconLayout className="w-6 h-6" />,
    },
    {
      title: "Autonomia de Evolução",
      description: "Capacidade técnica para expandir o projeto de forma independente e sem limitações.",
      icon: <IconUserCheck className="w-6 h-6" />,
    },
    {
      title: "Ciclo Completo de Produto",
      description: "Entendimento integral do caminho desde a estruturação até a publicação em ambiente real.",
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
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-white/[0.03] to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-white/40 group-hover/feature:text-white/80 transition-colors duration-300">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/10 group-hover/feature:bg-white transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-white/90 group-hover/feature:text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
