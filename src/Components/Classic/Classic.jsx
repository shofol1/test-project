import { useEffect, useState } from "react";

const Classic = () => {
  const [classsicIcons, setClassicIcons] = useState([]);

  useEffect(() => {
    fetch("icons.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Classic: </h1>
    </div>
  );
};

export default Classic;
