import TypewriterEffect from "@/components/ui/typewriter-effect";
import Navbar from "@/components/navbar/navbar";
import MainCard from "@/components/sections/main-card";
import { Card } from "@/components/ui/card";
import { context } from "@/data/context";
import { indicators } from "@/data/indicators";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer/footer";
import { ThemeToggle } from "@/components/sections/theme-toggle";
import Integrantes from "@/components/sections/integrantes";
import Blog from "@/components/sections/development-thoughts";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-20 p-6 lg:justify-start lg:h-screen">
      <ThemeToggle />
      <Navbar />
      <div className="w-full xl:items-start items-center flex-col lg:flex-row flex gap-30 max-w-[1280px] h-fit">
        <MainCard />
        <div id="home" className="flex flex-col w-full gap-16">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-bold text-center lg:text-start md:text-7xl 2xl:text-9xl">
              GRUPO 9
              <span className="text-pink-400 opacity-50">
                <br />
                <TypewriterEffect
                  texts={["INTERAÇÃO", "HUMANO", "IHC"]}
                  speed={250}
                  deleteSpeed={250}
                />{" "}
              </span>{" "}
            </h1>
            <p className="max-w-[600px] w-full text-center lg:text-start text-md md:text-xl opacity-70 font-light">
              Durante a matéria, aprendemos a importância da acessibilidade para
              criar produtos digitais para todos. Estudamos as diretrizes do
              WCAG como nosso guia técnico e as Heurísticas de Nielsen para
              garantir a usabilidade.
            </p>
          </div>
          <ul className="flex flex-col items-center justify-between w-full gap-4 md:flex-row">
            {indicators.map((item, index) => (
              <Card.Root
                key={index}
                cardColor="pink"
                layout="service"
                className="w-3/4 text-3xl font-bold text-center md:w-full md:text-5xl"
              >
                <span>{item.quantity}</span>
                <span className="text-sm font-light opacity-70">
                  {item.label}
                </span>
              </Card.Root>
            ))}
          </ul>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            {context.map((context, index) => (
              <Card.Root key={index} layout="service" cardColor="gray">
                <Card.Icon icon={context.icon} />
                <Card.Header>
                  <Card.Title> {context.title}</Card.Title>
                  <Card.Description>{context.description}</Card.Description>
                </Card.Header>
              </Card.Root>
            ))}
          </div>
          <Integrantes />
          <Blog />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
