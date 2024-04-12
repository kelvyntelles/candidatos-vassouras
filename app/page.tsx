import CardCandidato from "./components/cardCandidato";
import Titulo from "./components/titulo";
import kelvyn from './assets/kelvyn.jpg'
import cosme from './assets/cosme.jpg'

export default function Home() {
  return (
    <>
      <Titulo titulo="Candidatos a Prefeito" />
      <div className="mt-4">
        <CardCandidato 
          imagem={cosme} 
          nome="Cosme Telles" 
          link_pagina="/cosme-telles" 
        />
      </div>
      <br />
      <Titulo titulo="Candidatos a Vereador" />
      <div className="mt-4">
        <CardCandidato 
          imagem={kelvyn} 
          nome="Cosme Telles" 
          link_pagina="/kelvyn-telles"
        />
      </div>
    </>
  );
}
