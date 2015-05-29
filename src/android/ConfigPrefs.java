package nl.frismedia.configprefs;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult.Status;
import org.json.JSONArray;
import org.json.JSONException;

import android.content.Context;
import android.util.Log;

public class ConfigPrefs extends CordovaPlugin {

    public boolean execute(String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {
        if ("getConfigPreference".equals(action)) {
            cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    try {
                       final String key = args.getString(0).toLowerCase();
                       // get from preferences
                       String value = cordova.getActivity().getIntent().getStringExtra(key);
                       Log.i("ConfigPrefs", "Found value '" + value + "' for key '" + key + "'");
                       callbackContext.success(value);
                    } catch (JSONException e) {
                       callbackContext.success((String)null); 
                    }
                }
            });
            return true;
        }
        return false;  // Returning false results in a "MethodNotFound" error.
    }

}