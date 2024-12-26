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
    return JSON.parse(localStorage.getItem("moodHistory")) || [];
}

export const dayLabel = () => {
    return {
        '0': 'today',
        '1': 'yesterday',
        '2': 'last 2 days',
        '3': 'last 3 days',
        '4': 'last 4 days',
        '5': 'last 5 days',
        '6': 'last 7 days'
    }
}