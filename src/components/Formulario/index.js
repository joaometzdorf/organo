import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    const novoColaborador = {
      nome,
      cargo,
      imagem,
      time,
    };

    const colaboradoresLocalStorage =
      JSON.parse(localStorage.getItem("colaboradores")) || [];
    localStorage.setItem(
      "colaboradores",
      JSON.stringify([...colaboradoresLocalStorage, novoColaborador])
    );

    props.aoColaboradorCadastrado(novoColaborador);
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
    document.querySelector("form").classList.add("hidden")
  };

  return (
    <section className="formulario hidden">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do personagem.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do personagem"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Anime"
          placeholder="Digite o anime que ele participa"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Gênero"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
