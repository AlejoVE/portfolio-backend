require('dotenv').config();
const mailgun = require('mailgun-js');
const DOMAIN = process.env.MAILGUN_DOMAIN;
const mg = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN });

const sendContactMessage = (req, res) => {
	const { message, email, subject } = req.body;

	const data = {
		from: `${email}`,
		to: `ale.montilla.dev@gmail.com`,
		subject: `${subject}`,
		text: `${message}`,
	};
	mg.messages().send(data, function (error, body) {
		if (error) {
			return res.json({
				message: error.message,
			});
		}

		return res.status(200).json({
			message: 'email has been send, thank you for your message',
		});
	});
};

module.exports = {
	sendContactMessage,
};
