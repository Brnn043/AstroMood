'use client';
import { getAvgMood } from "@/utils/MoodUtils";

export const AvgMood = () => {
    const AvgMood = getAvgMood()
    return (
        <>
            <div className="bg-slate-500 py-9 px-8 flex flex-row space-x-8 justify-center items-center rounded-3xl">
                <div>
                    <div className="bg-white w-40 h-40 rounded-full"></div>
                </div>
                <div className="w-64 space-y-5">
                    <div className="flex flex-col justify-center items-center">
                        <h2>Mood ของคุณในช่วง 7 วันนี้ คือ</h2>
                        <h1>{AvgMood}</h1>
                    </div>
                    <div className="break-words">
                        ในช่วงเวลานี้เปืดหอกดาหทททททททททททททททททททททททืหนฟรืนฟหืกรีฟืกืกฟรื
                    </div>
                </div>
            </div>
        </>
    )
};