window.ConfigPrefs = function() {

};

window.ConfigPrefs.preferences = null;
window.ConfigPrefs.getConfigPreference = ConfigPrefs.get = function(key, success) {
    var preferencesLoaded = function(k, s) {
        return function() {
            s(('undefined' === typeof ConfigPrefs.preferences[k]) ? null : ConfigPrefs.preferences[k]);
        }
    }(key.toLowerCase(), success);
    if (null === ConfigPrefs.preferences) {
        // load config xml first
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function () {
            ConfigPrefs.preferences = {};
            var parser = new DOMParser();
            var doc = parser.parseFromString(xhr.responseText, "application/xml");
            var preferences = doc.getElementsByTagName('preference');
            var i, name, p;
            for (i = 0; i < preferences.length; i++) {
                p = preferences[i];
                name = p.getAttribute('name');
                ConfigPrefs.preferences[name.toLowerCase()] = p.getAttribute('value');
            }
            preferencesLoaded();
        });
        xhr.open("get", "../config.xml", true);
        xhr.send();
    }
    else {
        preferencesLoaded();
    }
};