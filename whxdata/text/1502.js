rh._.exports({"0":[[" ","audio_group_name"]],"1":[["audio_group_name"]],"2":[[" ","audio_group_name"]],"3":[[" ","This function returns a string containing the name of the given audio group for displaying or checking."," ","When you define an audio group in the ","Audio Groups"," window, you give it a unique name which ","GameMaker"," turns into a constant to use as an ID value for the group. This function takes this ID and returns a string of the ID name you gave."," ","NOTE"," The default audio group is ","audiogroup_default","."],[" ","audio_group_name","(groupID);"," ","Argument"," ","Type"," ","Description"," ","groupID"," ","Audio Group ID"," ","The index value constant of the audio group to check (as defined in the ","Audio Groups Window",")"],[" ","String"],[" ","var _name = ","audio_group_name","(audiogroup_level1);","\n    draw_text(32, 32, \"Now Playing Group: \" + _name);"," ","The above code retrieves the name of the given audio group constant and displays it on the screen."," ","Back: ","Audio Groups"," ","Next: ","audio_group_get_assets"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["audio_group_name"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1502"})