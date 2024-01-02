import React from "react";

import IconCard from "../IconCard/IconCard";
import { filterIcons } from "../../utils/filterData";

export default function SearchResult({
  icons,
  queryValue,
  queryStyleValue,
  searchText,
}) {
  return (
    <div>
      <div>
        {filterIcons(icons, queryValue, queryStyleValue).length > 0 ? (
          <p className="text-green-600 font-bold mt-5 text-2xl ">
            {filterIcons(icons, queryValue, queryStyleValue).length} Icons
          </p>
        ) : (
          <p className="text-red-600 font-semibold mt-5 text-xl">
            No Icons Found Icons
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
        {filterIcons(icons, queryValue, queryStyleValue).map((icon) => (
          <IconCard key={icon.id} icon={icon}></IconCard>
        ))}
      </div>
    </div>
  );
}
