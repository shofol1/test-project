import { useEffect, useState } from "react";
import "./App.css";

import Search from "./Components/Search/Search";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [icons, setIcons] = useState([]);

  const [inputIcon, setInputIcon] = useState([...icons]); // Initialize with all icons
  console.log("🚀 ~ file: App.jsx:12 ~ App ~ inputIcon:", inputIcon);
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
              ></Search>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
