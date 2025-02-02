import { useApp } from "..";

interface ColorBtnProps {
    color: string;
}

const ColorBtn : React.FC<ColorBtnProps> = ({ color }) => {

    const { changeColor } = useApp()

    return (
        <span className='ColorBtn' 
        style={{ backgroundColor: color }}
        onClick={() => changeColor(color)}
        ></span>
    );
};

export default ColorBtn;