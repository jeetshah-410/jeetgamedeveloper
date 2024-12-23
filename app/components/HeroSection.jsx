"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12 ">
                <div className="col-span-7 place-self-center text-center sm:text-left py-16">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-green-600">Hello, I'm {""}</span> 
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Jeet",
                                3000, 
                                "Game Developer",
                                2000,
                            ]}
                            wrapper="span"
                            speed={30}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-lg mb-6 lg:text">
                        Aspiring Game Developer with a strong foundation in C++, Unreal Engine 5 and Blueprint Visual Scripting. Eager to apply creativity, technical expertise, and a passion for gaming to contribute to the dynamic world of game development.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 hover:bg-slate-300 text-white">Hire Me</button>
                        <button className="px-0.5 py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-600 via-teal-600 to-green-600  hover:bg-slate-800 mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/portfolio.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;