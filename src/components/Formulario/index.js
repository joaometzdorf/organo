import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [anime, setAnime] = useState("");
  const [imagem, setImagem] = useState("");
  const [categoria, setCategoria] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    const novoPersonagem = {
      nome,
      anime,
      imagem,
      categoria,
    };

    const personagensLocalStorage =
      JSON.parse(localStorage.getItem("personagens")) || [];
    localStorage.setItem(
      "personagens",
      JSON.stringify([...personagensLocalStorage, novoPersonagem])
    );

    props.aoPersonagemCadastrado(novoPersonagem);
    setNome("");
    setAnime("");
    setImagem("");
    setCategoria("");
    document.querySelector(".formulario").classList.add("hidden")
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
          valor={anime}
          aoAlterado={(valor) => setAnime(valor)}
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
          itens={props.categorias}
          valor={categoria}
          aoAlterado={(valor) => setCategoria(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
