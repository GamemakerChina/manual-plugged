rh._.exports({"0":[[" ","http_get_file"]],"1":[["http_get_file"]],"2":[[" ","http_get_file"]],"3":[[" ","With this function, you can connect to the specified URL in order to retrieve information in the form of a file. As this is an asynchronous function, ","GameMaker"," will not block while waiting for a reply, but will keep on running unless it gets callback information. This information will be in the form of a string and will trigger an ","Async Event"," in any instance that has one defined in their object properties."," ","NOTE"," ","You should be aware that due to XSS protection in browsers, requests to and attempts to load resources from across domains are blocked and may appear to return blank results. Please see the part on ","Cross Domain Issues"," for further details."," ","This event will generate a \"call back\" which is picked up by any ","HTTP Events",", in which case it will generate a ","DS Map"," (more commonly known as a \"dictionary\") that is exclusive to this event and is stored in the special variable ","async_load",". This DS map will contain different values depending on the data being returned, ie: the event will trigger multiple times as each packet of data is received so that you can show a progress bar, for example. The general structure for the DS map will be as follows:"," ","id: ","The ID which was returned from the command. If you fire off a series of ","http_"," requests then you need to know which one you are getting the reply to, and so you would use this value to compare to the value you stored when you originally sent the request to find the right one."," ","status: ","Returns a value of less than 0 for an error, 0 for complete and 1 for receiving packets (see below for more details)."," ","result: ","The data received (string only)."," ","url: ","The complete URL you requested."," ","http_status: ","The raw http status code (if available). This returns the standard web status code for most browsers, eg: 304 for \"Not Modified\" or 204 for \"No Content\", etc..."," ","If there are multiple packets being returned to your game, the callback \"status\" key will return 1, in which case the DS map will have the following additional keys:"," ","\"contentLength\": ","This is the size of file that the web server has said you should expect to receive (may be -1 if the server does not return this data)."," ","\"sizeDownloaded\": ","The size of the data that has already been downloaded."],[" ","http_get_file(url, local_target);"," ","Argument"," ","Type"," ","Description"," ","url"," ","String"," ","The web address of the server that you wish to get file from"," ","local_target"," ","String"," ","The local storage path to save the file to"],[" ","Async Request ID"],[" ","The ","http_get_file()"," function can be called from any event, and since it is asynchronous the callback can be almost instantaneous or could take several seconds. Calling the function is simple and would look something like this:"," ","file = http_get_file(\"http://www.macsweeneygames.com/downloads/upgrade.zip\", \"\\Downloads\\Upgrade.zip\");"," ","The above code will request a file from the given URL and set it to be downloaded to the local storage area (as specified in the HTML5 Game Options), in a directory \"Downloads\" with the given file name (this does not have to be the same as the source file name, but should use the same file extension). The ","async_load"," map index will be stored in the variable \"file\" so you can check for the correct callback in the Asynchronous Event, and if the save directory does not exist, it will be created. The Asynchronous Event triggered would be the ","HTTP"," sub-event, and in that event you would have something like the following:"," ","if ds_map_find_value(async_load, \"id\") == file","\n    {","\n        var status = ds_map_find_value(async_load, \"status\");","\n        if status == 0","\n        {","\n            var path = ds_map_find_value(async_load, \"result\");","\n            var files = zip_unzip(path, \"/NewContent/\");","\n            if files > 0","\n            {","\n                global.ExtraContent = true;","\n            }","\n        }","\n    }"," ","The above code will first check the \"id\" of the ds_map that has been created, then check the status of the callback. If the value is equal to 0 (signalling success) the result from the callback will then be used along with the ","zip_unzip()"," function to unzip the downloaded file to the given directory. If the unzip succeeds a global variable is set to true."," ","Back: ","HTTP"," ","Next: ","http_post_string"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["http_get_file"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Extended Example:"]],"id":"2472"})