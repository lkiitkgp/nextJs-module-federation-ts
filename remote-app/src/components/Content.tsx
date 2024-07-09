// src/components/Content.tsx
import React from "react";

interface ContentProps {
  item: string | null;
}

const Content: React.FC<ContentProps> = ({ item }) => {
  return <div>{item ? `Selected: ${item}` : "Please select an item"}</div>;
};

export default Content;
