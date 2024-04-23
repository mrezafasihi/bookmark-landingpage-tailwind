import React, { useState } from "react";
import Accordin from "./Accordin";

function FAQ() {
  const accordinData = [
    {
      question: " What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laboriosam repellat dolores, dolorum id nisi, totam architecto mollitia odio rem itaque ut? Laudantium quibusdam laborum maiores? Voluptate quis repellendus laudantium.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate quidem odit id alias, autem expedita porro nisi veniam veritatis, eius non quis nostrum ipsam quas iste dicta asperiores earum.",
    },
    {
      question: "Is ther a mobile app?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, necessitatibus consequuntur sit nesciunt, deleniti sunt distinctio ea cupiditate blanditiis praesentium iure reprehenderit illum nihil! Sunt, est natus? Harum, voluptates nam.",
    },
    {
      question: "What about other Chromium browsers",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet dolorem modi ut ipsam, praesentium ducimus eum. Minima exercitationem est consequuntur aut voluptatibus, facere unde! Sit, sint error? Cupiditate, ad.",
    },
  ];
  const [open, setOpen] = useState(null);
  const handleItemClick = (index) => {
    setOpen((prevstate) => {
      return prevstate === index ? "null" : index;
    });
  };

  return (
    <section className="mt-[6%]">
      <div className="container mx-auto">
        <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-lg px-6 mx-auto text-center text-graishBlue">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <div className="mb-[2%] ">
        {accordinData.map((item, index) => {
          return (
            <>
              <Accordin
                key={index}
                question={item.question}
                answer={item.answer}
                onClick={() => handleItemClick(index)}
                open={open === index}
              />
            </>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
