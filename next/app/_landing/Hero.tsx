import React, { PropsWithChildren } from 'react'
import { Section } from './Section'
import { Button } from '../components/ui/button';

import { CustomeIcon } from './icons/CustomeIcon'
import Link from 'next/link'

export default function Hero() {
    return (
        <Section className='flex flex-col gap-2 lg:gap-4 '>
            <h1 className='text-3xl lg:text-5xl font-bold'>Hey I'm Sacha 👋</h1>
            <p className='text-lg leading-9 text-muted-foreground'>I help {" "}
                <Code>
                    <CustomeIcon fill='white' className='inline mr-0.5' name='work' size={16} />
                    Profesionnal
                    {" "}
                    Growing</Code> in their job by creating a creative presence on the internet to attract more clients.
            </p>
            <div className='mt-4 lg:mt-6 flex items-center flex-wrap gap-4'>

                <Link href="https://wa.me/0547680984?text=I'm%20interested%20in%20your%2service." target='blank'>
                    <Button size="lg" className='w-fit mt-5'>Contact me</Button>
                </Link>
                <Link href='https://www.instagram.com/sacha_ffff/' target='blank'>
                    <Button variant="ghost" size="lg" className='w-fit mt-5'>
                        <CustomeIcon size={16} name='instagram' className='mr-3' />@Sacha_ffff
                    </Button>
                </Link>
            </div>
        </Section>
    )
}

export const Code = (props: PropsWithChildren<{ className?: string }>) => {
    return (
        <span className='px-1 mx-0.5 rounded-md items-center bg-card/20 border-accent border py-1 '>
            {props.children}
        </span>
    )
}
