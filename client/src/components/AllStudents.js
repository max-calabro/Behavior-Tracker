const AllStudents = ({ setComponentName }) => {
  const changeStateBack = (home) => {
    setComponentName(home)
  }

  return (
    <>
      <div>All Students</div>
      <button onClick={() => changeStateBack('home')}>Back</button>
    </>
  )
}

export default AllStudents
