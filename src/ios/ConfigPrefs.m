#import "ConfigPrefs.h"
#import <Cordova/CDVAvailability.h>

@implementation ConfigPrefs

- (void) getConfigPreference:(CDVInvokedUrlCommand*)command {

    NSString *callbackId = command.callbackId;
    NSString *key = [command.arguments objectAtIndex:0];
    // get from plist?
    NSLog(@"get preference with key %@", [NSString stringWithFormat:@"configprefs-%@", key]);
    NSLog(@"setting %@", self.commandDelegate.settings);
    NSString *value = [self.commandDelegate.settings objectForKey:[[NSString stringWithFormat:@"configprefs-%@", key] lowercaseString]];
    CDVPluginResult *commandResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:value];
    [self.commandDelegate sendPluginResult:commandResult callbackId:callbackId];

}


@end

