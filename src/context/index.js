import React, { createContext, useState } from "react";
import mockData from "../mockData";
export const ContextProvider = createContext();
/**
 *
 * @param {*} props
 * @returns -
 */
export const Context = (props) => {
  const [blogs, setBlogs] = useState([...mockData]);
  return (
    <ContextProvider.Provider value={{ blogs }}>
      {props.children}
    </ContextProvider.Provider>
  );
};
