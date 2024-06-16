import MiApi from "./components/MiApi";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header className="bg-dark p-2 text-white">
        <h3 className="text-center mb-2 p-2 mt-2">
          BIENVENIDOS AL BUSCADOR DE LOS LIBROS DE HARRY POTTER
        </h3>
        <img
          src="https://livedoor.blogimg.jp/jesterthe13th/imgs/4/4/443eed3d-s.jpg"
          alt="imagen de harry"
          className="header-img img-fluid d-block mx-auto mb-3 mt-3"
        />
      </header>

      <div className="background-container">
        <MiApi />
      </div>

      <footer className="bg-dark text-white text-center py-4">
        <h4>REGISTRO OFICIAL DE LOS LIBROS DE HARRY POTTER</h4>
        <h5>© 2024 Todos los derechos reservados.</h5>
      </footer>
    </>
  );
}

export default App;
