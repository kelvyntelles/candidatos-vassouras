import Image from "next/image"

interface Props {
    imagem: any;
    nome: string;
}

export default function Apoiador({ imagem, nome }: Props) {
    return (
        <div className="flex items-center justify-center gap-2">
            <Image 
                src={imagem}
                alt=''
                width={50}
                height={50}
                className='rounded-full'
            />
            <span>{nome}</span>
        </div>
    )
}