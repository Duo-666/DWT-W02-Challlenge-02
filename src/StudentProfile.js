import "./styles.css";

export default function StudentProfile() {
  const studentName = "Michael J. Fox";
  const studentBio =
    "Living life at 88 mph and proving that time travel isn't just possible in the movies, I'm Michael J. Fox. Just remember, if you see a DeLorean, I might be closer than you think!";
  const courses = [
    "Time Travel 101: The Physics of DeLoreans and Flux Capacitors",
    "Advanced Skateboarding and Hoverboard Maneuvers",
    "The Ethics of Time Travel: Paradoxes, Predicaments, and Possibilities",
  ];

  return (
    <div className="student-profile">
      <h2>{studentName}</h2>
      <p>{studentBio}</p>
      <h3>Enrolled Courses:</h3>
      <ul>
        {courses.map((course) => (
          <li>{course}</li>
        ))}
      </ul>
    </div>
  );
}
