import "./Adicionar.css";

const Adicionar = () => {

  const adicionarCard = () => {
    const form = document.querySelector(".formulario")

    if(form.classList.contains("hidden")) {
      form.classList.remove("hidden")
    } else {
      form.classList.add("hidden")
    }
  }

  return (
    <>
      <section className="adicionar">
        <div>
          <h2>Meus Personagens:</h2>
          <div className="border__bottom--adicionar"></div>
        </div>
      </section>
      <div className="button__adicionar">
          <button onClick={adicionarCard}>
            <img
              src="/images/botao-add.png"
              alt="Botão para adicionar um novo personagem"
            />
          </button>
        </div>
    </>
  );
};

export default Adicionar;
