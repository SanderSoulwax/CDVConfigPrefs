ConfigPrefs Cordova Plugin
======

The `window.ConfigPrefs` can get preferences that are set in your application's config.xml and prepended with 'configprefs-'

    cordova plugin add nl.frismedia.configprefs

Supported Platforms
-------------------

- iOS, Android


Methods
=================

window.ConfigPrefs.getConfigPreference


window.ConfigPrefs.getConfigPreference
-------------------

Get a configpreference from config.xml by key (without the 'configprefs-' prefix)

    window.ConfigPrefs.getConfigPreference(key);
    
Browser fallback support
-------------------

To get the plugin to work in the browser you have to include the javascript file in extra/browser/configprefs.js into your index.html file, eg:

    <script src="../plugins/nl.frismedia.configprefs/extra/browser/configprefs.js"></script>
       
When cordova is not available, this browser loads your config.xml through a XMLHttpRequest. 

