import { useEffect, useState } from "react";
import Slider from "react-slick";
import { CourseItem, CategoryFilter, Search, Loader } from "../components";
import { settings } from "../utils/CarouselSettings";

const CourseList = () => {
  let slider = null;
  const [searchValue, setSearchValue] = useState("");
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setFilteredCourses(data);
        setCategoryData([...new Set(data.map((x) => x.category))]);
      });
  }, []);

  useEffect(() => {
    if (searchValue === "" && selectedCategory === "") {
      setFilteredCourses(courses);
    } else if (searchValue !== "" && selectedCategory !== "") {
      let data = courses
        .filter((x) =>
          x.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        .filter((x) => x.category === selectedCategory);
      console.log(data, "data");
      setFilteredCourses(data);
    } else if (searchValue !== "" && selectedCategory === "") {
      let data = courses.filter((x) =>
        x.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredCourses(data);
    } else if (selectedCategory !== "" && searchValue === "") {
      let data = courses.filter((x) => x.category === selectedCategory);
      setFilteredCourses(data);
    }
  }, [searchValue, selectedCategory]);

  useEffect(() => {
    if (slider) {
      slider.slickGoTo(0, false);
    }
  }, [filteredCourses]);

  return (
    <>
      <div className="courses">
        <div className="flex flex-wrap justify-end my-4 gap-4">
          <div className="relative search-bar">
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
          <div className="category-filter">
            <CategoryFilter
              categoryData={categoryData}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>
        {!courses.length ? (
          <Loader />
        ) : (
          <div>
            {filteredCourses && filteredCourses.length > 0 ? (
              <div className="slider-container w-100 relative block">
                <Slider {...settings} ref={(silderRef) => (slider = silderRef)}>
                  {filteredCourses.map((course) => (
                    <CourseItem course={course} key={course.id} />
                  ))}
                </Slider>
              </div>
            ) : (
              <>
                <div
                  className="flex justify-center items-center rounded-2xl shadow "
                  style={{ height: "320px" }}
                >
                  <div className="font-semibold text-lg">
                    Search Results not found...
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CourseList;
