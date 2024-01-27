import "./Adicionar.css";

const Adicionar = () => {
  const adicionarCard = () => {
    const form = document.querySelector(".formulario");

    if (form.classList.contains("hidden")) {
      form.classList.remove("hidden");
    } else {
      form.classList.add("hidden");
    }
  };

  return (
    <section className="adicionar">
      <div className="vazio"></div>
      <div className="adicionar__titulo">
        <h2>Meus Personagens:</h2>
        <div className="borda"></div>
      </div>
      <div className="adicionar__botao">
        <button onClick={adicionarCard}>
          <img src="/images/botao-add.svg" alt="Botão de adicionar card" />
        </button>
      </div>
    </section>
  );
};

export default Adicionar;
