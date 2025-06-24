"use client";

import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" })
    .max(50, { message: "O nome deve ter no máximo 50 caracteres" }),
  email: z.string().email({ message: "Formato de e-mail inválido" }),
  message: z
    .string()
    .min(5, { message: "A mensagem deve ter pelo menos 5 caracteres" })
    .max(500, { message: "A mensagem deve ter no máximo 500 caracteres" }),
});
