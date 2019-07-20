const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
	// using async and await
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false
		});

		console.log('mongoDB connected...');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}

	// using promises and .then and .catch
	// mongoose
	// 	.connect(db, {
	// 		useNewUrlParser: true,
	// 		useCreateIndex: true,
	// 		useFindAndModify: false
	// 	})
	// 	.then(() => console.log('MongoDB Connected'))
	// 	.catch(err => {
	// 		console.error(err.message);
	// 		process.exit(1);
	// 	});
};

module.exports = connectDB;
