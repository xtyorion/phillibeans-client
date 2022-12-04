import { useState } from "react";
import Container from "./container";
import Category from "./category";
import { ICategory } from "../store/interfaces/category.interface";

export default function ChallengeBoard(props: {categories: ICategory[]}) {
  const [Index, setIndex] = useState("");

  return (
    <Container>
     
       {props.categories && props.categories.map((data) => {
        return (
          <Category
            title={data.Name}
            Id={data.Id}
            children={data.Challenges}
            Index={Index}
            setIndex={setIndex}
            key={data.Id}
          ></Category>
        );
      })}
    </Container>
  );
}
