// Renders the course name
const Header = ({ name }) => <h2>{name}</h2>;

// Renders a single part
const Part = ({ part }) => <p>{part.name} {part.exercises}</p>;

// Renders all parts of a course
const Content = ({ parts }) => (
  <>
    {parts.map(part => <Part key={part.id} part={part} />)}
  </>
);

//component to render total exercises
const Total = ({parts}) => {
    const total = parts.reduce((sum, part) => {
      console.log('Accumulator (sum):', sum, 'Current part:', part);
    return sum + part.exercises;
      
    }, 0);
      
    return<p><strong>Total exercises: {total}</strong></p>;
}

// Main Course component
const Course = ({ course }) => (
  <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
);

export default Course;
