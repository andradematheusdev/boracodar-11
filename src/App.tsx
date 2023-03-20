import Logo from "./components/Logo";

function App() {
  return (
    <div className="wrapper">
      <div className="left">
        <div className="logo">
          <Logo />
        </div>
        <div className="content">
          <h1 className="font-titillium-web font-bold heading">Acesse a plataforma</h1>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default App;
