const { Counselor } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const counselor = await Counselor.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      counselor &&
      (await middleware.comparePassword(
        counselor.passwordDigest,
        req.body.password
      ))
    ) {
      let payload = {
        id: counselor.id,
        email: counselor.email
      }
      let token = middleware.createToken(payload)
      return res.send({ counselor: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { email, password, name } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const counselor = await Counselor.create({ name, email, passwordDigest })
    res.send(counselor)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const counselor = await Counselor.findOne({
      where: { email: req.body.email }
    })
    if (
      counselor &&
      (await middleware.comparePassword(
        counselor.passwordDigest,
        req.body.oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(req.body.newPassword)
      await counselor.update({ passwordDigest })
      return res.send({ status: 'Success', msg: 'Password Updated' })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}
