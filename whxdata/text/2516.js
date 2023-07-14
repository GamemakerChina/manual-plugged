rh._.exports({"0":[[" ","Audio Groups"]],"1":[["audio groups"]],"2":[[" ","Audio Groups"]],"3":[[" ","The ","Audio Group Manager"," is available from the ","Tools Menu"," in the IDE. Here you can ","add",", ","delete ","and ","rename ","Audio Groups",", as well as set their platform export options. ","GameMaker"," lets you assign each of the audio assets (sound effects and music) to different audio groups to try and optimise the number of sounds being played at any one time, as well as give you further control over what platforms they are exported to."," ","Click "," on the ","Add New"," button to define an audio group. This will create a new group that you can then name. To change group, click "," on the drop-down menu and select the one you wish to edit."," ","NOTE"," If you select streamed audio for a sound in the ","Sound Editor",", you will not be able to assign the sound to an Audio Group as streamed sounds are not packaged in the same way as other sounds and you have full control over when they are loaded, played and unloaded using code. The sound will be assigned to the default audio group ","audiogroup_default","."," ","To add a sound to an audio group, you need to open the ","Sound Editor"," for that sound and then select the group from the option you will find there, or alternatively you can add assets to an audio group via the right mouse button "," menu in ","The Asset Browser",". You can select one or more sound assets (or an entire asset group folder) and then use the RMB menu to add the sounds to any group. You can also click the ","Add Asset"," button at the bottom of the Audio Group Manager to add assets that way."," ","Once you have a sound added to a custom audio group then you can use this window to selectively choose which platform to export that group to. It may be that by default you have all your sounds at the highest quality, but that e.g. for HTML5 you want to use a lower quality sound file set to use less memory. In that case you add the lower quality files to ","GameMaker"," and then assign them to a new audio group. You would then select that audio group from the drop down menu and set it to export ","only ","to HTML5, and remove the HTML5 export from the higher quality audio group export options. It is important to note that you cannot change the export options for the \"default\" audio group ","audiogroup_default"," and that it will always be exported to all available platforms when you build a final game package."," ","Once you have defined audio groups and assigned sounds to them you can see them in the list on the left when you select the group. There will always be a \"default\" audio group available and all the sounds that are within this group will always be included in the game package for all platforms and they will all be loaded into memory on start-up (unless flagged as \"streamed\" in the Sound Editor properties), but when you create a custom audio group, the files that are added to it ","will not be loaded into memory"," until you call the function ","audio_group_load",". In this way you can control what audio is resident in memory at any time."," ","NOTE"," For all the ","audio group functions",", you will need to supply the audio group ID value. This is a constant with the name that you have given the audio group. The default is ","audiogroup_default","."," ","Audio Groups are also linked to the ","Configurations"," settings. When you select a configuration, you can then open the Audio Groups window and select the export targets from the right hand side for that configuration, and then changing configurations will change these output targets. Note that you cannot set sound resources to different groups on a per-configuration basis, only the export target for the given group."," ","Back: ","Game Settings"," ","Next: ","Texture Groups"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["Audio Groups"]],"id":"2516"})