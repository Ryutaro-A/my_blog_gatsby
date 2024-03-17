"use client";

import Container from '@mui/material/Container';
import { usePathname } from "next/navigation";
import Link from 'next/link'
import React, { useState } from 'react';

const Header = () => {

    const pathname = usePathname();
    const links = [
        { id: 1, href: "/", label: "About" },
        { id: 2, href: "/publications", label: "Publications"},
        { id: 3, href: "/slides", label: "Slides" },
    ];

    const [openMenu, setOpenMenu] = useState(false);
    console.log(openMenu);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }


    return (
        <Container>
    <nav className="bg-white border-gray-200">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Ryutaro Asahara</span>
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false" onClick={ toggleMenu }>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            {openMenu ? (
                <div className='flex flex-row absolute z-10 top-0 right-0  min-h-fit min-w-full'>
                <div className='basis-1/2'></div>

                <div className='basis-1/2 bg-white'>
                    <ul className=' text-center border-l-2 '>
                    <li className='p-2 border-b-2'>
                        <button onClick={ toggleMenu } className='font-bold'>
                        close
                        </button>
                    </li>
                    {links.map(({ id, href, label }) => (
                        <li key={ id } className='p-2 border-b-2'>
                        <Link href={href} onClick={ toggleMenu }>{label}</Link>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            ) : undefined}
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
        {links.map(({ id, href, label }) => (
            <li key={ id }>
            <Link href={ href } className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0" legacyBehavior>{ label }</Link>

            </li>
        ))}
        </ul>
        </div>
    </div>
    </nav>
    </Container>
    )
}

export default Header
