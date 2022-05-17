import { ArrowUpRight } from "phosphor-react";

function App() {
  return (
    <div className="container mx-auto">
      <header>
        <div className="flex justify-center md:justify-end m-4">
          <a href="https://login.com.br" target="_blank">
            <button className="flex flex-row justify-center gap-2 items-center bg-white rounded p-2 text-[#0088c2]">
              <ArrowUpRight size={24} weight="bold" /> Ir para a Loja
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center pt-[10vh]">
          <img
            src="/assets/logo-white-web.svg"
            className="w-[200px] md:w-[350px]"
          />
          <p className="text-2xl text-center p-4">
            Cadastre-se no <strong>Clube Login</strong> preenchendo as
            informações abaixo:
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
