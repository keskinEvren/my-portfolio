import React from "react";
import { BackgroundLines } from "./background-lines";
import { FlipWords } from "./flip-words";
import Link from "next/link";

interface BackgroundProps {
    words: string[];
  }

export function Background({ words }: BackgroundProps) {
    return (
        <>
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 relative" >
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-sans py-2 sm:py-4 md:py-8 lg:py-10 relative z-20 font-bold tracking-tight">
                Hello World, <br />I am <FlipWords words={words} />
            </h2>
                <p className="max-w-lg sm:max-w-xl mx-auto text-xs sm:text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center pb-2 sm:pb-4 md:pb-6">
                Hey! I am just starting out as a Front-end Web Developer. I love creating cool, modern websites and learning new stuff. Right now, I am focused on building my skills, trying new ideas, and having fun with coding.
                </p>
                <Link
                    href="https://drive.google.com/file/d/1ehu46HyL2zMMq_VKniufcUBeK0U3vGaW/view?usp=sharing"
                    target="_blank"
                    className="relative z-50 bg-black dark:bg-white rounded-full text-white dark:text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mt-4 sm:mt-6 lg:mt-8"
                >
                    Know Me
                </Link>
            </BackgroundLines>
        </>
    );
}
