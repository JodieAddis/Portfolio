import Footer from "./components/Footer";
import Header from "./components/Header";
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <>
      <header className="fixed top-0 z-50">
        <Header />
      </header>
      <main>
        <PortfolioContainer />
      </main>
      <footer className="text-center">
        <Footer />
      </footer>
    </>
  );
}

export default App;
