'use client'
import { useState } from "react";
import { saveMood } from "@/utils/saveMood";

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
                {/* <input className="bg-white text-black"></input> */}
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
    return (
        <>
            <div>
                <h1>okokoko</h1>
            </div>
        </>
    )
}