import { ToastContainer } from "react-toastify";
import ObavjestKomponenta from "./components/obavjest/ObavjestKomponent";

import 'react-toastify/dist/ReactToastify.css';
import KomponentaSDizajnom from "./components/bootstrapKoristenje/KomponentaSDizajnom";
import Indexeddb from "./components/indexeddb/Indexeddb";
function App() {
  return (
    <div className="App">
     <Indexeddb/>
     <ToastContainer/>
    </div>
  );
}

export default App;
