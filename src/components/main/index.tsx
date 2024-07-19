import Arrows from "../arrows";
import IntroSection from "../sections/intro";
import { Wrapper } from "./styles";

interface iProps {
  selected: string;
  setSelected: (value: string) => void;
}

export default function Main({ selected, setSelected }: iProps) {
  const sections: {
    [key: string]: JSX.Element;
  } = {
    Intro: <IntroSection />,
  };

  return (
    <Wrapper>
      {sections[selected]}
      <Arrows selected={selected} setSelected={setSelected} />
    </Wrapper>
  );
}
