rh._.exports({"0":[[" ","Clear Particle System"]],"1":[["Clear Particle System"]],"2":[[" "," Clear Particle System"]],"3":[[" ","With this action you can clear the given particle system to its ","default"," state, removing all emitters (there is also no need to call the ","Destroy Particle Emitter"," action as this is taken care of automatically)\n    and clearing all particles from the screen. You supply the unique ID value for the system to clear, as returned when you created the system with the action ","Create Particle System",". Care must be taken when using\n    this action since it destroys all the emitters associated with the particle system - this means that any instance in the room that uses an emitter may give an error as that emitter no longer exists, so make sure that the action is only called when\n    you are not going to be creating any new particles from that emitter (for more information on particle emitters see ","Create Particle Emitter",")."," ","NOTE",": This action will only ","clear"," the visible particles in the room, but it does not clear the particle properties nor does it remove them from memory. For that you should use the action ","Destroy Particle Type","."],[" ","Argument"," ","Description"," ","System"," ","The unique ID value for the system to be destroyed"],[" ","The above action block code will clear all the particles from the screen\n    if the player has 0 or less lives and then restart the room."," ","Back: ","Particle Actions"," ","Next: ","Pause Particle System"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - Clear Particle System"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"1704"})