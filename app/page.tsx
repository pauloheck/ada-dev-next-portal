export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 text-gray-800">
      <main className="container mx-auto p-8 flex-grow">
        <section id="mission" className="my-12">
          <h1 className="text-4xl font-bold mb-4">AdaDev</h1>
          <h2 className="text-3xl font-semibold mb-4">
            Transforming the Future of Software Development
          </h2>
          <p className="text-lg">
            Empowering developers with advanced AI to optimize software development.
          </p>
        </section>

        <section id="services" className="my-12">
          <h2 className="text-3xl font-bold mb-4">Constant Innovation</h2>
          <p className="text-lg">
            Turn Your Ideas into Reality with AdaDev!
          </p>
        </section>
      </main>
    </div>
  );
}
