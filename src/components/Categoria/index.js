import Personagem from "../Personagem";
import "./Categoria.css";

const Categoria = (props) => {
  return (
    props.personagens.length > 0 && (
      <section
        className="categoria"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3>
          {props.nome}
          <div
            style={{ backgroundColor: props.corPrimaria }}
            className="border__bottom"
          ></div>
        </h3>
        <div className="personagens">
        {props.personagens.map((personagem) => (
            <Personagem
              corDeFundo={props.corPrimaria}
              corDoNome={props.corPrimaria}
              nome={personagem.nome}
              anime={personagem.anime}
              imagem={personagem.imagem}
              key={personagem.nome}
              aoDeletar={() => props.aoDeletarPersonagem(personagem.nome)}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Categoria;
