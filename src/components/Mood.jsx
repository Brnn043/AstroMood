'use client'
import { useState } from "react";
import { saveMood, getMoodHistory, dayLabel, moodLabel } from "@/utils/MoodUtils";
import Image from "next/image";

export function MoodInput({ setMoodInput }) {
    const [mood, setMood] = useState(null);

    // Function to handle mood selection
    const handleMoodClick = (value) => {
        setMood(value);
    };

    // Function to handle the confirm action
    const handleConfirm = () => {
        if (mood === null) return;
        saveMood(mood);
        setMoodInput(true);
    };

    return (
        <div className="flex flex-col justify-center items-center space-y-6">
            <h1 className="text-xl font-normal">วันนี้คุณรู้สึกยังไง</h1>
            <div className="flex flex-col space-y-4 justify-center items-center">
                <div className="flex space-x-12">
                    {renderMoodOption(4, "/star/amazing.png", "Amazing", mood, handleMoodClick)}
                    {renderMoodOption(3, "/star/great.png", "Great", mood, handleMoodClick)}
                </div>
                <div className="flex space-x-16">
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
                        ? "bg-gray-400 border-gray-400 text-gray-700 cursor-not-allowed"
                        : "bg-blacklavender border-white border-opacity-25 text-white hover:bg-white hover:text-blacklavender hover:border-blacklavender"
                }`}
            >
                Confirm
            </button>
        </div>
    );

    function renderMoodOption(value, src, alt, mood, handleMoodClick) {
        return (
            <div
                onClick={() => handleMoodClick(value)}
                className="relative cursor-pointer"
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
                    className="relative z-10 rounded-full"
                />
            </div>
        );
    }
}


export function MoodOutput() {
    const moodHistory = getMoodHistory();
    console.log(moodHistory);
    
    return (
        <>
            <div>
                <div className="flex flex-row space-x-3">
                    {moodHistory.map((mood,index) => (
                        <div 
                            key={index}
                            className="flex flex-col justify-center items-center">
                            <button
                            className={`w-12 h-12 rounded-full bg-gray-300 text-lg`}
                            >
                            {moodLabel[mood]}
                            </button>
                            <p className="text-xs">
                            {dayLabel[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}