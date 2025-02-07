import Accordion from "./Accordion";
import { FAQDetails } from "../data/FAQDetails";

const Faq = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center overflow-hidden text-secondary-white2">
      <div className="w-full max-w-2xl mx-auto px-4 md:px-6">
        <div className="text-center flex flex-col gap-4">
        <h1 className="font-bold font-helvetica text-[36px] sm:text-5xl">You got questions?</h1>
          <p className=" font-helvetica text-xl mb-8">We got answers.</p>
        </div>

        <div>
          {FAQDetails.map((faq, index) => (
            <Accordion
              key={index}
              title={faq.question}
              id={`faqs-${index}`}
              active={faq.active}
            >
              {faq.answer}
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
