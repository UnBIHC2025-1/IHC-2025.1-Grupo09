"use client";
import React from "react";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import { Card } from "../ui/card";
import Title from "../ui/title";
import { integrantes } from "@/data/integrantes";

function Integrantes() {
  return (
    <section id="projects">
      <div className="flex flex-col gap-6 mt-10">
        <Title word1="CONHEÇA OS" word2="INTEGRANTES" />

        {integrantes.map((integrante) => (
          <Card.Root
            key={integrante.slug}
            cardColor="pink"
            className="flex-col md:flex-row"
          >
            <Image
              src={integrante.image}
              alt={integrante.name}
              width={800}
              height={400}
              className="rounded-lg object-cover w-full max-h-[200px] md:max-w-[300px] md:max-h-[250px] h-full"
            />
            <Card.Header>
              <Card.Title>{integrante.name}</Card.Title>
              <Card.Description>{integrante.description}</Card.Description>
              <Card.Actions>
                {integrante.github_link && (
                  <a
                    href={integrante.github_link}
                    target="_blank"
                    className="flex items-center justify-start gap-2"
                  >
                    <FiGithub className="text-lg" />
                    Conheça o GitHub
                  </a>
                )}
              </Card.Actions>
            </Card.Header>
          </Card.Root>
        ))}
      </div>
    </section>
  );
}

export default Integrantes;
