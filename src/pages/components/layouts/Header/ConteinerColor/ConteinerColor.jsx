'use client';

import { useAppContext } from '..';

const ConteinerColor = () => {

    return (
        <div className="ConteinerColor">
            <ColorBtn color='#fc8d8d' />
            <ColorBtn color='#fce38f' />
            <ColorBtn color='#8efcb5' />
        </div>
    );
};

const ColorBtn = ({ color }) => {

    const { changeColor } = useAppContext()

    return (
        <span className='ColorBtn' 
        style={{ backgroundColor: color }}
        onClick={() => changeColor(color)}
        ></span>
    );
};

export default ConteinerColor;