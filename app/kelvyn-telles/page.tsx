import HeaderCandidato from "../components/headerCandidato";
import PartidoOuNumero from "../components/partidoOuNumero";
import Titulo from "../components/titulo";
import kelvyn from '../assets/kelvyn.jpg'

export default function KelvynTelles() {
  return (
    <>
      <HeaderCandidato 
        imagem={kelvyn}
        nome="Kelvyn Telles"
        instagram="@kelvyn_telles"
        instagram_link="https://www.instagram.com/radio_telles/"
      />
      <br />
      <Titulo titulo="Partido político e número" />
      <div className="mt-2 flex gap-4">
        <PartidoOuNumero partidoOuNumero="MDB" />
        <PartidoOuNumero partidoOuNumero="25087" />
      </div>
      <br />
      <Titulo titulo="Quem sou" />
      <div className="mt-2">
        <p className="text-sm text-slate-300">
          Olá, sou Kelvyn Telles, candidato a vereador em Vassouras. Tenho 24 anos 
          e sou formado em engenharia de software pela Universidade de Vassouras. 
          Moro no bairro Morro da Vaca e estou comprometido em trabalhar pela nossa 
          comunidade, buscando soluções e representando os interesses dos moradores. 
          Estou aqui para ouvir suas demandas e contribuir para o desenvolvimento de 
          nossa cidade. Juntos, podemos fazer a diferença!
        </p>
      </div>
      <br />
      <Titulo titulo="Plano de governo" />
      <div className="mt-2">
        <p className="text-sm text-slate-300">
          Meu plano de governo é focado em fortalecer o turismo em Vassouras, 
          trazendo novos recursos para a cidade e gerando empregos. 
          Através do desenvolvimento do setor turístico, também buscamos atrair 
          empresas renomadas para contribuir com o crescimento econômico e social 
          de nossa comunidade. Vamos trabalhar juntos para transformar Vassouras 
          em um destino turístico de destaque e criar oportunidades para todos.
        </p>
      </div>
    </>
  );
}
