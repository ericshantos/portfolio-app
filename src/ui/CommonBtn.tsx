'use client';

import { useApp } from ".";

interface CommonBtnProps {
    content: string;
    type: "button" | "submit";
    onclick?: () => void;
}

const CommonBtn: React.FC<CommonBtnProps> = ({ content, type, onclick }) => {
    const { bgColor } = useApp();
    return (
        <div className='CommonBtn'>
            <button type={type} style={{ '--bgColor': bgColor } as React.CSSProperties} onClick={onclick}>
                {content}
            </button>
        </div>
    );
};

export default CommonBtn;
