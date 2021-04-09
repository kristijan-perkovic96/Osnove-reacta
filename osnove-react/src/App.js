import { ToastContainer } from "react-toastify";
import ObavjestKomponenta from "./components/obavjest/ObavjestKomponent";

import 'react-toastify/dist/ReactToastify.css';
import KomponentaSDizajnom from "./components/bootstrapKoristenje/KomponentaSDizajnom";
function App() {
  return (
    <div className="App">
     <KomponentaSDizajnom/>
     <ToastContainer/>
    </div>
  );
}

export default App;
