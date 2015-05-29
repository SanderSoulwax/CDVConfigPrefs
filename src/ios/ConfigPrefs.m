#import "ConfigPrefs.h"
#import <Cordova/CDVAvailability.h>

@implementation ConfigPrefs

- (void) getConfigPreference:(CDVInvokedUrlCommand*)command {

    NSString *callbackId = command.callbackId;
    NSString *key = [command.arguments objectAtIndex:0];
    NSLog(@"get preference with key %@", key);
    NSString *value = [self.commandDelegate.settings objectForKey:[key lowercaseString]];
    CDVPluginResult *commandResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:value];
    [self.commandDelegate sendPluginResult:commandResult callbackId:callbackId];

}


@end

