import Client from './api'

export const getStudents = async () => {
  try {
    const response = await Client.get('/student')
    return response
  } catch (error) {
    throw error
  }
}

export const CreateStudent = async () => {
  try {
    const response = await Client.post('/student')
    return response
  } catch (error) {
    throw error
  }
}
