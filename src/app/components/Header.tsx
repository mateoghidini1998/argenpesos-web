'use client'
import { useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Header() {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleNavbarToggle = (isOpen) => {
        setIsNavbarOpen(isOpen);
    };


    return (
        <header className={`w-full max-w-screen ${isNavbarOpen ? 'h-screen' : 'h-auto'} lg:h-[152px] gap-8  flex items-center justify-between  py-6 px-4 lg:px-[40px] 2xl:px-[60px] border-b-[1px] border-b-[#bebebe] fixed top-0 left-0 bg-white z-50`}>
            <div className={`${isNavbarOpen ? 'hidden' : 'block'}`}>
                <Link href="/" passHref>
                    <img src="./logo.png" alt="argenpesos" className="md:w-[150px] md:h-[100px] lg:w-[110px] lg:h-[70px] xl:h-[60px] xl:w-[190px]" />
                </Link>
            </div>
            <Navbar onNavbarToggle={handleNavbarToggle} />
        </header>
    );
    
}