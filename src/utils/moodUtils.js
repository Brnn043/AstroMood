export const saveMood = (mood) => {
    const moodHistory = getMoodHistory();

    moodHistory.unshift(mood); 

    if (moodHistory.length > 7) {
        moodHistory.pop(); 
    }

    localStorage.setItem("moodHistory", JSON.stringify(moodHistory));
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
    // if (mood === 'Tough') return "ใจดีกับตัวเองวันนี้หน่อยนะ ลองพักผ่อน ดื่มน้ำ แล้วบอกตัวเองว่ารู้สึกแบบนี้ได้ ถ้าคุณต้องการความช่วยเหลือ ลองติดต่อใครสักคน คุณไม่ได้อยู่คนเดียว";
    // if (mood === 'Not Great') return "มันโอเคถ้าจะรู้สึกไม่ค่อยดี ลองคุยกับใครสักคนหรือลองทำอะไรที่ทำให้สบายใจสิ หายใจลึก ๆ แล้วจำไว้ว่าเดี๋ยววันแย่ ๆ ก็ผ่านไป";
    // if (mood === 'Alright') return "ไม่เป็นไรถ้ารู้สึกกลางๆ ลองเดินเล่นสั้นๆ หรือลองทำอะไรที่ผ่อนคลายดูนะ ก้าวเล็กๆ ก็ทำให้วันดีขึ้นได้ ลองทำอะไรใหม่ๆ ดูสิ";
    // if (mood === 'Great') return "คุณทำได้ดีมาก! ลองให้รางวัลตัวเองด้วยอะไรที่สนุกๆ วันนี้สิ ลองใส่ใจสิ่งเล็กๆ น้อยๆ ที่ทำให้วันนี้ดีขึ้น";
    // if (mood === 'Amazing') return "รักษาความสุขนี้ไว้! อาจลองแบ่งปันความสุขกับคนรอบข้างวันนี้นะ ลองเขียนบันทึกความทรงจำนี้ไว้ เพื่ออ่านตอนที่ต้องการกำลังใจในวันหลัง";
    // return "ลองไปบันทึก mood ของคุณในหน้า nova ก่อนนะ!";
    if (mood === 'Tough') return "Be kind to yourself today. Try to rest, drink water, and remind yourself it's okay to feel this way. If you need help, reach out to someone. You're not alone.";
    if (mood === 'Not Great') return "It's okay to not feel great. Try talking to someone or doing something that makes you feel better. Take a deep breath and remember, bad days will pass.";
    if (mood === 'Alright') return "It's okay to feel neutral. Maybe take a short walk or try something relaxing. Small steps can make a day better. Try doing something new.";
    if (mood === 'Great') return "You're doing awesome! Treat yourself to something fun today. Pay attention to the little things that make the day better.";
    if (mood === 'Amazing') return "Keep up the happiness! Maybe share your joy with those around you today. Write down this moment to revisit when you need encouragement in the future.";
    return "Try recording your mood on the Nova page first!";
}