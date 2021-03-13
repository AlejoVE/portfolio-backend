const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const ContactRoute = require('./routes/contactRoutes');

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is working on port ${PORT}`);
});

app.use('/api/contact', ContactRoute);
