const NewStudents = ({ setComponentName }) => {
  const changeStateBack = (home) => {
    setComponentName(home)
  }

  return (
    <>
      <div>New Students</div>
      <button onClick={() => changeStateBack('home')}>Back</button>
    </>
  )
}

export default NewStudents
