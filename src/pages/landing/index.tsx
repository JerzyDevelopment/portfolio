import { useState } from "react";
import Main from "../../components/main";
import NavBar from "../../components/navBar";
import Socials from "../../components/socials";
import { Wrapper } from "./styles";
import Arrows from "../../components/arrows";

export default function LandingPage() {
  const [selected, setSelected] = useState("Intro");

  return (
    <Wrapper>
      <NavBar selected={selected} setSelected={setSelected} />
      <Main selected={selected} setSelected={setSelected} />
      <Socials />
    </Wrapper>
  );
}
