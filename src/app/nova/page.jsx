'use client';
import { MoodInput, MoodOutput } from "@/components/Mood"
import { Suspense, useState } from "react"
import Image from "next/image";
import { motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";

export default function Nova() {
    const [moodInput, setMoodInput] = useState(false);
    
    return (
        <>
        <Suspense fallback={<LoadingScreen />}>
            {/* Group Galaxy, Character, and Star */}
            {/* <motion.div
                className="absolute inset-0 z-2 flex justify-center items-center translate-x-[-2%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <div className="relative h-full w-full">
                    <motion.div
                        className="absolute inset-0 translate-y-[2%] h-[95%] w-[95%]"
                        animate={{
                            x: [-3, 3, -3, 3],
                            y: [3, -3, 0, 3, -3],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 6,
                            ease: "easeInOut",
                        }}
                    >
                        <Image src="/character.png" alt="character" layout="fill" objectFit="scale-down" />
                        <div className="absolute flex flex-col inset-0 translate-x-[10%] translate-y-[10%] h-[90%] w-[90%] ">
                            <Image src="/star.png" alt="star" layout="fill" objectFit="scale-down" />
                        </div>
                    
                    </motion.div>
                </div>
            </motion.div> */}


            <div className="absolute flex justify-center items-center z-30 inset-0">
                {moodInput && <button className="fixed top-14 left-5" onClick={() => setMoodInput(false)}>new day</button>}
                {moodInput? <MoodOutput setMoodInput={setMoodInput} />:<MoodInput setMoodInput={setMoodInput}/>}
            </div>
        </Suspense>
        </>
    )
}