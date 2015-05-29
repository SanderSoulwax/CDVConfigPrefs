#import <Cordova/CDVPlugin.h>

@interface ConfigPrefs : CDVPlugin

- (void) getConfigPreference:(CDVInvokedUrlCommand*)command;

@end

