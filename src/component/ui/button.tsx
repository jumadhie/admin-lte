"use client";

const Button = ({ title, onClick }: { title: string; onClick: () => void }) => {
  return (
    <button className="btn" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
