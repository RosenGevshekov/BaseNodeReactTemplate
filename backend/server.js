require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models'); // This is where the error occurs if './models' is missing
const adminRoutes = require('./routes/admin');
const pageRoutes = require('./routes/pages');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/admin', adminRoutes);
app.use('/api', pageRoutes);

const PORT = process.env.PORT || 5000;

// Sync database
db.sequelize.sync({ alter: true }).then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => {
    console.error('Failed to sync database:', error);
});
