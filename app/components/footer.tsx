import Apoiador from "./apoiador";
import logoRadioTelles from '../assets/logo-radio-telles.jpg'

export default function Footer() {
    return (
        <footer className="mt-10 py-4 flex flex-col justify-center items-center bg-[#27272A]">
            <span className="mb-6 font-bold text-lg">Apoiadores</span>
            <div>
                <Apoiador imagem={logoRadioTelles} nome="Rádio Telles" />
            </div>
        </footer>
    )
}
