import { ToastContainer } from "react-toastify";
import ObavjestKomponenta from "./components/obavjest/ObavjestKomponent";

import 'react-toastify/dist/ReactToastify.css';
import KomponentaSDizajnom from "./components/bootstrapKoristenje/KomponentaSDizajnom";
import Indexeddb from "./components/indexeddb/Indexeddb";
import NavigacijaDrugiTip from "./components/navigacija/NavigacijaDrugiTip";
function App() {
  return (
    <div className="App">
     <NavigacijaDrugiTip/>
     <ToastContainer/>
    </div>
  );
}

export default App;
