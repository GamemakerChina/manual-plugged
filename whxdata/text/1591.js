rh._.exports({"0":[[" ","physics_particle_group_join"]],"1":[["physics_particle_group_join"]],"2":[[" ","physics_particle_group_join"]],"3":[[" ","With this function you can join two particle groups together, and the joined groups will then behave as if they were both part of a single entity. The groups should have been created with over-lapping edges, as, if they are not already touching, they will not be joined. The function takes the unique group IDs of the groups to join, as returned by the function ","physics_particle_group_end()",", and you can use the function any number of times for a single group to join various soft bodies together."],[" ","physics_particle_group_join(to, from)"," ","Argument"," ","Type"," ","Description"," ","to"," ","Physics Particle Group ID"," ","The first particle group to join."," ","from"," ","Physics Particle Group ID"," ","The second particle group to join."],[" ","N/A"],[" ","var flags = phy_particle_flag_water | phy_particle_flag_viscous | phy_particle_flag_tensile;","\n    var groupflags = phy_particle_group_flag_solid;","\n    physics_particle_group_begin(flags, groupflags, mouse_x- 45, mouse_y, 0, 0, 0, 0, c_white, 1, 1, 2);","\n    physics_particle_group_circle(50);","\n    var g1 = physics_particle_group_end();","\n    physics_particle_group_begin(flags, groupflags, mouse_x + 45, mouse_y, 0, 0, 0, 0, c_white, 1, 1, 2);","\n    physics_particle_group_circle(50);","\n    var g2 = physics_particle_group_end();","\n    physics_particle_group_join(g1, g2);"," ","The above code creates two circular particle groups and joins them together."," ","Back: ","Soft Body Particles"," ","Next: ","physics_particle_group_delete"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["physics_particle_group_join"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1591"})