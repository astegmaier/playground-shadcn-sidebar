import { useState } from "react";

interface BigListProps {
  expanded?: boolean;
}

export const BigList = ({ expanded }: BigListProps) => {
  const [isExpanded, setIsExpanded] = useState(!!expanded);
  const stuff = Array(1000).fill("stuff");

  return (
    <>
      <p>
        <button type="button" onClick={() => setIsExpanded((prev) => !prev)}>
          {isExpanded ? "Collapse" : "Expand"}
        </button>
      </p>
      <ul>
        {(isExpanded ? stuff : []).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};
