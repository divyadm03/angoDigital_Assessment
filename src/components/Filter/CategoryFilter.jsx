const CategoryFilter = ({
  categoryData,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <select
      className="category bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  px-4 py-2 text-ellipsis "
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option value="" className="option whitespace-normal break-words">
        Choose Your Category
      </option>
      {categoryData.map((element) => {
        return (
          <option
            value={element}
            key={element}
            className=" whitespace-normal break-words"
          >
            {element}
          </option>
        );
      })}
    </select>
  );
};

export default CategoryFilter;
