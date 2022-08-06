import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="bg-white-light overflow-x-hidden">
        <Navbar />
        <div className="min-h-screen">
          <Home />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
