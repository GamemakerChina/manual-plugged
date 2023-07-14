rh._.exports({"0":[[" ","Pause Particle System"]],"1":[["Pause Particle System"]],"2":[[" "," Pause Particle System"]],"3":[[" ","This action will pause the given particle system. You supply the unique ID value for the system to pause, as returned when you created the system with the action ","Create Particle System",". A paused particle system\n    will still draw the particles that have been spawned but they will no longer update their colour, position or alpha, nor will they complete their lifespan and disappear until you resume the system. You can choose to pause or resume the system using the\n    \"State\" option."," ","Note that this does ","not"," pause emitters that are streaming particles, nor will it stop an emitter bursting particles - emitters will still create particles when called, but when the system is paused the particles will do nothing and be drawn exactly\n    where they are created until you reset the paused state or call ","Update Particle System","."],[" ","Argument"," ","Description"," ","System"," ","The unique ID value for the system to be paused"," ","State"," ","Whether to pause or resume the particle system"],[" ","The above action block code will check a global variable and if it returns\n    ","true"," then the given particle system will be paused otherwise it will be resumed."," ","Back: ","Particle Actions"," ","Next: ","Update Particle System"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - Pause Particle System"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"1619"})