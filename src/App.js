import './App.scss';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <header className="App">
      <h1 className="text-3xl font-bold underline text-purple-900">
      Hello world!
      </h1>
      <p className='text-red-500 text-lg'>
        react and tailwind
      </p>
    </header>
  </>
  );
}

export default App;
