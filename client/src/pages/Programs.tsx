import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Programs = () => {
  const [programs, setPrograms] = useState<{ id: number; title: string }[]>([]);

  useEffect(() => {
    fetch("/api/programs")
      .then((response) => response.json())
      .then((data) => setPrograms(data));
  }, []);

  return (
    <div>
      <h1>Programs</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <Link to={`/programs/${program.id}`}>{program.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Programs;
