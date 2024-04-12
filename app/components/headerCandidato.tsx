'use client'

import { InstagramLogo } from 'phosphor-react'
import Image from 'next/image'
import Link from 'next/link';

interface Props {
    imagem: any;
    nome: string;
    instagram: string;
    instagram_link: string;
}

export default function HeaderCandidato({ 
        imagem, 
        nome, 
        instagram, 
        instagram_link 
    }: Props) {
    return (
        <header className='flex justify-between items-center'>
            <div className='flex justify-center items-center gap-4'>
                <Image 
                    src={imagem}
                    alt='foto do candidato'
                    width={100}
                    height={100}
                    className='rounded-lg border-4 border-solid border-[#166534]'
                />
                <div className='flex flex-col'>
                    <span className='font-bold text-lg'>{nome}</span>
                    <span className='font-light text-xs'>{instagram}</span>
                </div>
            </div>
            <Link href={instagram_link}>
                <InstagramLogo size={24} color='#991B1B' className='cursor-pointer' />
            </Link>
        </header>
    )
}