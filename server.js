const express = require('express')
require('dotenv').config()

// Import các file routes
const authRoutes = require('./src/routes/authRoutes')

const app = express()

// Middleware xử lý dữ liệu JSON từ request body
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// Cấu hình URL cơ sở cho phần Auth
app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`)
})