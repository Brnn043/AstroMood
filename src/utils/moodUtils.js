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
    '0': 'Tough',
    '1': 'Not Great',
    '2': 'Alright',
    '3': 'Great',
    '4': 'Amazing'
}

export const getAvgMood = () => {
    const moodHistory = getMoodHistory();
    if (moodHistory.length === 0) return 'no mood recorded';

    const sum = moodHistory.reduce((acc, mood) => acc + Number(mood), 0);
    const avgMoodIndex = Math.round(sum / moodHistory.length);

    return moodLabel[avgMoodIndex];
};

export const getImageMood = (mood) => {
    if (mood === 'Tough') return "/star/tough.png";
    if (mood === 'Not Great') return "/star/notgreat.png";
    if (mood === 'Alright') return "/star/alright.png";
    if (mood === 'Great') return "/star/great.png";
    if (mood === 'Amazing') return "/star/amazing.png";
    return "/star/tough.png";
};

export const getMoodDescription = (mood) => {
    if (mood === 'Tough') return "ใจดีกับตัวเองวันนี้ พักผ่อน ดื่มน้ำ แล้วบอกตัวเองว่ารู้สึกแบบนี้ได้นะ ถ้าคุณต้องการความช่วยเหลือ ลองติดต่อใครสักคน คุณไม่ได้อยู่คนเดียว";
    if (mood === 'Not Great') return "มันโอเคถ้ารู้สึกไม่ค่อยดี ลองคุยกับใครสักคนหรือลองทำอะไรที่ทำให้สบายใจสิ ลองหายใจลึก ๆ แล้วจำไว้ว่าเดี๋ยววันแย่ ๆ ก็ผ่านไป";
    if (mood === 'Alright') return "ไม่เป็นไรถ้ารู้สึกกลาง ๆ ลองเดินเล่นสั้น ๆ หรือลองทำอะไรที่ผ่อนคลายดูนะ ก้าวเล็ก ๆ ก็ทำให้วันดีขึ้นได้ ลองทำอะไรใหม่ ๆ ดูสิ";
    if (mood === 'Great') return "คุณทำได้ดีมาก! ลองให้รางวัลตัวเองด้วยอะไรที่สนุก ๆ วันนี้สิ ลองใส่ใจสิ่งเล็ก ๆ น้อย ๆ ที่ทำให้วันนี้ดีขึ้น";
    if (mood === 'Amazing') return "รักษาความสุขนี้ไว้! อาจลองแบ่งปันความสุขกับคนรอบข้างวันนี้นะ ลองเขียนบันทึกความทรงจำนี้ไว้ เพื่ออ่านตอนที่ต้องการกำลังใจในวันหลัง";
    return "ใจดีกับตัวเองวันนี้ พักผ่อน ดื่มน้ำ แล้วบอกตัวเองว่ารู้สึกแบบนี้ได้นะ ถ้าคุณต้องการความช่วยเหลือ ลองติดต่อใครสักคน คุณไม่ได้อยู่คนเดียว";
}