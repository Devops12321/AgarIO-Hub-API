# AgarIO-Hub-API

# Installation

```bash
# Install required modules
npm install btoa
npm install request
```

```js
const api = require('./api')
```

# Usage

```js
api.connectLogin("Page here", {
	// Data here
}, function(r) {
	// Callback
})
```

### Enable debugger

```js
api.connectLogin("Page here", {
	// Data here
}, function(r) {
	// Callback
}, true)
```

# Pages, Inputs and Outputs
|Page|Input|Output (incomplete)|
|----|-----|-------------------|
|check-login|token|state, logged, time|
|user-search|query||
|leaderboards|token||
|info|token, theCode (optional), lastNotification (optional)||
|event|||
|mall|token||
|shop|||
|name-color|token, id||
|set-hat|token, sId||
|set-skin|token, sId||
|coin-skin|token, sId||
|buy-boost|token, sId||
|buy-mass|token|state, time|
|daily-reward|token|state, messages, time|
|open-box|token|state, messages, time|
|chest-add|token, amount, time||
|change-pw|token, pwd (old password), npwd (new password)|state, time|
|send-coins|token, username, amount|state, time|
|sell-item|token, type, id, price|state, time|
|buy-mall|token, id|state, time|
|cancel-mall|token, id|state, time|
|follow|token, username|state, time|
|remove-comment|token, id|state, time|
|comment|token, username, message, recaptcha (required but agariohub does not validate captcha token)|state, time|
|user-profile|token, username||

# Example

```js
const api = require('./api')

api.connectLogin("check-login", {
	token: "9ZUickVsDP4IaNZzQGojGtEJTg8u2ViCY4UpqsdbAA3QwBu9MmEJAe7bbHwHp2nB"
}, function(r) {
	if (r.state == "success" && r.logged == true) {
		console.log("Login success")
	} else {
		console.log("Login failed")
	}
})
```

```js
// verify if token is still working, collect daily reward and opens mystery box if exists
const api = require('./api')

const token = "9ZUickVsDP4IaNZzQGojGtEJTg8u2ViCY4UpqsdbAA3QwBu9MmEJAe7bbHwHp2nB"

api.connectLogin("check-login", {
	token: token
}, function(r) {
	console.log("Login success")
	if (r.state == "success" && r.logged == true) {
		api.connectLogin("daily-reward", {
			token: token
		}, function(r) {
			if (r.state == "success") {
				console.log("Daily reward success")
			}
			api.connectLogin("open-box", {
				token: token
			}, function(r) {
				if (r.state == "success") {
					console.log("Mystery box success")
				}
			})
		})
	} else {
		console.log("Login failed")
	}
})
```
