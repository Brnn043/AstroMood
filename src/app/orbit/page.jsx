'use client';

import { MoodChart } from "@/components/MoodChart";
import { AvgMood } from "@/components/ShowMood";
import { useEffect, useState } from 'react';

export default function Orbit() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
            <div className="flex flex-col space-y-4">
                <div>Loading . . .</div>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-col space-y-4">
                <AvgMood />
                <MoodChart />
            </div>
        </>
    );
}
