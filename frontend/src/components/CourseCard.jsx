function CourseCard({ title, instructor, progress }) {
  return (
    <article className="course-card">
      <div className="course-card-header">
        <h3>{title}</h3>
        <span className="course-progress">{progress}%</span>
      </div>

      <p className="course-instructor">
        Instructor: {instructor}
      </p>

      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </article>
  )
}

export default CourseCard