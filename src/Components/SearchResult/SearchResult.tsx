import React from "react";

import IconCard from "../IconCard/IconCard";

export default function SearchResult({
  icons,
  queryValue,
  queryStyleValue,
  searchText,
}) {
  return (
    <div>
      <div>
        {icons.filter((icon) => {
          const categoryMatches =
            !queryValue ||
            icon.category.toLowerCase() === queryValue.toLowerCase();

          const styleMatches =
            !queryStyleValue ||
            icon.style.toLowerCase() === queryStyleValue.toLowerCase();

          return categoryMatches && styleMatches;
        }).length > 0 ? (
          <p className="text-green-600 font-bold mt-5 text-2xl ">
            {
              icons.filter((icon) => {
                const categoryMatches =
                  !queryValue ||
                  icon.category.toLowerCase() === queryValue.toLowerCase();

                const styleMatches =
                  !queryStyleValue ||
                  icon.style.toLowerCase() === queryStyleValue.toLowerCase();

                return categoryMatches && styleMatches;
              }).length
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
            <IconCard key={icon.id} icon={icon}></IconCard>
          ))}
      </div>
    </div>
  );
}
