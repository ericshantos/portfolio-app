'use client';

import ColorBtn from "./ColorBtn";

const ConteinerColor : React.FC = () => {

    return (
        <div className="ConteinerColor">
            <ColorBtn color='#fc8d8d' />
            <ColorBtn color='#fce38f' />
            <ColorBtn color='#8efcb5' />
        </div>
    );
};

export default ConteinerColor;