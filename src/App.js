import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";
import Adicionar from "./components/Adicionar";

function App() {
  const times = [
    {
      nome: "Romance",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Slice-of-life",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Drama",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Comédia",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Ficção Científica",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Fantasia",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Ação",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
    {
      nome: "Suspense",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
    {
      nome: "Aventura",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
    {
      nome: "Música",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
    {
      nome: "Esportes",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
    {
      nome: "Seinen",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
    {
      nome: "Shoujo",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
    {
      nome: "Shounen",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
    {
      nome: "Sobrenatural",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    const dadosLocalStorage =
      JSON.parse(localStorage.getItem("colaboradores")) || [];
    setColaboradores(dadosLocalStorage);
  }, []);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const aoDeletarColaborador = (nomeColaborador) => {
    const novosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.nome !== nomeColaborador
    );

    localStorage.setItem("colaboradores", JSON.stringify(novosColaboradores));

    setColaboradores(novosColaboradores);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
        times={times.map((time) => time.nome)}
      />

      <Adicionar />

      {times.map((time) => {
        return (
          <Time
            key={time.nome}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletarColaborador={aoDeletarColaborador}
          />
        );
      })}

      <Rodape autor={"Desenvolvido por João Metzdorf."} />
    </div>
  );
}

export default App;
