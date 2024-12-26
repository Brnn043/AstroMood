'use client';
import { MoodInput, MoodOutput } from "@/components/Mood"
import { useState } from "react"

export default function Nova() {
    const [moodInput, setMoodInput] = useState(false);
    return (
        <>
            {moodInput?<MoodOutput />:<MoodInput setMoodInput={setMoodInput}/>}
        </>
    )
}