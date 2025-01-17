'use client';

import './Btn.scss';
import { useAppContext } from '.';

const CommonBtn = ({ content, type, onclick }) => {
    const { bgColor } = useAppContext();
    return (
        <div className='CommonBtn'>
            <button type={type} style={{ '--bgColor': bgColor }} onClick={onclick}>
                {content}
            </button>
        </div>
    );
};

export default CommonBtn;