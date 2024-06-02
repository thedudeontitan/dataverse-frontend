'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {

    const getRandomPosition = () => {
        // Generate random values for x and y within a range
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        return { x, y };
    };
    return (
        <div className="min-h-screen flex w-full ">
            <div className='flex flex-col items-start my-auto px-20 gap-10 lg:w-[70vw]'>
                <div className="text-[5.5vw] z-10 font-poppinsRegular lg:mt-20 text-white leading-none">
                    Unlock the Power of Your Data with <span className='text-transparent font-poppinsSemiBold text-[6vw] text-stroke-lg'>Dataverse</span>
                </div>
                <div className='text-white z-10 text-2xl font-poppinsRegular'>
                    Join Dataverse to transform your data into assets. Our secure, decentralized platform enables effortless data capture, management, and trading from diverse devices and sensors. Empower your data with blockchain for innovation and growth.
                </div>
                <Link href="/dashboard" className='bg-white z-50 font-poppinsThin rounded-xl px-10 py-3 text-xl'>
                    DASHBOARD
                </Link>
            </div>
            <div className="absolute h-screen w-full overflow-clip">
                <div className="absolute w-[150vw] h-[150vh] ">
                    <motion.img
                        src="/images/Gradient3.webp"
                        alt="Gradient"
                        className=""
                        initial={{ x: -400, y: -600, rotate: 60 }}
                        animate={{
                            x: -400, y: -600, rotate: 360
                        }}
                        transition={{ duration: 400, repeat: Infinity }}
                    />
                </div>
                <div className="absolute w-[150vw] h-[150vh] ">
                    <motion.img
                        src="/images/Gradient2.webp"
                        alt="Gradient"
                        className=""
                        initial={{ x: -500, y: -800, rotate: 50, opacity: 1 }}
                        animate={{
                            x: -1000, y: -200, rotate: 180, opacity: 0.2
                        }}
                        transition={{ duration: 300, repeat: Infinity }}
                    />
                </div>
                <div className="absolute w-[300vw] h-[300vw] ">
                    <motion.img
                        src="/images/Gradient1.webp"
                        alt="Gradient"
                        className=""
                        initial={{ x: -300, y: 300, rotate: 50, opacity: 0.5 }}
                        animate={{
                            x: 1000, y: 0, rotate: 360, opacity: 0.2
                        }}
                        transition={{ duration: 500, repeat: Infinity }}
                    />
                </div>
            </div>
            <div className="z-20 absolute top-0 bottom-0 right-0 left-0 bg-[linear-gradient(220deg,rgba(255,255,255,0)_60.05382521119378%,hsl(0,0%,0%)_120.0062716057621%)]" style={{ background: 'linear-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)' }}>
                <div className="z-10 w-full h-full bg-repeat opacity-[0.10] bg-[url('../public/images/bg-noise2.png')]"></div>
            </div>
        </div>
    )
}