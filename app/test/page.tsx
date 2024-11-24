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

export default function TestPage() {
  const [apiResponse, setApiResponse] = useState<any>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requisitos: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Valores do formulário:", values);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
    fetch(`${apiUrl}/test/create?input=${values.requisitos}`, {
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
    <div className="min-h-[80vh] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Criar Teste</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="requisitos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Informações para criação do teste</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Descreva os requisitos necessários para a criação do teste"
                      {...field}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      rows={5}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">Gerar</Button>
          </form>
        </Form>
      </div>
      {apiResponse && (
        <div className="max-w-2xl w-full p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{apiResponse.data.title}</h2>
          <p className="mb-4 text-gray-700">
            <strong className="text-gray-900">Contexto:</strong> {apiResponse.data.context}
          </p>
          <p className="mb-4 text-gray-700">
            <strong className="text-gray-900">Identificação do Usuário:</strong> {apiResponse.data.user_identification}
          </p>
          <p className="mb-4 text-gray-700">
            <strong className="text-gray-900">Criterios de Aceitação:</strong> {apiResponse.data.acceptance_criteria}
          </p>
          <p className="mb-4 text-gray-700">
            <strong className="text-gray-900">Fluxo da História:</strong> {apiResponse.data.story_flow}
          </p>
          <p className="mb-4 text-gray-700">
            <strong className="text-gray-900">Resultado Esperado:</strong> {apiResponse.data.expected_result}
          </p>
        </div>
      )}
    </div>
  );
}