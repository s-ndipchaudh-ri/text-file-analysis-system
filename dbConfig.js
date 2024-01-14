

const Sequelize = require("sequelize");
let dbConfig = {
	DB: 'postgres',
	name: 'admin',
	password: '1234',
	host: 'localhost'
}
var sequelize = new Sequelize(
	dbConfig.DB, // db name
	dbConfig.name, // username
	dbConfig.password, // password
	{
		host: dbConfig.host, // host
		dialect: "postgres",
		acquireConnectionTimeout: 5000,
		pool: {
			min: 0,
			max: 100,
			createTimeoutMillis: 8000,
			acquireTimeoutMillis: 8000,
			idleTimeoutMillis: 8000,
			reapIntervalMillis: 1000,
			createRetryIntervalMillis: 100,
			propagateCreateError: false
		}
		//  , port: 5433
	});

var connectDB = async () => {
	try {

		console.log("Connect to Database");
		await sequelize.authenticate()
			.then(() => {
				 sequelize.sync();
				console.log("database connected !");
			})
			.catch(err => {
				console.error("Unable to connect to the database:", err);
			});
	} catch (error) {
		throw error;

	}
};

module.exports = {
	connectDB: connectDB,
	sequelize: sequelize
};