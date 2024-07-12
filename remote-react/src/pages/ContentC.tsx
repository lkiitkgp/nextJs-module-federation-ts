import React, { useEffect, useState } from "react";

const ContentC = () => {
  const [temp, setTemp] = useState<string>("");
  useEffect(() => {
    setTemp("in useEffect hook");
  }, []);

  return <div>Content C -{temp}</div>;
};

export default ContentC;
