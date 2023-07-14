rh._.exports({"0":[[" ","animcurve_get_channel_index"]],"1":[["animcurve_get_channel_index"]],"2":[[" ","animcurve_get_channel_index"]],"3":[[" ","This function returns the index value for any given animation curve channel."," ","You supply the animation curve ID or struct, where the curve ID is the name of the animation curve as it was defined in the Asset Browser, or the struct pointer as returned by the function ","animcurve_create()",". You then supply the name of the channel, as a string, and the function will return the index value associated with that channel. Note that if the curve or channel does not exist then you will get an error."],[" ","animcurve_get_channel_index(curve_struct_or_id, channel_name);"," ","Argument"," ","Type"," ","Description"," ","curve_struct_or_id"," ","Animation Curve Struct"," ","The ID or struct pointer of the animation curve to target"," ","channel_name"," ","String"," ","The channel name (a string)."],[" ","Real"],[" ","var _channelindex = animcurve_get_channel_index(ac_ButtonTween, \"x_pos\")","\n    var _channeldata = animcurve_get_channel(ac_ButtonTween, _channelindex);","\n    var _points = _channeldata.points;","\n    for (var i = 0; i < array_length(_points); ++i;)","\n    {","\n        _points[i].value += 1;","\n    }"," ","The above code retrieves the channel struct for the channel named \"x_pos\" in the curve asset \"ac_ButtonTween\", then loops through the points on the channel curve and adds one to their value."," ","Back: ","Animation Curves"," ","Next: ","animcurve_channel_evaluate"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["animcurve_get_channel_index"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1719"})