"use client";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  requisitos: z.string().min(20, {
    message: "requisitos precisa no mínimo  20 characters.",
  }),
});

export default function Teste() {
  const [apiResponse, setApiResponse] = useState<any>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requisitos: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Chama a API para criar uma história
    console.log("Valores do formulário:", values);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
    fetch(`${apiUrl}/story/create?input=${values.requisitos}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Resposta da API:", data);
        setApiResponse(data);
      })
      .catch((error) => {
        console.error("Erro ao chamar a API:", error);
      });
  }

  return (
    <div className="flex justify-center w-40">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="requisitos"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="requisitos" {...field} />
                </FormControl>
                <FormDescription>
                  Requisitos necessarios para criação da story
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Gerar</Button>
        </form>
      </Form>
      <div className="w-60">
        {apiResponse ? (
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        ) : (
          <>Resposta</>
        )}
      </div>
    </div>
  );
}
