interface Props {
    partidoOuNumero: string;
}

export default function PartidoOuNumero({ partidoOuNumero }: Props) {
    return (
        <div className="p-4 bg-[#27272A] w-60 rounded flex justify-center items-center">
            <span className="text-lg font-bold">{partidoOuNumero}</span>
        </div>
    )
}