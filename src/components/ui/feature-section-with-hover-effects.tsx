
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
      description:
        "Domínio estratégico de ferramentas como Lovable, Firebase e Windsurf, garantindo total autonomia e independência técnica.",
      icon: <IconTerminal2 className="w-6 h-6" />,
    },
    {
      title: "Git e GitHub Profissional",
      description:
        "Versionamento real com organização de repositórios e histórico de alterações para uma evolução segura do software.",
      icon: <IconBrandGithub className="w-6 h-6" />,
    },
    {
      title: "Estrutura de Dados e Lógica",
      description:
        "Conexão com bancos reais e estruturação lógica funcional, dominando os pilares de sistemas e aplicações digitais.",
      icon: <IconDatabase className="w-6 h-6" />,
    },
    {
      title: "MVP Construído do Zero",
      description:
        "Construção de um Micro SaaS funcional da ideia ao deploy, com arquitetura profissional pronta para validação.",
      icon: <IconRocket className="w-6 h-6" />,
    },
    {
      title: "Deploy e Infraestrutura",
      description:
        "Publicação em ambiente de produção com gestão de variáveis e domínio total do fluxo entre desenvolvimento e teste.",
      icon: <IconCloud className="w-6 h-6" />,
    },
    {
      title: "Arquitetura Real SaaS",
      description:
        "Arquitetura escalável com fluxos de sistema otimizados e separação clara entre interface, lógica e banco de dados.",
      icon: <IconLayout className="w-6 h-6" />,
    },
    {
      title: "Autonomia de Evolução",
      description:
        "Capacidade técnica para expandir o projeto de forma independente, sem limitações de ferramentas ou dependência de terceiros.",
      icon: <IconUserCheck className="w-6 h-6" />,
    },
    {
      title: "Ciclo Completo de Produto",
      description:
        "Visão integral do ciclo de vida do software, passando pela estruturação, versionamento e lançamento em mercado real.",
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
