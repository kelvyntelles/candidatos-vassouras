'use client'

import { MapPin } from 'phosphor-react'
import Image from 'next/image'
import bannerRadioTelles from '../assets/banner-radio.jpg'
import Link from 'next/link'

export default function Header() {
    return (
        <>
        <header className="py-10 flex justify-between items-center">
            <Link href="/">
                <span className="font-bold sm:text-2xl">Candidatos Vassouras</span>
            </Link>
            <div className='flex justify-between items-center gap-2'>
                <span className="text-xs sm:text-sm font-light">Vassouras / RJ</span>
                <MapPin size={20} color='#166534' />
            </div>
        </header>
        <div className='mb-4'>
            <Image 
                src={bannerRadioTelles}
                alt='Banner da Radio Telles'
            />
        </div>
        </>
    )
}