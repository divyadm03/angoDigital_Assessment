import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourseDetails(data);
      });
  }, [id]);

  return (
    <>
      {courseDetails === null ? (
        <Loader />
      ) : (
        <div className="max-w-fit mx-auto my-auto bg-white rounded-2xl shadow p-4 block">
          <img
            src={courseDetails.image_url}
            alt={courseDetails.title}
            className="mb-4"
            style={{ height: "135px" }}
          />
          <h1 className="text-3xl font-bold mb-2">{courseDetails.title}</h1>
          <p className="text-gray-600 mb-2 text-sm">
            Instructor: {courseDetails.instructor}
          </p>
          <p className="mb-4 text-lg">{courseDetails.description}</p>
          <div className="text-sm text-gray-500">
            <div>
              <span className="font-bold"> Category: </span>
              {courseDetails.category}
            </div>
            <div>
              <span className="font-bold"> Duration: </span>
              {courseDetails.duration}
            </div>
            <div>
              <span className="font-bold"> Level: </span>
              {courseDetails.level}
            </div>
            <div>
              <span className="font-bold">Language: </span>
              {courseDetails.language}
            </div>
            <div>
              <span className="font-bold"> Students Enrolled: </span>
              {courseDetails.students}
            </div>
            <div>
              <span className="font-bold"> Rating: </span>
              {courseDetails.rating} <span>&#9733;</span>
            </div>
            <div className="text-green-700 font-bold mt-2">
              <span className="font-bold">Price: </span>${courseDetails.price}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetails;
