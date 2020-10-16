import React, { useState } from "react";
import { Link } from "react-router-dom";

const DataList = ({place}) => {


  const [isActive, setIsActive] = useState(1);

  const dataList = [
    {
      id: 1,
      text: "Resaurant food (37)",
    },
    {
      id: 2,
      text: "Travel news (10)",
    },
    {
      id: 3,
      text: "Modern Technology (03)",
    },
    {
      id: 4,
      text: "Product (12)",
    },
    {
      id: 5,
      text: "Inspiration (21)",
    },
  ];

  return (
    <>
      {dataList &&
        dataList.map((content, index) => (
          <li >
            <Link key={index}
              to={`/${place}`}
              className={isActive === content.id ? "activeName" : ""}
              onClick={() => setIsActive(content.id)}
            >
              {content.text}
            </Link>
          </li>
        ))}
    </>
  );
};

export default DataList;
