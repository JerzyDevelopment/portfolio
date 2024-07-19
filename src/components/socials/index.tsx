import { Social, Wrapper } from "./styles";
import { socialsData } from "./data";

export default function Socials() {
  return (
    <Wrapper>
      {socialsData.map((el) => {
        return (
          <Social href={el.link} key={el.label} target="_blank">
            {el.svg}
          </Social>
        );
      })}
    </Wrapper>
  );
}
