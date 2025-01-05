'use client';

import LoadingScreen from "@/components/LoadingScreen";
import { MoodChart } from "@/components/MoodChart";
import { AvgMood } from "@/components/ShowMood";
import { Suspense } from "react";
export default function Orbit() {
    return (
        <>
            <Suspense fallback={<LoadingScreen />}>
                <div className="flex flex-col space-y-4">
                    <AvgMood />
                    <MoodChart />
                </div>
            </Suspense>
        </>
    );
}
