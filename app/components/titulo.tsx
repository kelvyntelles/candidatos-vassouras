interface TituloProps {
    titulo: string;
}

export default function Titulo({ titulo }: TituloProps) {
    return (
        <div className="flex items-center gap-2">
            <div className="w-2 h-4 bg-[#166534]"></div>
            <span className="text-sm sm:text-lg font-bold">{titulo}</span>
        </div>
    )
}