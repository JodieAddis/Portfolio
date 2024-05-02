import Header from "./components/Header";
import Presentation from "./components/Presentation";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section className="mt-20">
          <Presentation />
        </section>
      </main>
      <footer className="text-center">Copyright 2024</footer>
    </>
  );
}

export default App;
