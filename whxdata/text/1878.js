rh._.exports({"0":[[" ","part_system_automatic_update"]],"1":[["part_system_automatic_update"]],"2":[[" ","part_system_automatic_update"]],"3":[[" ","This function controls whether ","GameMaker"," should update the particle system automatically or not, and normally you would not need to use this function as the default value of ","true"," (automatic update is on) is what you wish to happen. However, for special effects or for pausing the game, you can set this to ","false"," and it will prevent any updates being carried out on the given particle system unless ","explicitly"," commanded by the use of the function ","part_system_update()"," or you use this function again to turn automatic updates on. No updating means that particles created in this system will no longer change position, colour or any other parameter and that emitters will cease to work too, \"freezing\" the system at the exact point in which the automatic update was set to ","false","."," ","One thing to note is that if you are using the simple effects created by the functions ","effect_create_above()"," or ","effect_create_below()"," then you can use the values of 0 (for below effects) or 1 (for above effects) as the particle system index and so toggle the automatic update for these too (this will also work to toggle updating for the GML Visual particle effects)."],[" ","part_system_automatic_update(ind, automatic);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Particle System ID"," ","The index of the particle system to change."," ","automatic"," ","Boolean"," ","Whether automatic updating is on (","true",") or not (false)."],[" ","N/A"],[" ","if global.Pause","\n    {","\n        part_system_automatic_update(global.Sname, false);","\n    }"," ","The above code will switch off the particle updates if the global variable \"Paused\" is true."," ","Back: ","Particle Systems"," ","Next: ","part_system_automatic_draw"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["part_system_automatic_update"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1878"})