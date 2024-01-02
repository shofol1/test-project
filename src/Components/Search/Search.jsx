import { useState } from "react";
import Searchs from "../Searchs/Searchs";
import Classics from "../Classics/Classics";
import Sharps from "../Sharps/Sharps";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const Search = ({
  icons,
  inputIcon,
  setInputIcon,
  errorMessage,
  setErrorMessage,
  searchText,
  setSearchText,
  categories,
}) => {
  console.log("🚀 ~ file: Search.jsx:22 ~ categories:", categories);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryValue = searchParams.get("query");
  const queryStyleValue = searchParams.get("style");
  console.log("🚀 ~ file: Search.jsx:29 ~ queryStyleValue:", queryStyleValue);

  // const handleSearch = () => {
  //   const filteredIcons = icons.filter((icon) =>
  //     icon.category.toLowerCase().includes(queryValue.toLowerCase())
  //   );

  //   setInputIcon(filteredIcons);

  //   if (filteredIcons.length === 0) {
  //     setErrorMessage("Page not found");
  //   } else {
  //     setErrorMessage("Page found");
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const searchText = e.target.name.value;
  //   handleSearch(searchText);
  // };

  // const handleInputChange = (e) => {
  //   const searchText = e.target.value;
  //   setSearchText(searchText);
  //   handleSearch(searchText);
  // };
  const handleInputChange = (e) => {
    const searchText = e.target.value;
    navigate(
      `/search?query=${encodeURIComponent(searchText)}&style=${queryStyleValue}`
    );
  };

  return (
    <div>
      <div>
        <h1>Search : {icons.length} </h1>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Search"
            className="border-2 w-full p-4 rounded"
            onChange={handleInputChange}
          />
        </form>
      </div>
      <div className="flex gap-10 mt-10">
        <Classics></Classics>
        <Sharps></Sharps>
      </div>
      <div className="grid grid-cols-[1fr,11fr] mt-4">
        <div>
          <h1 className="text-2xl bold">Style</h1>
          {Object.keys(categories).map((style) => {
            return (
              <div className="py-1">
                <Link
                  to={`/search?query=${
                    queryValue ? queryValue : ""
                  }&style=${style}`}
                  className="py-1 capitalize"
                >
                  {style}
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <div>
            {icons.filter((icon) => {
              const categoryMatches = icon.category
                .toLowerCase()
                .includes(queryValue ? queryValue.toLowerCase() : searchText);

              const styleMatches =
                !queryStyleValue ||
                icon.style.toLowerCase() === queryStyleValue.toLowerCase();

              return categoryMatches && styleMatches;
            }).length > 0 ? (
              <p className="text-green-600 font-bold mt-5 text-2xl ">
                {
                  icons.filter((icon) =>
                    icon.category
                      .toLowerCase()
                      .includes(
                        queryValue ? queryValue.toLowerCase() : searchText
                      )
                  ).length
                }{" "}
                Icons
              </p>
            ) : (
              <p className="text-red-600 font-semibold mt-5 text-xl">
                No Icons Found Icons
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            {icons
              .filter((icon) => {
                const categoryMatches =
                  !queryValue ||
                  icon.category.toLowerCase() === queryValue.toLowerCase();

                const styleMatches =
                  !queryStyleValue ||
                  icon.style.toLowerCase() === queryStyleValue.toLowerCase();

                return categoryMatches && styleMatches;
              })
              .map((icon) => (
                <Searchs key={icon.id} icon={icon}></Searchs>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
