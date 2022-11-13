import { useState } from "react";
import Container from "./container";
import Challenge from "./challenge";

export default function ChallengeBoard(props: {}) {
  const [Index, setIndex] = useState(0);

  const data = [
    {
      id: 1,
      question: "Array & Hashing",
      answer: "The React Framework for Production",
    },
    {
      id: 2,
      question: "Two Pointers",
      answer:
        "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    },
    {
      id: 3,
      question: "Sliding Window",
      answer:
        " a visual object or experience consciously created through an expression of skill or imagination.",
    },
  ];
  return (
    <Container>
     
       {data.map((data) => {
        return (
          <Challenge
            title={data.question}
            Id={data.id}
            children={data.answer}
            Index={Index}
            setIndex={setIndex}
          ></Challenge>
        );
      })}
    </Container>
  );
}
