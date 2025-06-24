"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

function MainCard() {
  return (
    <div className="bg-zinc-50 w-full max-w-[350px] h-fit min-h-[500px] rounded-3xl  flex relative lg:sticky top-1/12 flex-col items-center justify-start gap-6">
      <BackgroundGradient className=" w-full max-w-[350px] min-h-[500px] rounded-3xl flex flex-col items-center justify-start gap-6 p-2 sm:p-6 bg-white ">
        <Image
          src="/logo_acessibilidade.jpg"
          alt="Ícone de acessibilidade: uma figura humana estilizada, com cabeça e membros representados por círculos azuis, dentro de um círculo maior. A figura está com os braços abertos em um gesto que sugere inclusão."
          width={800}
          height={400}
          className="object-cover mt-4 rounded-lg w-60 h-52"
        />
        <h3 className="text-3xl font-extrabold text-zinc-700">Grupo 9 - IHC</h3>
        <p className="font-medium text-center text-md text-zinc-500">
          Grupo da Universidade de Brasília para a matéria Interação Humano
          Computador
        </p>
        <a href="https://unbihc2025-1.github.io/IHC-2025.1-Grupo09/">
          <button className="px-10 py-4 bg-pink-400 cursor-pointer rounded-xl text-zinc-50">
            Checklist WCAG
          </button>
        </a>
      </BackgroundGradient>
    </div>
  );
}

export default MainCard;
