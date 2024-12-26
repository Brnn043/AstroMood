export const saveMood = (mood) => {
    const moodHistory = getMoodHistory();

    moodHistory.unshift(mood); 

    if (moodHistory.length > 7) {
        moodHistory.pop(); 
    }

    localStorage.setItem("moodHistory", JSON.stringify(moodHistory));

    alert(moodHistory)
}

export const getMoodHistory = () => {
    if (typeof window === "undefined") {
        return [];
    }
    return JSON.parse(window.localStorage.getItem("moodHistory")) || [];
}

export const dayLabel = [
    'today',
    'yesterday',
    'last 2 days',
    'last 3 days',
    'last 4 days',
    'last 5 days',
    'last 6 days'
];

export const moodLabel = {
    '0': 'not good',
    '1': 'ok',
    '2': 'fine',
    '3': 'good',
    '4': 'happy'
}

export const getAvgMood = () => {
    const moodHistory = getMoodHistory();
    if (moodHistory.length === 0) return 'no mood recorded';

    const sum = moodHistory.reduce((acc, mood) => acc + Number(mood), 0);
    const avgMoodIndex = Math.round(sum / moodHistory.length);

    return moodLabel[avgMoodIndex];
};