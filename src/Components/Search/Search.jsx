import { useState } from "react";
import Searchs from "../Searchs/Searchs";
import Classics from "../Classics/Classics";
import Sharps from "../Sharps/Sharps";
import {
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
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryValue = searchParams.get("query");

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
    // Update query parameter in the URL based on the input value
    navigate(`/search?query=${encodeURIComponent(searchText)}`);
    // handleSearch(searchText);
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
      <div className="grid grid-cols-[1fr,11fr]">
        <div>left</div>
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <div>
              {icons.filter((icon) =>
                icon.category
                  .toLowerCase()
                  .includes(queryValue ? queryValue.toLowerCase() : searchText)
              ).length > 0 ? (
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
            {icons
              .filter((icon) =>
                icon.category
                  .toLowerCase()
                  .includes(queryValue ? queryValue.toLowerCase() : searchText)
              )
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
