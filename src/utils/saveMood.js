export const saveMood = (mood) => {
    const moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];

    moodHistory.unshift(mood); 

    if (moodHistory.length > 7) {
        moodHistory.pop(); 
    }

    localStorage.setItem("moodHistory", JSON.stringify(moodHistory));

    alert(moodHistory)
}