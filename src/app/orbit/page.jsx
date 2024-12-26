'use client';
import { MoodChart } from "@/components/MoodChart";
import { AvgMood } from "@/components/ShowMood";

export default function Orbit() {
    return (
        <>
            <div className="flex flex-col space-y-4">
                <AvgMood />
                <MoodChart />
            </div>
        </>
    )
}