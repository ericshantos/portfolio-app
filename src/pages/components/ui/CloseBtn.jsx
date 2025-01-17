'use client';

import './Btn.scss';
import { AiOutlineClose } from "react-icons/ai";
import { useAppContext } from '.';

const CloseBtn = () => {
  const { toggleVisibility } = useAppContext();

  return (
    <button className="CloseBtn" onClick={toggleVisibility}>
      <AiOutlineClose size={24} />
    </button>
  );
}

export default CloseBtn;