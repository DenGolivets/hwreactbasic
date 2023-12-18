import React, { createContext, useContext, useState } from "react";

const FilmContext = createContext();

export const FilmProvider = ({ children }) => {
  const [summary, setSummary] = useState("");

  return (
    <FilmContext.Provider value={{ summary, setSummary }}>
      {children}
    </FilmContext.Provider>
  );
};

export const useFilmContext = () => {
  const context = useContext(FilmContext);
  if (!context) {
    throw new Error("useFilmContext must be used within a FilmProvider");
  }
  return context;
};