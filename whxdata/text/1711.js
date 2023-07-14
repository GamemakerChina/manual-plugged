rh._.exports({"0":[[" ","Burst Particles"]],"1":[["Burst Particles"]],"2":[[" "," Burst Particles"]],"3":[[" ","This action permits you to burst particles at any time without relying on an emitter. You supply the unique ID value for the system to create the particles within (as returned when you created the system with the action ","Create Particle System",")\n    and the unique ID of the particle type to create (as returned when you created the particle type with the action ","Create Particle Type","), as well as the x/y position to create them at and the number to create.\n    The position can be an absolute position within the room, or you can flag it as being a relative position to the instance that is calling the action."," ","You can call this action every game frame to replicate the stream effect of an emitter, or you can call it once in an event (like the Destroy Event) to simply burst the particles."],[" ","Argument"," ","Description"," ","System"," ","The ID value of the particle system to use"," ","Type"," ","The ID value of the particle type to burst"," ","X"," ","The x position to burst the particles at"," ","Y"," ","They position to burst the particles at"," ","Count"," ","The number of particles to be burst"],[" ","The above action block code will check to see if the instance has changed position\n    since the last game frame was updated and if it has it will burst some particles at the new position."," ","Back: ","Particle Actions"," ","Next: ","Create Particle Emitter"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - Burst Particles"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"1711"})