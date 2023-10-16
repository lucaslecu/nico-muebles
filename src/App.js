import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemlistContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <header>
      <Navbar/>
      <ItemlistContainer greeting="hola mundo" /> 
    </header>
  


  );
}

export default App;
