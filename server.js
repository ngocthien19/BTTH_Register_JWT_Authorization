const express = require('express')
require('dotenv').config()

const app = express()

// Middleware xử lý dữ liệu JSON từ request body
app.use(express.json())

// Import Routes (Bạn sẽ tạo ở các bước sau)
// const authRoutes = require('./routes/authRoutes');
// app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`);
});