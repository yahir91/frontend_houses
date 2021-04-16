import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Show = () => {
  const [houseList, setHouseList] = useState(null);
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:4000/houses").then((res) => {
      setHouseList(res.data.house);
      setUrls(res.data.urls);
      console.log(res.data.urls);
    });
  }, []);

  return <div>{houseList && <h1> hi {houseList[0].title}</h1>}
  {urls && <img src={urls[0]} alt="house" />}</div>;
};

export default Show;
