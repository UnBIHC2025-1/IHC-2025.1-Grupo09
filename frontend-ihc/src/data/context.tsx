import { ReactNode } from "react";
import { IoAccessibility, IoSearch } from "react-icons/io5";

export interface ContextItem {
  icon: ReactNode;
  title: string;
  description: string;
}

/**
 * Array de serviços
 */
export const context: ContextItem[] = [
  {
    icon: <IoAccessibility />,
    title: "Acessibilidade e WCAG",
    description:
      "Durante nossos estudos, aprendemos que a WCAG (Web Content Accessibility Guidelines), ou Diretrizes de Acessibilidade para Conteúdo Web, é o principal padrão técnico internacional para a construção de produtos digitais acessíveis. Desenvolvida pelo World Wide Web Consortium (W3C), ela funciona como um guia prático para desenvolvedores, designers e criadores de conteúdo.",
  },
  {
    icon: <IoSearch />,
    title: "Heurísticas de Nielsen",
    description:
      "Nosso estudo sobre as 10 Heurísticas de Usabilidade de Nielsen nos mostrou que elas são um conjunto de princípios essenciais para criar e avaliar interfaces intuitivas e eficientes. Ao aplicarmos conceitos como consistência, prevenção de erros e feedback claro, não estamos apenas melhorando a usabilidade para todos, mas também removendo barreiras e tornando os produtos digitais significativamente mais fáceis de usar por pessoas com deficiência e usuários de tecnologias assistivas.",
  },
];
