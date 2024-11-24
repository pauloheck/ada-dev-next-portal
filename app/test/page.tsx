"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requisitos: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    /*
    api call http://127.0.0.1:8000/test/create?input=${values.requisitos}
method: POST
request body: {
   "status": "string",
   "data": {
     "test_cases": [
      {
         "test_case_id":"string",
         "description":"string",
         "steps":"string",
         "expected_result":"string",
         "actual_result":"string",
         "status":"string"
      }
   ]
}
}

*/
  }

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 flex flex-col items-center justify-center p-6 space-y-8">
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
        </div>
      )}
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 relative">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Test
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="requisitos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Information for test creation</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Describe the requirements necessary for test creation"
                      {...field}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      rows={5}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className={`w-full ${
                isLoading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white font-bold py-2 px-4 rounded transition duration-300`}
            >
              {isLoading ? "Processing..." : "Generate"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
