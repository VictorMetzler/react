import React from "react";

const Part = ({ name, exercises }) => {
  return (
    <tr>
      <td>
        <h4>{name}</h4>
      </td>
      <td>
        <h4>{exercises}</h4>
      </td>
    </tr>
  );
};

const Course = ({ course }) => {
  return (
    <table>
      <header>
        <tr>
          <td colSpan={2}>
            <h1>{course.name}</h1>
          </td>
        </tr>
      </header>
      <body>
        {course.parts.map((part) => (
          <Part id={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </body>
    </table>
  );
};

export default Course;
