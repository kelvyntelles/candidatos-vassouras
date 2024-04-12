import HeaderCandidato from "../components/headerCandidato";
import PartidoOuNumero from "../components/partidoOuNumero";
import Titulo from "../components/titulo";
import cosme from '../assets/cosme.jpg'

export default function KelvynTelles() {
  return (
    <>
      <HeaderCandidato 
        imagem={cosme}
        nome="Cosme Telles"
        instagram="@cosme_telles"
        instagram_link="https://www.instagram.com/radio_telles/"
      />
      <br />
      <Titulo titulo="Partido político e número" />
      <div className="mt-2 flex gap-4">
        <PartidoOuNumero partidoOuNumero="MDB" />
        <PartidoOuNumero partidoOuNumero="11811" />
      </div>
      <br />
      <Titulo titulo="Quem sou" />
      <div className="mt-2">
        <p className="text-sm text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum 
            velit vitae pulvinar sodales. Curabitur pellentesque est eget finibus feugiat. 
            Sed nec finibus justo. Morbi magna mauris, hendrerit eget est dignissim, 
            volutpat ultrices nibh. Donec pellentesque mauris ultrices mi pulvinar, in 
            venenatis ex ultricies. Suspendisse a efficitur leo. Donec faucibus odio enim, 
            quis pretium lacus convallis eget.
        </p>
      </div>
      <br />
      <Titulo titulo="Plano de governo" />
      <div className="mt-2">
        <p className="text-sm text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum 
            velit vitae pulvinar sodales. Curabitur pellentesque est eget finibus feugiat. 
            Sed nec finibus justo. Morbi magna mauris, hendrerit eget est dignissim, 
            volutpat ultrices nibh. Donec pellentesque mauris ultrices mi pulvinar, in 
            venenatis ex ultricies. Suspendisse a efficitur leo. Donec faucibus odio enim, 
            quis pretium lacus convallis eget.
        </p>
      </div>
    </>
  );
}
