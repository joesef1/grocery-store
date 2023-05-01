import { Fragment, useState } from "react";
import Space from "./Space";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";



function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const AccordionSection = () => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
 
  

  return (
    <div >
    <Space/>

    <div 
    className="mt-5 w-[80%] mx-auto border border-[#eee]  px-5 rounded-xl bg-[#F9FAFB]"
    >
      
    {/* a */}
    <Fragment>

      {/* <Accordion open={open === 1} animate={customAnimation}>

        <AccordionHeader  className=" bg-[#F9FAFB]  lowerercase" onClick={() => handleOpen(1)}>
          What is Material Tailwind?
        </AccordionHeader>

        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>

      </Accordion> */}

      <Accordion open={open === 112} animate={customAnimation}>
        <AccordionHeader  className=" bg-[#F9FAFB]  lowerercase" onClick={() => handleOpen(112)}>
        Is your website secure?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4} animate={customAnimation}>
        <AccordionHeader className="  bg-[#F9FAFB] lowercase" onClick={() => handleOpen(4)}>
        WHY MUST I MAKE PAYMENT IMMEDIATELY AT CHECKOUT?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>


      <Accordion open={open === 5} animate={customAnimation}>
        <AccordionHeader  className=" bg-[#F9FAFB]  lowercase" onClick={() => handleOpen(5)}>
        HOW DO I MAKE PAYMENTS USING PAYPAL?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>


      <Accordion open={open === 6} animate={customAnimation}>
        <AccordionHeader  className=" bg-[#F9FAFB]  lowerercase" onClick={() => handleOpen(6)}>
        How can I contact you?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>


      <Accordion open={open === 7} animate={customAnimation}>
        <AccordionHeader  className=" bg-[#F9FAFB]  lowerercase" onClick={() => handleOpen(7)}>
        How much do deliveries cost?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>


      <Accordion open={open === 8} animate={customAnimation}>
        <AccordionHeader  className=" bg-[#F9FAFB]  lowerercase" onClick={() => handleOpen(8)}>
        What are the benefits of registering?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} animate={customAnimation}>
        <AccordionHeader  className=" bg-[#F9FAFB]  lowerercase" onClick={() => handleOpen(2)}>
        I forgot my password, how do I reset it?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} animate={customAnimation}>
        <AccordionHeader  className=" bg-[#F9FAFB]  lowerercase" onClick={() => handleOpen(3)}>
        Can I edit my personal information?
        </AccordionHeader>
        <AccordionBody className={` ${ open === 3 ? 'block' : 'hidden'}`}>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>

      

    </Fragment>

{/* a */}
     </div>






{/* 






*/}
     </div>
     
  )
}

export default AccordionSection






