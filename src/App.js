import logo from "./logo.svg";
import "./App.css";
import "./assets/imagenes/facebook.png";
import Contenedores from "./components/Contenedores";
import Sec1 from "./components/Sec1";
import Sec2 from "./components/Sec2";
import Sec3 from "./components/Sec3";
import Sec4 from "./components/Sec4";
import Sec5 from "./components/Sec5";
import Sec6 from "./components/Sec6";
import Sec7 from "./components/Sec7";
import Sec8 from "./components/Sec8";
import Sec9 from "./components/Sec9";
import Sec10 from "./components/Sec10";
import SecFin1 from "./components/SecFin1";
import SecFin2 from "./components/SecFin2";
import SecFin3 from "./components/SecFin3";
import SecFin4 from "./components/SecFin4";

/*
Comentario multilinea
*/

function App() {
  const saludo = "Hola Mundo!";

  const saludarConNombre = (nombre) => {
    alert(`hola ${nombre}`);
  };

  //https://picsum.photos/200/300
  return (
    <>
      <div className="App">
        <div>
          <Sec1 />
        </div>
        <div>
          <Sec2 />
        </div>
        <div>
          <Sec3 />
        </div>
        <div className="Division">
          <Sec4 />
          <Sec5 />
        </div>
        <div className="Division">
          <Sec6 />
          <Sec7 />
        </div>
        <div className="Division">
          <Sec8 />
          <Sec9 />
        </div>
        <div>
          <Sec10 />
        </div>
        <hr style={{ backgroundColor: "#faf9f9", width: 710 }}></hr>
        <div className="flexBoxFin">
          <SecFin1 />
          <SecFin2 />
          <SecFin3 />
          <SecFin4 />
        </div>
        <div>
          <h6>Developed by RAQUEL DIAZ</h6>
        </div>
      </div>
    </>
  );
}

export default App;
