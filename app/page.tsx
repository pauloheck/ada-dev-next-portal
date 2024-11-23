export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 text-gray-800">
      <header className="bg-gray-900 text-white p-4 shadow-md">
        <nav className="container mx-auto flex justify-center">
          <ul className="flex space-x-4">
            <li className="text-lg font-bold"><a href="/" className="hover:text-gray-400">AdaDev</a></li>
            <li><a href="/story" className="hover:text-gray-400">Create Story</a></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-8">
        <section id="mission" className="my-12">
          <h1 className="text-4xl font-bold mb-4">AdaDev: Transformando o Futuro do Desenvolvimento de Software</h1>
          <p className="text-lg">Capacitar desenvolvedores com IA avançada para otimizar o desenvolvimento de software.</p>
        </section>
        <section id="vision" className="my-12">
          <h2 className="text-3xl font-bold mb-4">Visão</h2>
          <p className="text-lg">Ser a plataforma líder em soluções de IA para desenvolvimento de software.</p>
        </section>
        <section id="services" className="my-12">
          <h2 className="text-3xl font-bold mb-4">Inovação constante</h2>
          <p className="text-lg">Transforme Suas Ideias em Realidade com AdaDev!</p>
        </section>
      </main>
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2024 AdaDev. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
