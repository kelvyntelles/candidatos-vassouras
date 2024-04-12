'use client'

import Image from 'next/image'
import jardimVassouras from '../assets/vassouras.jpg'
import Link from 'next/link';

interface Props {
    imagem: any;
    nome: string;
    link_pagina: string;
}

export default function CardCandidato({ imagem, nome, link_pagina }: Props) {
    return (
      <div className='bg-[#27272A] sm:w-1/4'>
        <div>
            <Image 
                src={jardimVassouras}
                alt='Jardim de Vassouras'
            />
        </div>
        <div className='flex justify-center items-center mt-[-80px]'>
            <Image 
                src={imagem}
                alt='Jardim de Vassouras'
                width={165}
                className='
                    rounded-lg 
                    border-4 
                    border-solid 
                    border-[#166534] 
                    max-h-36
                    object-cover   
                    '
            />
        </div>
        <div className='mt-4 flex justify-center items-center'>
            <span className='font-bold text-lg'>{nome}</span>
        </div>
        <div className='p-4'>
            <Link href={link_pagina}>
                <button className='
                    bg-[#166534] 
                    hover:bg-[#166542] 
                    w-full rounded 
                    py-4 font-bold'
                    >
                        Visualizar Perfil
                </button>
            </Link>
        </div>
      </div>
    );
  }