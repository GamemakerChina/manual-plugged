rh._.exports({"0":[[" ","How to Disable Extensions?"]],"1":[["disable extensions, configurations, configs, config"]],"2":[[" ","How to Disable Extensions?"]],"3":[[" ","GameMaker has extensions for some target platforms, e.g. ","Steamworks"," and ","GDK","."," ","If you're using both of these extensions, you'll want to disable the GDK extension when building for Steam, and vice-versa."," ","This problem is not limited to these two extensions, and applies to any extension that is meant for a specific target."],[" ","First, ","set up a configuration"," for each one of your target platforms, if you haven't done so already."," ","This example only uses Steamworks and GDK."," ","Select the configuration for one target platform. Let's assume you selected the ","GDK"," configuration."," ","Open an extension that should not be used for GDK. For this example, open the Steamworks extension."," ","Disable all of the targets under ","Copies To",". This will ensure that the Steamworks extension is not executed when using the GDK configuration."," ","Now, switch over to your ","Steamworks"," configuration. Open the GDK extension, and disable all of its targets."],[" ","Now, whenever you build for GDK, use the GDK configuration; when you build for Steam, use the Steamworks configuration, and so on."," ","Using configurations this way allows you to control which extensions are used for building which platforms."," ","If you have more extensions, give them the same treatment: disable their exports in configurations that don't need them."," ","If you have more target platforms, add configurations for them, and modify which extensions are used for them."," ","Back: ","The Extension Editor"," ","Next: ","Creating An Extension"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["Disabling Extensions"]],"7":[[" ","Disabling extensions selectively"],[" ","Done!"]],"id":"1526"})