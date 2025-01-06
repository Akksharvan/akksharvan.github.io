"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";

import Link from "next/link";
import defaultImg from "@/public/defaultImg.png";
import { FaGithubSquare } from "react-icons/fa";


export default function Intro() {
    return (
        <section className = "mb-28 max-w-[50rem] text-center sm:mb-0">
            <div className = "flex flex-col items-center justify-center">
                <div className = "relative">
                    <motion.div
                        initial = {{ opacity: 0, scale: 0 }}
                        animate = {{ opacity: 1, scale: 1 }}

                        transition = {{
                            type: "tween",
                            duration: 0.2
                        }}>

                        <Image
                            src = {defaultImg}
                            alt = "Akksharvan"
                            width = "192"
                            height = "192"
                            priority = {true}
                            className = "h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl">
                        </Image>
                    </motion.div>

                    <motion.span
                        className = "absolute bottom-0 right-0 text-4xl"
                        
                        initial = {{ opacity: 0, scale: 0 }}
                        animate = {{ opacity: 1, scale: 1 }}
                        
                        transition = {{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}>

                        👋
                    </motion.span>
                </div>

                <motion.h1
                    className = "mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                    initial =  {{ opacity: 0, y: 100 }}
                    animate = {{ opacity: 1, y: 0 }}>
                    <span className = "font-bold"> Hello, I&apos;m Akksharvan. </span> I&apos;m a student studying <span className = "font-bold"> Computer Science & Applied Mathematics </span> at <span className = "font-bold">UNC Chapel Hill</span>.
                </motion.h1>

                <motion.div 
                    className = "flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                    initial = {{ opacity: 0, y: 100 }}
                    animate = {{ opacity: 1, y: 0 }}
                    
                    transition = {{
                        delay: 0.1
                    }}>
                        
                    <Link
                        href = "#contact"
                        className = "group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer">
                        Contact Me Here <BsArrowRight className = "opacity-70 group-hover:translate-x-1" />
                    </Link>

                    <a
                        className = "group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
                        href = "/resume.pdf"
                        download>

                        Download Resume <HiDownload className = "opacity-60 group-hover:translate-y-1" />
                    </a>

                    <a 
                        className = "bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
                        href = "https://www.linkedin.com/in/akksharvan/"
                        title = "LinkedIn Profile">

                        <BsLinkedin />
                    </a>

                    <a
                        className = "bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
                        href = "https://github.com/Akksharvan"
                        title = "GitHub Profile">

                        <FaGithubSquare />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}