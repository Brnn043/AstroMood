'use client'
import { useState } from "react";
import { saveMood, getMoodHistory, dayLabel } from "@/utils/MoodUtils";

export function MoodInput({setMoodInput}) {
    const [mood, setMood] = useState(null);
    
    // Function to handle mood selection
    const handleMoodClick = (value) => {
        setMood(value);
    };
  
    // Function to handle the confirm action
    const handleConfirm = () => {
        if(mood === null) return;
        saveMood(mood);
        setMoodInput(true);
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center space-y-4">
                <h1>วันนี้คุณรู้สึกยังไง</h1>
                <div className="flex flex-row space-x-3">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <button
                        key={value}
                        className={`w-12 h-12 rounded-full ${mood === value ? 'bg-blue-500 text-white' : 'bg-gray-300'} text-lg`}
                        onClick={() => handleMoodClick(value)}
                        >
                        {value}
                        </button>
                    ))}
                </div>
                <button onClick={handleConfirm}>confirm</button>
            </div>
        </>
    )
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
                            onClick={() => handleMoodClick(value)}
                            >
                            {mood}
                            </button>
                            <p className="text-xs">
                            {dayLabel()[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}