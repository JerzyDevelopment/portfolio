import { Wrapper } from "./styles";

interface iProps {
  selected: string;
  setSelected: (value: string) => void;
}

const options = [
  "Intro",
  "Tech Stack",
  "Professional Experience",
  "Personal Projects",
  "Contact",
];

export default function Arrows({ selected, setSelected }: iProps) {
  const handleClick = (dir: string) => {
    const index = options.indexOf(selected);

    if (dir === "forward") {
      setSelected(options[index + 1]);
    } else {
      setSelected(options[index - 1]);
    }
  };

  return (
    <Wrapper>
      {selected !== "Intro" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="top"
          onClick={() => handleClick("back")}
        >
          <path d="m5 12 7-7 7 7" />
          <path d="M12 19V5" />
        </svg>
      )}
      {selected !== "Contact" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="bottom"
          onClick={() => handleClick("forward")}
        >
          <path d="m5 12 7-7 7 7" />
          <path d="M12 19V5" />
        </svg>
      )}
    </Wrapper>
  );
}
