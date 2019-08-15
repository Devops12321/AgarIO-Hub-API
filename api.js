const btoa = require('btoa')
const request = require('request')

const BASE_URL = "http://api.agariohub.io/"

module.exports = {
	connectLogin: function (page, jsonSend, callback, debug) {
		var dataSend = encodeURIComponent(btoa(JSON.stringify(jsonSend)).split("/").join("%"))
		if (!dataSend) {
			console.error("Failed building data when trying to connect to: " + page)
			return false
		}
		request(`${BASE_URL}${page}/${dataSend}`, (err, req, data) => {
			var responseParse = JSON.parse(data)
			if (debug) {
				console.log(`[DEBUGGER] ${data}`)
			}
			callback(responseParse)
		});
	}
};
