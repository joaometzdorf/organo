import "./Rodape.css";

const Rodape = (props) => {
  return (
    <footer className="footer">
      <div className="footer__sociais">
        <a href="https://github.com/joaometzdorf">
          <img src="/images/github.svg" alt="Logo do GitHub" />
        </a>
        <a href="https://www.instagram.com/joaometzdorf/">
          <img src="/images/ig.png" alt="Logo do Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/joaometzdorf/">
          <img src="/images/linkedin.svg" alt="Logo do Linkedin" />
        </a>
      </div>

      <div className="footer__logo">
        <img src="/images/logo.png" alt="Logo do Organo" />
      </div>

      <div className="footer__autor">
        <p>{props.autor}</p>
      </div>
    </footer>
  );
};

export default Rodape;
