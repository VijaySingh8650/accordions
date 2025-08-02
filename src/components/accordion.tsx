
import { useState } from 'react';
import plusIcon from '../assets/plus-icon.svg'
import plusIconWhite from '../assets/plus-icon-white.svg'
import substractIcon from '../assets/substract-icon.svg'
import substractIconWhite from '../assets/substract-icon-white.svg'
import useThemeStore from '../store/theme';

type TypeOfComponentProps = {
    answer: string;
    question: string;
    index:number;
}
const Accordion:React.FC<TypeOfComponentProps> = ({answer, question, index}) => {
    const [show, setShow] = useState<boolean>(false);
    const {dark} = useThemeStore();


    const handleClick = (flag:boolean) => {
        setShow(flag);
    }

  return (
    <div className='border-t border-t-gray-200  w-full'>
      <button onClick={()=>handleClick(!show)} className={`flex items-center justify-between w-full my-2 ${(index===0 && show) ? "border border-black" : ""} `}>
        <h1 className='font-bold dark:text-white text-base md:text-xl text-left'>{question}</h1>
        <img src={!show ? (dark ? plusIconWhite  : plusIcon) : (dark ? substractIconWhite : substractIcon)} alt="plus-icon" className="w-4 h-4"/>
      </button>
      {show && <p className='py-2 dark:text-white font-thin text-sm md:text-base'>
        {answer}
      </p>}
    </div>
  )
}

export default Accordion;
