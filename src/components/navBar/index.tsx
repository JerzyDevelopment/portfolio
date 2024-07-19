import { useState } from "react";
import { Selector, Wrapper } from "./styles";

const options = [
  "Intro",
  "Tech Stack",
  "Professional Experience",
  "Personal Projects",
  "Contact",
];

interface iProps {
  selected: string;
  setSelected: (value: string) => void;
}

export default function NavBar({ selected, setSelected }: iProps) {
  return (
    <Wrapper>
      {options.map((el) => {
        return (
          <Selector
            key={el}
            $selected={selected === el}
            onClick={() => setSelected(el)}
          >
            {el}
          </Selector>
        );
      })}
    </Wrapper>
  );
}
