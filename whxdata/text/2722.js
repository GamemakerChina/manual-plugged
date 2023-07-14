rh._.exports({"0":[[" ","The Sequence Instance Struct"]],"1":[["The Sequence Instance Struct,seqdir_right,seqdir_left,sequence,headPosition,headDirection,speedScale,paused,finished,elementID,activeTracks,matrix,posx,posy,scalex,scaley,xorigin,yorigin,width,height,imageindex,imagespeed,colourMultiply,gain,pitch,track,parent"]],"2":[[" ","The Sequence Instance Struct"]],"3":[[" ","A sequence, when placed in a room, is placed as an ","element"," on the layer, and this element contains a ","sequence instance",". This sequence instance will have the following properties in its ","struct",":"," ","Sequence Instance Struct"," ","Variable"," ","Type"," ","Description"," ","sequence"," ","Sequence Object Struct"," ","This is the ID of the ","sequence object"," struct that the sequence instance has been created from (see ","here","for more details). You can get or set this struct, and so change the base sequence that the instance is referencing."," ","headPosition"," ","Real"," ","This is the current ","playhead"," position (in frames) for the sequence instance. You can get or set this value, but note that setting it to a value greater or less than the currently defined play region will have different effects depending on the type of playback set for the sequence. See ","layer_sequence_headpos()"," for more information."," ","headDirection"," ","Sequence Direction Constant"," ","This is the current playback direction for the sequence instance. You can get or set this value using the constants given in the next table (Note that you can use the layer functions ","layer_sequence_get_headdir()"," and ","layer_sequence_headdir()"," to get or set this value without having to access the struct directly)."," ","speedScale"," ","Real"," ","This property can be used to get or set the playback speed scale. The speed scale is a ","multiplier",", where 1 is the default playback speed and values less than 1 will slow the playback and values larger than 1 will speed it up, eg: a value of 0.5 would be half playback speed, while a value of 2 would be double playback speed. Note that you can use the layer functions ","layer_sequence_get_speedscale()"," and ","layer_sequence_speedscale()"," to get or set this value without having to access the struct directly."," ","paused"," ","Boolean"," ","You can check this property to see if a sequence has been paused or not, and it will be ","true"," if it has, or ","false"," otherwise. This is a ","read-only"," property, but you can use the layer function ","layer_sequence_pause()"," to pause playback, and ","layer_sequence_play()"," to resume it again if required. You can also check this property using the layer function ","layer_sequence_is_paused()"," rather than check the property in the struct directly."," ","finished"," ","Boolean"," ","You can check this property to see if a sequence has finished playing or not, returning ","true"," if it is finished playing, and ","false"," otherwise. This is a ","read-only"," property, and will only ever return ","true"," for tracks that are not set to loop or ping-pong. You can also check this property using the layer function ","layer_sequence_is_finished()"," rather than check the property in the struct directly."," ","elementID"," ","Sequence Element ID"," ","This property holds the ID of the sequence ","element",". This ID is a simple identifying value that is associated with a layer in the room editor, and it can then be used with the appropriate ","layer functions"," to find the layer the sequence has been assigned to or to change certain sequence properties without having to deal with the struct."," ","activeTracks"," ","Array"," of ","Sequence Active Track Struct","s"," ","This property will hold an array of \"evaluation\" structs containing information on the current state of each ","asset track"," in the sequence (graphics, sequence, audio etc...). These are the top-level tracks, and the array returned is ","read-only",". For the contents of the asset track struct returned in each array entry, please see the section below."," ","Sequence Direction Constant"," ","Constant"," ","Description"," ","Value"," ","seqdir_right"," ","The sequence will play frames in an incremental order from left to right"," ","1"," ","seqdir_left"," ","The sequence will play frames in a decremental order from right to left"," ","-1"],[" ","IMPORTANT"," Although this property already exists in the sequence instance struct in the Sequence Create event, it is only filled with tracks after the first Sequence Begin Step event. So the first time you will find values in this struct is during the first iteration of the Sequence Step Event."," ","The following list contains the properties that may be available to you when accessing an active track struct (as included in the ","activeTracks"," array of a Sequence Instance struct, explained above). Each asset track struct can have any of the following properties, depending on the type of asset the track uses (note that you can modify all these properties, except where specified as ","read-only","), and all values returned are for the current playhead position:"," ","Sequence Active Track Struct"," ","Variable"," ","Type"," ","Description"," ","matrix"," ","Matrix Array"," ","This is the transformation matrix used to draw the track (sprite, instance and sequence tracks)."," ","posx"," ","Real"," ","The position of the asset in the sequence along the X axis for the track at the current playhead position (all assets)."," ","posy"," ","Real"," ","The position of the asset in the sequence along the Y axis for the track at the current playhead position (all assets)."," ","scalex"," ","Real"," ","The scale of the asset in the sequence along the X axis for the track at the current playhead position (sprite, instance and sequence tracks)."," ","scaley"," ","Real"," ","The scale of the asset in the sequence along the Y axis for the track at the current playhead position (sprite, instance and sequence tracks)."," ","xorigin"," ","Real"," ","The X origin of the asset for the track (all assets)."," ","yorigin"," ","Real"," ","The Y origin of the asset for the track (all assets)."," ","width"," ","Real"," ","The width (in pixels) of the asset for the track (sprite, instance and sequence tracks)."," ","height"," ","Real"," ","The height (in pixels) of the asset for the track (sprite, instance and sequence tracks)."," ","imageindex"," ","Real"," ","The image index for the asset on the track in the sequence at the current playhead position (sprite and instance tracks)."," ","imagespeed"," ","Real"," ","The image speed for the asset on the track in the sequence at the current playhead position (sprite and instance tracks)."," ","colourMultiply"," ","Colour"," ","The colour multiply value for the asset on the track in the sequence at the current playhead position (sprite, instance and sequence tracks). This value will be an ","array"," of four ","ARGB"," values with the format [A, R, G, B]. Note that the values for each component are expressed as between 0 and 1, where 0 corresponds to the HEX value #00 and 1 corresponds to the HEX value #FF (0 - 255 as shown in the colour picker for colour multiply tracks in the Sequences Editor)."," ","emitterIndex"," ","Audio Emitter ID"," ","The index of the audio emitter belonging to this track (audio tracks)."," ","gain"," ","Real"," ","The gain (volume) of the track at the current playhead position (audio tracks)."," ","pitch"," ","Real"," ","The pitch of the track at the current playhead position (audio tracks)."," ","particleSystemIndex"," ","Particle System ID"," ","The ID of the particle system of this track (particle system tracks)."," ","frameSizeX"," ","Real"," ","The horizontal size of the text frame (text tracks)."," ","frameSizeY"," ","Real"," ","The vertical size of the text frame (text tracks)."," ","characterSpacing"," ","Real"," ","The character spacing value (text tracks)."," ","lineSpacing"," ","Real"," ","The line spacing value (text tracks)."," ","paragraphSpacing"," ","Real"," ","The paragraph spacing value (text tracks)."," ","track"," ","Sequence Track Struct"," ","The ","Track Struct"," that this track is based on (all assets, a ","read-only"," value)."," ","parent"," ","Sequence Instance Struct"," ","The parent sequence instance ID for the track (all assets, a ","read-only"," value)."," ","activeTracks"," ","Array"," of ","Sequence Track Struct","s"," ","This is an array of evaluation structs for each parameter track that the asset track contains (all assets, a ","read-only"," value). The contents of each struct in the array are listed in the parameter ","Track Struct"," section."," ","Back: ","Sequences"," ","Next: ","The Track Struct"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["Sequence Instance Struct"]],"7":[[" ","activeTracks Struct"]],"id":"2722"})