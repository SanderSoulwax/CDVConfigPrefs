var exec = require('cordova/exec');

var ConfigPrefs = function() {
};

ConfigPrefs.getConfigPreference = function(key, success) {
    exec(success, null, "ConfigPrefs", "getConfigPreference", [key]);
};

module.exports = ConfigPrefs;
