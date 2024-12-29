'use client';
import { MoodInput, MoodOutput } from "@/components/Mood"
import { useState } from "react"
import Image from "next/image";

export default function Nova() {
    const [moodInput, setMoodInput] = useState(false);
    return (
        <>
        {/* Group Galaxy, Character, and Star */}
        <div className="absolute inset-0 z-2 flex justify-center items-center translate-x-[-2%]">
            <div className="relative h-full w-full">
                {/* Galaxy */}
                <div className="absolute inset-0 opacity-20">
                    <Image src="/galaxy.png" alt="galaxy" layout="fill" objectFit="fill" />
                </div>
                {/* Character */}
                <div className="absolute inset-0 translate-y-[2%] h-[95%] w-[95%]">
                    <Image src="/character.png" alt="character" layout="fill" objectFit="scale-down" />
                </div>
                {/* Star */}
                <div className="absolute flex flex-col inset-0 translate-x-[10%] translate-y-[10%] h-[90%] w-[90%]">
                    <Image src="/star.png" alt="star" layout="fill" objectFit="scale-down" />
                </div>
            </div>
        </div>

        {/* <div className="absolute flex justify-center items-center z-3 inset-0">
            {moodInput && <button className="fixed top-14 left-5" onClick={() => setMoodInput(false)}>new day</button>}
            {moodInput? <MoodOutput setMoodInput={setMoodInput} />:<MoodInput setMoodInput={setMoodInput}/>}
        </div> */}
        </>
    )
}