'use client';

import { AiOutlineClose } from "react-icons/ai";
import { useApp } from ".";

const CloseBtn = () => {
  const { toggleVisibility } = useApp();

  return (
    <button className="CloseBtn" onClick={toggleVisibility}>
      <AiOutlineClose size={24} />
    </button>
  );
}

export default CloseBtn;