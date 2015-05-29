window.ConfigPrefs = function() {

};

ConfigPrefs.preferences = null;
ConfigPrefs.getConfigPreference = function(key, success) {
    var preferencesLoaded = function(k, s) {
        return function() {
            var value = ('undefined' === typeof ConfigPrefs.preferences[k]) ? null : ConfigPrefs.preferences[k];
            s(value);
        }
    }('configprefs-' + key.toLowerCase(), success);
    if (null === ConfigPrefs.preferences) {
        // load config xml first
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function () {
            ConfigPrefs.preferences = {};
            var parser = new DOMParser();
            var doc = parser.parseFromString(xhr.responseText, "application/xml");
            var preferences = doc.getElementsByTagName('preference');
            var i;
            for (i = 0; i < preferences.length; i++) {
                var p = preferences[i],
                    name = p.getAttribute('name');
                if (name.search('configprefs-') === 0) {
                    ConfigPrefs.preferences[name.toLowerCase()] = p.getAttribute('value');
                }
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