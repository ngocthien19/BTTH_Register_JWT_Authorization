const db = require('../config/db')

const userRepository = {
  findByEmail: async (email) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email])
    return rows[0]
  },

  savePendingUser: async (userData, otp, expiresAt) => {
    const query = `
      INSERT INTO users (username, email, password, otp_code, otp_expires_at, is_active, role) 
      VALUES (?, ?, ?, ?, ?, false, 'user')
    `
    const values = [userData.username, userData.email, userData.password, otp, expiresAt]
    const [result] = await db.execute(query, values)
    return result
  }
}

module.exports = userRepository