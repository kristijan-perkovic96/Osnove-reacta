import { ToastContainer } from "react-toastify";
import ObavjestKomponenta from "./components/obavjest/ObavjestKomponent";

import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
     <ObavjestKomponenta/>
     <ToastContainer/>
    </div>
  );
}

export default App;
