import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Buscador from "./Buscador";

const MiApi = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    consultaDeAPI();
  }, []);

  /* A VECES LA API NO FUNCIONA DE INMEDIATO AL MOMENTO DE ABRIR LA PÁGINA POR PRIMERA VEZ, PERO SI SE ACTUALIZA FUNCIONA */
  const consultaDeAPI = async () => {
    try {
      const url = "https://harry-potter-api.onrender.com/libros";
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data);
    } catch (e) {
      alert("ERROR EN LA API", e);
    }
  };

  const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filteredBooks = books.filter((book) =>
    normalizeString(book.libro.toLowerCase()).includes(
      normalizeString(query.toLowerCase())
    )
  );

  const monthMap = {
    enero: "01",
    febrero: "02",
    marzo: "03",
    abril: "04",
    mayo: "05",
    junio: "06",
    julio: "07",
    agosto: "08",
    septiembre: "09",
    octubre: "10",
    noviembre: "11",
    diciembre: "12"
  };

  const formatDate = (fecha) => {
    const partes = fecha.split(" ");
    const dia = partes[0];
    const mes = monthMap[partes[2]];
    const año = partes[4];
    return `${año}-${mes}-${dia.padStart(2, "0")}`;
  };

  filteredBooks.sort((a, b) => {
    const fechaA = formatDate(a.fecha_de_lanzamiento);
    const fechaB = formatDate(b.fecha_de_lanzamiento);
    return new Date(fechaB) - new Date(fechaA);
  });

  return (
    <div className="container mt-3">
      <Buscador query={query} setQuery={setQuery} />
      <div className="row">
        {filteredBooks.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card h-100 p-4 border border-3 border-dark">
              <h2 className="card-title text-center border border-2 border-dark p-2">
                {book.libro}
              </h2>
              <div className="card-body">
                <p className="card-text text-center">
                  <strong>Título Original : </strong> {book.titulo_original}
                </p>
                <p className="card-text text-center">
                  <strong>Fecha de Lanzamiento : </strong>
                  {book.fecha_de_lanzamiento}
                </p>
                <p className="card-text text-center">
                  <strong>Autora : </strong> {book.autora}
                </p>
                <p className="card-text text-center">
                  <strong>Descripción : </strong> {book.descripcion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiApi;
