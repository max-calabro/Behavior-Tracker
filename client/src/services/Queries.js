import Client from './api'

export const GetCounselorAndStudents = async (data) => {
  try {
    const response = await Client.get(`/counselor/${data.id}`)
    return response
  } catch (error) {
    throw error
  }
}

export const CreateStudent = async (data) => {
  try {
    const response = await Client.post('/student', data)
    return response
  } catch (error) {
    throw error
  }
}

export const GetStudentById = async (id) => {
  try {
    const response = await Client.get(`/student/${id}`)
    return response
  } catch (error) {
    throw error
  }
}

export const AssignStudentToCounselor = async (data, counselorID) => {
  try {
    const response = await Client.put(
      `/counselor/assignStudentTo/${counselorID}`,
      { studentId: data }
    )
    return response
  } catch (error) {
    throw error
  }
}

export const CreateTracker = async (data) => {
  try {
    const response = await Client.post('/behaviorTracker', data)
    return response
  } catch (error) {
    throw error
  }
}

export const GetCounselor = async (id) => {
  try {
    const response = await Client.get(`/counselor/${id}`)
    return response
  } catch (error) {
    throw error
  }
}
