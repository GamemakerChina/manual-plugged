rh._.exports({"0":[[" ","The Keyframe Struct"]],"1":[["Sequence Keyframe Struct"]],"2":[["The Keyframe Struct,frame,length,stretch,channels"]],"3":[[" ","The Keyframe Struct"]],"4":[[" ","Each track (as defined on the page covering ","track structs",") will have one or more keyframe ","structs"," assigned to it (which you can get from the ","keyframes"," property of the track struct), and each one will have the following properties:"," ","Sequence Keyframe Struct"," ","Variable"," ","Type"," ","Description"," ","frame"," ","Real"," ","The position (in frames) along the timeline for the keyframe. Default value is 0."," ","length"," ","Real"," ","The length of the keyframe. Default value is 1, and when set to larger values then the track property that the keyframe refers to will be maintained at the initial value for the duration of the length given. Note that the ","stretch"," property will override this if set to ","true","."," ","stretch"," ","Boolean"," ","If this property is set to ","true"," then the keyframe stretches to either the next keyframe for the track or to the end of the track if it's the last keyframe. You can get or set this value, and the default value is ","false","."," ","channels"," ","Array"," of ","Sequence Keyframe Data Struct","s"," ","This property allows access to the list of ","keyframe data structs"," for the channels of the track. When getting this property an ","array"," of keyframe data structs is returned, and when setting this property an array of keyframe data structs should be specified."," ","Back: ","Sequences"," ","Next: ","The Keyframe Data Struct"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2110"})