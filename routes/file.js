const router = require('express').Router();
const controller = require('../controller');
const sendResponse = require("../helpers/sendResponses");


/*
upload api
*/
router.post("/upload", async function (req, res) {
	controller.FileController.uploadFile(req.body).then((data) => {
		sendResponse.sendSuccessMessage("success", data, res);
	}).catch((err) => {
		if (err.isJoi) {
			sendResponse.sendErorMessage(err.details[0].message, {}, res);
		}
		else {
			sendResponse.sendErorMessage(err.message, {}, res);
		}
	});
})

module.exports = router;
