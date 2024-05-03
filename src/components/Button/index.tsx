import { ReactNode } from "react";

interface ButtonProps {
  content: string | ReactNode;
  css?: string;
  onClick: () => void;
}

const Component = ({ content, css, onClick }: ButtonProps) => {
  return (
    <>
      <button onClick={onClick} className={css}>
        {content}
      </button>
    </>
  );
};

export default Component;
