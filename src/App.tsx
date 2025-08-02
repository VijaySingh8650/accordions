import Accordions from "./components/accordions";
import DarkMode from "./components/dark-mode";

function App() {

  
  return (
    <div
      className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-300 p-4"
    >
      <DarkMode />
      <Accordions />
    </div>
  );
}

export default App;
