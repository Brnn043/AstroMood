'use client';
import { MoodInput, MoodOutput } from "@/components/Mood"
import { useState } from "react"

export default function Nova() {
    const [moodInput, setMoodInput] = useState(false);
    return (
        <>
        {moodInput && <button className="fixed top-14 left-5" onClick={() => setMoodInput(false)}>new day</button>}
        {moodInput? <MoodOutput setMoodInput={setMoodInput} />:<MoodInput setMoodInput={setMoodInput}/>}
        </>
    )
}