import { Fragment, useState } from "react";
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

      {/* <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /> */}
    </svg>
  );
}

const AccordionSection = () => {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
    <div className="w-[60%] mx-auto  ">
      <Fragment>
  <Accordion
    open={open === 1}
    icon={<Icon id={1} open={open} />}
    className="border-t border-b border-gray-200"
  >
    <AccordionHeader
      className="flex items-center justify-between px-4 py-6 text-md font-medium text-gray-700 bg-[#ebebeb] cursor-pointer"
      onClick={() => handleOpen(1)}
    >
      <span className=" lowercase">WHY MUST I MAKE PAYMENT IMMEDIATELY AT CHECKOUT?</span>
      <span className="text-gray-500">
      </span>
    </AccordionHeader>
    <AccordionBody className="px-4 py-9 text-gray-500 bg-[#f8f8f8]">
    Sample ordering is on ‘first-come-first-served’ basis. To ensure that you get your desired samples, it is recommended that you make your payment within 60 minutes of checking out.
    </AccordionBody>
  </Accordion>
  <Accordion
    open={open === 2}
    icon={<Icon id={2} open={open} />}
    className="border-b border-gray-200"
  >
    <AccordionHeader
      // className="flex items-center justify-between px-4 py-3 text-lg font-medium text-gray-700 bg-gray-100 cursor-pointer"
      className="flex items-center justify-between px-4 py-6 text-md font-medium text-gray-700 bg-[#ebebeb]   cursor-pointer"


      onClick={() => handleOpen(2)}
    >
      <span>Is your website secure?</span>
      <span className="text-gray-500">
      </span>
    </AccordionHeader>
    {/* <AccordionBody className="px-4 py-3 text-gray-500 bg-gray-50"> */}
    <AccordionBody className="px-4 py-9 text-gray-500  bg-[#f8f8f8]">

    Yep! On any page where we ask you to enter your address, phone number, or credit card information, we use secure socket layer (SSL) to encrypt the communication.
    </AccordionBody>
  </Accordion>
  <Accordion
    open={open === 3}
    icon={<Icon id={3} open={open} />}
    className="border-b border-gray-200"
  >
    <AccordionHeader
      // className="flex items-center justify-between px-4 py-3 text-lg font-medium text-gray-700 bg-gray-100 cursor-pointer"
      className="flex items-center justify-between px-4 py-6 text-md font-medium text-gray-700 bg-[#ebebeb]   cursor-pointer"


      onClick={() => handleOpen(3)}
    >
      <span>When will my order ship?</span>
      <span className="text-gray-500">
      </span>
    </AccordionHeader>
    {/* <AccordionBody className="px-4 py-3 text-gray-500 bg-gray-50"> */}
    <AccordionBody className="px-4 py-9 text-gray-500  bg-[#f8f8f8]">

    After your payment is verified, it takes up to 24 hours to process and ship your order. This does not include weekends or holidays. Purchases made after 11 am PST will not be shipped out until the next business day. If you order after 11 am PST on a Friday, your order will likely be shipped out on the following Monday.
    </AccordionBody>
  </Accordion>
  <Accordion
    open={open === 4}
    icon={<Icon id={4} open={open} />}
    className="border-b border-gray-200"
  >
    <AccordionHeader
      // className="flex items-center justify-between px-4 py-3 text-lg font-medium text-gray-700 bg-gray-100 cursor-pointer"
      className="flex items-center justify-between px-4 py-6 text-md font-medium text-gray-700 bg-[#ebebeb]   cursor-pointer"


      onClick={() => handleOpen(4)}
    >
      <span className=" lowercase">HOW DO I MAKE PAYMENTS USING PAYPAL? </span>
      <span className="text-gray-500">
      </span>
    </AccordionHeader>
    {/* <AccordionBody className="px-4 py-3 text-gray-500 bg-gray-50"> */}
    <AccordionBody className="px-4 py-9 text-gray-500  bg-[#f8f8f8]">

    Paypal is the easiest way to make payments online. While checking out your order, you will be redirected to the Paypal website. Be sure to fill in correct details for fast & hassle-free payment processing. After a successful Paypal payment, a payment advice will be automatically generated to cartsy.redq.io system for your order. 
     </AccordionBody>
  </Accordion>
  <Accordion
    open={open === 5}
    icon={<Icon id={5} open={open} />}
    className="border-b border-gray-200"
  >
    <AccordionHeader
      // className="flex items-center justify-between px-4 py-3 text-lg font-medium text-gray-700 bg-gray-100 cursor-pointer"
      className="flex items-center justify-between px-4 py-6 text-md font-medium text-gray-700 bg-[#ebebeb]   cursor-pointer"


      onClick={() => handleOpen(5)}
    >
      <span>How much do deliveries cost? </span>
      <span className="text-gray-500">
      </span>
    </AccordionHeader>
    {/* <AccordionBody className="px-4 py-3 text-gray-500 bg-gray-50"> */}
    <AccordionBody className="px-4 py-9 text-gray-500  bg-[#f8f8f8]">

    There is a 5$ delivery fee if the order value is 50$ or more. If the order value is less than 50$, we charge BDT 10$ delivery fee. 
    </AccordionBody>
  </Accordion>
  <Accordion
    open={open === 6}
    icon={<Icon id={6} open={open} />}
    className="border-b border-gray-200"
  >
    <AccordionHeader
      // className="flex items-center justify-between px-4 py-3 text-lg font-medium text-gray-700 bg-gray-100 cursor-pointer"
      className="flex items-center justify-between px-4 py-6 text-md font-medium text-gray-700 bg-[#ebebeb]   cursor-pointer"


      onClick={() => handleOpen(6)}
    >
      <span>How can I contact you?  </span>
      <span className="text-gray-500">
      </span>
    </AccordionHeader>
    {/* <AccordionBody className="px-4 py-3 text-gray-500 bg-gray-50"> */}
    <AccordionBody className="px-4 py-9 text-gray-500  bg-[#f8f8f8]">

    You can always call +95625055xx or mail us at support@example.com. 
    </AccordionBody>
  </Accordion>
  <Accordion
    open={open === 7}
    icon={<Icon id={7} open={open} />}
    className="border-b border-gray-200"
  >
    <AccordionHeader
      // className="flex items-center justify-between px-4 py-3 text-lg font-medium text-gray-700 bg-gray-100 cursor-pointer"
      className="flex items-center justify-between px-4 py-6 text-md font-medium text-gray-700 bg-[#ebebeb]   cursor-pointer"


      onClick={() => handleOpen(7)}
    >
      <span>What are the benefits of registering?
 </span>
      <span className="text-gray-500">
      </span>
    </AccordionHeader>
    {/* <AccordionBody className="px-4 py-3 text-gray-500 bg-gray-50"> */}
    <AccordionBody className="px-4 py-9 text-gray-500  bg-[#f8f8f8]">

    By registering with us you can view and track your orders any time by logging into your account. Registered members also enjoy exclusive previews and updates by subscribing to our newsletter.
    </AccordionBody>
  </Accordion>
  <Accordion
    open={open === 8}
    icon={<Icon id={8} open={open} />}
    className="border-b border-gray-200"
  >
    <AccordionHeader
      // className="flex items-center justify-between px-4 py-3 text-lg font-medium text-gray-700 bg-gray-100 cursor-pointer"
      className="flex items-center justify-between px-4 py-6 text-md font-medium text-gray-700 bg-[#ebebeb]   cursor-pointer"


      onClick={() => handleOpen(8)}
    >
      <span>I forgot my password, how do I reset it?
 </span>
      <span className="text-gray-500">
      </span>
    </AccordionHeader>
    {/* <AccordionBody className="px-4 py-3 text-gray-500 bg-gray-50"> */}
    <AccordionBody className="px-4 py-9 text-gray-500  bg-[#f8f8f8]">

    Click on the ‘Forgot Password’ option available on the Log In page. A link to set a new password will be sent to your registered email id.    </AccordionBody>
  </Accordion>
  <Accordion
    open={open === 9}
    icon={<Icon id={9} open={open} />}
    className="border-b border-gray-200"
  >
    <AccordionHeader
      // className="flex items-center justify-between px-4 py-3 text-lg font-medium text-gray-700 bg-gray-100 cursor-pointer"
      className="flex items-center justify-between px-4 py-6 text-md font-medium text-gray-700 bg-[#ebebeb]   cursor-pointer"


      onClick={() => handleOpen(9)}
    >
      <span>Can I edit my personal information?
 </span>
      <span className="text-gray-500">
      </span>
    </AccordionHeader>
    {/* <AccordionBody className="px-4 py-3 text-gray-500 bg-gray-50"> */}
    <AccordionBody className="px-4 py-9 text-gray-500  bg-[#f8f8f8]">

    Yes. You can edit your personal information in the ‘My Account’ section by logging in.
    </AccordionBody>
  </Accordion>
</Fragment>
     </div>
     {/* <div className="h-20"></div> */}

     </>
  )
}

export default AccordionSection



