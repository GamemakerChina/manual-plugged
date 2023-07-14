rh._.exports({"0":[[" ","part_particles_clear"]],"1":[["part_particles_clear"]],"2":[[" ","part_particles_clear"]],"3":[[" ","With this function you can clear all the particles currently created by the system from the room. It does ","not"," reset or remove the particle types themselves, just their visual representation, and if you have any object streaming particles from an emitter, these particles disappear but will begin to appear again the next step after calling this code."],[" ","part_particles_clear(ind);"," ","Argument"," ","Type"," ","Description"," ","ind"," ","Particle System ID"," ","The index of the particle system."],[" ","N/A"],[" ","if (lives <= 0)","\n    {","\n        part_particles_clear(global.Sname);","\n        room_goto(rm_intro);","\n    }"," ","The above code will check the value of the variable \"lives\" and if it is equal to 0, it clears all particles from the system and then changes room."," ","Back: ","Particle Systems"," ","Next: ","part_particles_count"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["part_particles_clear"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"568"})