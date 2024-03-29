const router = require('express').Router();
const controller = require('../controller');
const sendResponse = require("../helpers/sendResponses");
const { upload } = require('../middleware/upload');

/*
upload api
*/
router.post("/upload", upload.single('file'), async function (req, res) {
	controller.FileController.uploadFile(req).then((data) => {
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


/*
post analysis api
*/
router.post("/analyz", async function (req, res) {
	controller.FileController.analyzeFile(req.body).then((data) => {
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

/*
get analysis api
*/
router.get("/analyz", async function (req, res) {
	controller.FileController.getAnalyzeFileData(req.query).then((data) => {
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
