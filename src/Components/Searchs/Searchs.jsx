
const Searchs = ({icon}) => {
  const { image, category } = icon;
  return (
    <div className="flex flex-col justify-center items-center shadow-lg py-2 hover:bg-orange-300 duration-300">
      <img src={image} className="w-10"></img>
      <p className="font-medium p-2">{category}</p>
    </div>
  );
};

export default Searchs;