import { useEffect, useState } from "react";
import "./App.css";

import Search from "./Components/Search/Search";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [icons, setIcons] = useState([]);

  const [inputIcon, setInputIcon] = useState([...icons]);

  const [searchText, setSearchText] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await fetch("icons.json")
        .then((res) => res.json())
        .then((data) => {
          setIcons(data);
        });
    };
    fetchData();
  }, [inputIcon]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(icons.map((item) => item.style))
    );
    const initialCategoryState = {};
    uniqueCategories.forEach((style) => {
      initialCategoryState[style] = icons.filter(
        (item) => item.style === style
      );
    });

    setCategories(initialCategoryState);
  }, [icons]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Search
                icons={icons}
                inputIcon={inputIcon}
                setInputIcon={setInputIcon}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                searchText={searchText}
                setSearchText={setSearchText}
                categories={categories}
              ></Search>
            }
          />
          <Route
            path="/search/:query?"
            element={
              <Search
                icons={icons}
                inputIcon={inputIcon}
                setInputIcon={setInputIcon}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                searchText={searchText}
                setSearchText={setSearchText}
                categories={categories}
              ></Search>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
