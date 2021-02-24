const express = require("express");
const jsbarcode = require("jsbarcode");
const { Canvas } = require("canvas");

const app = express();


app.get('/GetBarcode/', (req, res) => {
	var base64;
	const canvas = new Canvas();
	const response = {
		result: null,
		error: null,
		query: {
			barcode: null,
			format: null,
			lineColor: null,
			width: null,
			height: null,
			displayValue: null
		}
	};

	fillQueryParams(req, response);
	validateBarcode(req, res, response);
	try {
	 	jsbarcode(canvas, response.query.barcode, {
			format: response.query.format,
			lineColor: response.query.lineColor,
			width: response.query.width,
			height: response.query.height,
			displayValue: response.query.displayValue
		});
	} catch(error) {
		response.error = error;
		console.log("passed");
		return res.send(response);
	}


	response.result = canvas.toDataURL("image/png");
 	return res.send(response);
});

function fillQueryParams(req, response) {
	response.query["barcode"] = (req.query.barcode) ? req.query.barcode : null;
	response.query["format"] = (req.query.format) ? req.query.format : "CODE128";
	response.query["lineColor"] = (req.query.lineColor) ? req.query.lineColor : "#000000";
	response.query["width"] = (req.query.width) ? req.query.width : 2;
	response.query["height"] = (req.query.height) ? req.query.height : 100;
	response.query["displayValue"] = (req.query.displayValue) ? req.query.displayValue : true;
}

function validateBarcode(req, res, response) {
	if(req.query.barcode === undefined) {
		response.error = "Missing query parameter 'barcode'!";
		return res.send(response);
	}
}

app.listen(process.env.PORT || 8080, () =>
  	console.log(`App listening on port ${process.env.PORT || 8080}!`),
);