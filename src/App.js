import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Categoria from "./components/Categoria";
import Rodape from "./components/Rodape";
import Adicionar from "./components/Adicionar";

function App() {
  const categorias = [
    {
      nome: "Romance",
      corPrimaria: "#ff66b2",
      corSecundaria: "#ff99cc80",
    },
    {
      nome: "Slice-of-life",
      corPrimaria: "#f39c12",
      corSecundaria: "#f5b04190",
    },
    {
      nome: "Drama",
      corPrimaria: "#c0392b",
      corSecundaria: "#e74c3c95",
    },
    {
      nome: "Comédia",
      corPrimaria: "#f4d03f",
      corSecundaria: "#f8e27f",
    },
    {
      nome: "Ficção Científica",
      corPrimaria: "#2ecc71",
      corSecundaria: "#58d68d90",
    },
    {
      nome: "Fantasia",
      corPrimaria: "#9b59b6",
      corSecundaria: "#b48aed90",
    },
    {
      nome: "Ação",
      corPrimaria: "#ff5733",
      corSecundaria: "#ff7f5090",
    },
    {
      nome: "Suspense",
      corPrimaria: "#34495e90",
      corSecundaria: "#5d6d7e50",
    },
    {
      nome: "Aventura",
      corPrimaria: "#3498db",
      corSecundaria: "#5dade290",
    },
    {
      nome: "Música",
      corPrimaria: "#bdc3c7",
      corSecundaria: "#ecf0f1",
    },
    {
      nome: "Esportes",
      corPrimaria: "#27ae60",
      corSecundaria: "#2ecc7190",
    },
    {
      nome: "Seinen",
      corPrimaria: "#707b7c",
      corSecundaria: "#95a5a695",
    },
    {
      nome: "Shoujo",
      corPrimaria: "#fd79a8",
      corSecundaria: "#ffb6c1",
    },
    {
      nome: "Shounen",
      corPrimaria: "#3498db",
      corSecundaria: "#85c1e9",
    },
    {
      nome: "Sobrenatural",
      corPrimaria: "#8e44ad",
      corSecundaria: "#af7ac595",
    },
  ];

  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    const dadosLocalStorage =
      JSON.parse(localStorage.getItem("personagens")) || [];
    setPersonagens(dadosLocalStorage);
  }, []);

  const aoNovoPersonagemAdicionado = (personagem) => {
    setPersonagens([...personagens, personagem]);
  };

  const aoDeletarPersonagem = (nomePersonagem) => {
    const novosPersonagens = personagens.filter(
      (personagem) => personagem.nome !== nomePersonagem
    );

    localStorage.setItem("personagens", JSON.stringify(novosPersonagens));

    setPersonagens(novosPersonagens);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoPersonagemCadastrado={(personagem) =>
          aoNovoPersonagemAdicionado(personagem)
        }
        categorias={categorias.map((time) => time.nome)}
      />

      <Adicionar />

      {categorias.map((categoria) => {
        return (
          <Categoria
            key={categoria.nome}
            nome={categoria.nome}
            corPrimaria={categoria.corPrimaria}
            corSecundaria={categoria.corSecundaria}
            personagens={personagens.filter(
              (personagem) => personagem.categoria === categoria.nome
            )}
            aoDeletarPersonagem={aoDeletarPersonagem}
          />
        );
      })}

      <Rodape autor={"Desenvolvido por Alura e João Metzdorf."} />
    </div>
  );
}

export default App;
