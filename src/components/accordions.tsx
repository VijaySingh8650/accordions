import { faqs } from "../libs/constant"
import { TypeOfFaqs } from "../libs/types"
import Accordion from "./accordion"


const Accordions = () => {
  return (
    <div className="pt-4 p-4 flex flex-col items-center gap-8 md:w-[70vw] m-auto">

       <h1 className="text-3xl md:text-4xl text-violet-800 text-center">Frequently asked questions</h1>

        <div className=" border-b border-b-gray-200 w-full">
      {
      faqs?.map((el:TypeOfFaqs, index:number)=>{

        return <Accordion key={el?.id} {...el} index={index}/>

      })
     }

     </div>

    </div>
    
  )
}

export default Accordions
