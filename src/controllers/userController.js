const userService = require('../services/userService')

const handleUpdateProfile = async (req, res) => {
  try {
    const userId = req.user.id // Lấy từ Token qua protect middleware
    const updateData = req.body

    await userService.updateUserInfo(userId, updateData)

    res.status(200).json({
      status: 'success',
      message: 'Cập nhật thông tin cá nhân thành công!'
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    })
  }
}

module.exports = { handleUpdateProfile }