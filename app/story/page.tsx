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
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  requisitos: z.string().min(20, {
    message: "requisitos precisa no mínimo  20 characters.",
  }),
});

export default function Teste() {
  // 1. Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requisitos: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // implement your submit logic here
    // call the API http://127.0.0.1:8000/story/create?input=requisitos
    // use .env to store the api url
    
    
    console.log(values);
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
      <>Retorna aqui a resposta da api</>
    </div>
  );
}
