"use client";
import React, { useState } from "react";
import Title from "../ui/title";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from "@/schema/form-schema";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

function Contact() {
  const [message, setMessage] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formEndPoint = "https://formspree.io/f/xldjrrkl";

    try {
      const response = await fetch(formEndPoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setMessage("Email enviado com sucesso!");
        form.reset();
      }
      if (!response.ok) {
        setMessage("Algo deu errado");
      }
    } catch (error) {
      setMessage("Algo deu errado");
      console.log(error);
    }

    setTimeout(() => setMessage(""), 5000);
  }
  return (
    <section id="contact">
      <div className="flex flex-col gap-6 mt-10">
        <Title word1="ENTRE EM" word2="CONTATO" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex w-full gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Nome *Obrigatório</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email  *Obrigatório</FormLabel>
                    <FormControl>
                      <Input placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem  *Obrigatório</FormLabel>
                  <FormControl>
                    <Input className="h-40" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {message && <p>{message}</p>}

            <button
              type="submit"
              className="w-full px-10 py-4 bg-pink-400 cursor-pointer rounded-xl text-zinc-50"
            >
              Submit
            </button>
          </form>
        </Form>
      </div>
    </section>
  );
}

export default Contact;
