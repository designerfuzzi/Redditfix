//
//  SafariExtensionViewController.h
//  redditvideofix Extension
//
//  Created by fuzzi on 18.12.22.
//  Copyright © 2022 fuzzi. All rights reserved.
//

#import <SafariServices/SafariServices.h>

@interface SafariExtensionViewController : SFSafariExtensionViewController

+ (SafariExtensionViewController *)sharedController;

@end
