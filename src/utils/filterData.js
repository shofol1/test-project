export const filterIcons = (data, queryValue, queryStyleValue) => {
  const filteredData = data.filter((icon) => {
    const categoryMatches =
      !queryValue || icon.category.toLowerCase() === queryValue.toLowerCase();

    const styleMatches =
      !queryStyleValue ||
      icon.style.toLowerCase() === queryStyleValue.toLowerCase();

    return categoryMatches && styleMatches;
  });
  return filteredData;
};
