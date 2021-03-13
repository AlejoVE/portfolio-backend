const express = require('express');
const app = express();

const ContactRoute = require('./routes/contactRoutes');

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is working on port ${PORT}`);
});

app.use('/api/contact', ContactRoute);
