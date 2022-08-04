
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home';

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <div className="bg-white-light min-h-screen overflow-x-hidden">
      <Navbar/>
      <Home/>
    </div>
  </>
  );
}

export default App;
