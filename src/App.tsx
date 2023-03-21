import Logo from "./components/Logo";

function App() {
  return (
    <div className="wrapper">
      <div className="left">
        <div className="logo">
          <Logo />
        </div>
        <div className="content">
          <h1 className="font-bold heading">Acesse a plataforma</h1>
          <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
          <form action="">
            <div className="email-field">
              <div className="email">
                <label htmlFor="email" className="font-bold">E-Mail</label>
              </div>
              <input type="email" name="email" id="email" placeholder="Digite seu e-mail" className="auth-input" />
            </div>
            <div className="pass-field">
              <div className="pass">
                <label htmlFor="pass" className="font-bold">Senha</label>
                <a href="#">Esqueceu a senha?</a>
              </div>
              <input type="password" name="password" id="pass" placeholder="Digite sua senha"  className="auth-input" />
            </div>
            <button className="enter-button">Entrar</button>
          </form>
          <div>
            <p>Ainda não tem uma conta? <a href="#">Inscreva-se</a></p>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default App;
