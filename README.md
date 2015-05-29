ConfigPrefs Cordova Plugin
======

This plugin can get preferences that are set in your application's config.xml.

Installation
-------------------

    cordova plugin add nl.frismedia.configprefs

config.xml example
-------------------

    <preference name="Example" value="examplevalue"/>

Supported Platforms
-------------------

- iOS, Android


Methods
=================

window.ConfigPrefs.getConfigPreference(key, successCallback)


window.ConfigPrefs.getConfigPreference
-------------------

Get a configpreference from config.xml by key

    window.ConfigPrefs.getConfigPreference('Example', function(value){
        if (null === value) {
            // key not found
        }
        else {
            // value is set
        }
    });
    
Browser fallback support
-------------------

To get the plugin to work in the browser you have to include the javascript file in extra/browser/configprefs.js into your index.html file, eg:

    <script src="../plugins/nl.frismedia.configprefs/extra/browser/configprefs.js"></script>
       
When cordova is not available, the browser will load your config.xml through a XMLHttpRequest. 

