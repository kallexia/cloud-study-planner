import CourseCard from './CourseCard'

function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: 'Cloud Computing',
      instructor: 'Dr. Smith',
      progress: 70,
    },
    {
      id: 2,
      title: 'Software Engineering',
      instructor: 'Dr. Johnson',
      progress: 45,
    },
    {
      id: 3,
      title: 'Database Systems',
      instructor: 'Dr. Williams',
      progress: 25,
    },
  ]

  return (
    <section id="courses" className="courses-section">
      <div className="section-content">
        <div className="section-heading">
          <p className="section-label">Your learning</p>
          <h2>Current courses</h2>
          <p>
            Track your course progress and keep your studies organized.
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              progress={course.progress}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursesSection