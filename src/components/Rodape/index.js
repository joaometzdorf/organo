import "./Rodape.css";

const Rodape = (props) => {
  return (
    <footer className="footer">
      <div className="footer__sociais">
        <a href="https://www.facebook.com">
          <img src="/images/fb.png" alt="Logo do Facebook" />
        </a>
        <a href="https://www.instagram.com">
          <img src="/images/ig.png" alt="Logo do Instagram" />
        </a>
        <a href="https://www.x.com">
          <img src="/images/tw.png" alt="Logo do Twitter" />
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