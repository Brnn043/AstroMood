'use client';
import { getAvgMood, getImageMood, getMoodDescription } from "@/utils/MoodUtils";
import { useState, useEffect } from "react";
import Image from "next/image";

export const AvgMood = () => {
    const [averageMood, setAverageMood] = useState(null);

    useEffect(() => {
        const avg = getAvgMood();
        setAverageMood(avg);
    }, []);

    return (
        <>
            <div className="bg-[#2a2a59] bg-opacity-75 border-2 border-white border-opacity-25 py-9 px-8 flex flex-row space-x-8 rounded-3xl md:w-full w-4/5">
                <div className="flex justify-center items-center">
                    <Image src={getImageMood(averageMood)} width={120} height={120} alt={`Mood icon of ${averageMood}`} />
                </div>
                <div className="w-64 space-y-5">
                    <div className="flex flex-col justify-center items-center space-y-3">
                        <h2 className="text-sm text-white text-center">Mood ของคุณในช่วง 7 วันนี้ คือ</h2>
                        <h1 className="text-3xl font-semibold text-center">{averageMood}</h1>
                    </div>
                    <div className="break-words text-sm">
                        {getMoodDescription(averageMood)}
                    </div>
                </div>
            </div>
        </>
    )
};