'use client'
import { useState } from "react";
import { saveMood, getMoodHistory, dayLabel, moodLabel, getImageMood } from "@/utils/MoodUtils";
import Image from "next/image";

export function MoodInput({ setMoodInput }) {
    const [mood, setMood] = useState(null);

    const handleMoodClick = (value) => {
        setMood(value);
    };

    const handleConfirm = () => {
        if (mood === null) return;
        saveMood(mood);
        setMoodInput(true);
    };

    return (
        <div className="flex flex-col justify-center items-center space-y-6">
            {/* <h1 className="md:text-xl font-normal text-base">วันนี้คุณรู้สึกยังไง</h1> */}
            <h1 className="md:text-xl font-normal text-base">How are you feeling today?</h1>
            <div className="flex flex-col space-y-4 justify-center items-center">
                <div className="flex md:space-x-12 space-x-0">
                    {renderMoodOption(4, "/star/amazing.png", "Amazing", mood, handleMoodClick)}
                    {renderMoodOption(3, "/star/great.png", "Great", mood, handleMoodClick)}
                </div>
                <div className="flex md:space-x-16 space-x-0">
                    {renderMoodOption(2, "/star/alright.png", "Alright", mood, handleMoodClick)}
                    {renderMoodOption(1, "/star/notgreat.png", "Not Great", mood, handleMoodClick)}
                    {renderMoodOption(0, "/star/tough.png", "Tough", mood, handleMoodClick)}
                </div>
            </div>
            <button
                onClick={handleConfirm}
                disabled={mood === null}
                className={`px-6 py-2 mt-4 rounded-xl border-2 transition ${
                    mood === null
                        ? "bg-gray-400 border-gray-400 text-gray-700 cursor-not-allowed font-medium"
                        : "bg-blacklavender border-white border-opacity-25 text-white hover:bg-white hover:text-blacklavender hover:border-blacklavender"
                }`}
            >
                Confirm
            </button>
        </div>
    );

    function renderMoodOption(value, src, alt, mood, handleMoodClick) {
        return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div
                        onClick={() => handleMoodClick(value)}
                        className="relative cursor-pointer flex justify-center items-center"
                    >
                        <div
                            className={`absolute inset-0 transition-all ${
                                mood === value
                                    ? "scale-120 opacity-65 bg-white rounded-full blur-lg"
                                    : "opacity-0"
                            }`}
                        ></div>
                        <Image
                            src={src}
                            width={70}
                            height={70}
                            alt={alt}
                            className="relative z-10 rounded-full md:w-[80%] w-[40%]"
                        />
                    </div>
                <div className="text-slate-300 md:text-base text-sm">{alt}</div>
            </div>
        </>);
    }
}


export function MoodOutput() {
    const moodHistory = getMoodHistory();
    console.log(moodHistory);

    const groupIntoRows = (items, pattern) => {
        let result = [];
        let index = 0;
        for (const count of pattern) {
            result.push(items.slice(index, index + count));
            index += count;
        }
        return result;
    };

    const rowPatterns = {
        7: [2, 3, 2],
        6: [2, 3, 1],
        5: [2, 3],
        4: [1, 2, 1],
        3: [1, 2],
        2: [2],
        1: [1],
    };

    const pattern = rowPatterns[moodHistory.length] || [moodHistory.length];
    const groupedMoods = groupIntoRows(moodHistory, pattern);

    let globalIndex = 0; 

    return (
        <div className="space-y-3 md:translate-x-10 translate-x-0">
            {groupedMoods.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="flex justify-center space-x-0 md:space-x-20"
                >
                    {row.map((mood) => {
                        const currentIndex = globalIndex++;
                        return (
                            <div
                                key={currentIndex}
                                className="flex flex-col justify-center items-center"
                            >
                                <Image
                                    src={getImageMood(moodLabel[mood])}
                                    width={70}
                                    height={70}
                                    alt={moodLabel[mood]}
                                    className="relative z-10 rounded-full md:w-[70%] w-[20%]"
                                />
                                <p className="text-xs text-center">
                                    {moodLabel[mood]}
                                </p>
                                <p className="text-xs text-slate-300 text-center">
                                    {dayLabel[currentIndex]}
                                </p>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
