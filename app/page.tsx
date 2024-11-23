export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 text-gray-800">
      <main className="container mx-auto p-8 flex-grow">
        <section id="mission" className="my-12">
          <h1 className="text-4xl font-bold mb-4">AdaDev</h1>
          <h2 className="text-3xl font-semibold mb-4">
            Transformando o Futuro do Desenvolvimento de Software
          </h2>
          <p className="text-lg">
            Capacitar desenvolvedores com IA avançada para otimizar o
            desenvolvimento de software.
          </p>
        </section>

        <section id="services" className="my-12">
          <h2 className="text-3xl font-bold mb-4">Inovação constante</h2>
          <p className="text-lg">
            Transforme Suas Ideias em Realidade com AdaDev!
          </p>
        </section>
      </main>
    </div>
  );
}
