rh._.exports({"0":[[" ","Physics Variables"]],"1":[["Physics Variables"]],"2":[[" ","Physics Variables"]],"3":[[" ","As with the \"traditional\" collisions and movement system, the physics system also has a series of ","instance variables"," assigned to each instance of an object when it is created. Some of these properties can be defined by the user in GML, but many are read-only and still more are only applicable in the ","collision"," event."," ","The following variables exists in ","all"," physics enabled objects and they can be read from and written to (ie: changed) using code from instances and script functions:"," ","phy_active"," ","phy_angular_velocity"," ","phy_angular_damping"," ","phy_linear_velocity_x"," ","phy_linear_velocity_y"," ","phy_linear_damping"," ","phy_speed_x"," ","phy_speed_y"," ","phy_position_x"," ","phy_position_y"," ","phy_position_xprevious"," ","phy_position_yprevious"," ","phy_rotation"," ","phy_fixed_rotation"," ","phy_bullet"," ","Certain variables are ","read-only"," variables, which means that the information they contain cannot be changed through instance code or script funcions (but it ","can"," be changed internally by ","GameMaker"," which is why these are variables and not ","constants","). The following list shows the ","read-only"," variables that exist in ","all"," physics enabled objects:"," ","phy_speed"," ","phy_com_x"," ","phy_com_y"," ","phy_dynamic"," ","phy_kinematic"," ","phy_inertia"," ","phy_mass"," ","phy_sleeping"," ","Finally, there are a number of temporary variables that exist in physics enabled objects and are created ","only in the collision event",". These variables are like those listed above and are ","read-only",":"," ","phy_collision_points"," ","phy_collision_x"," ","phy_collision_y"," ","phy_col_normal_x"," ","phy_col_normal_y"," ","Back: ","Physics"," ","Next: ","The Physics World"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"2086"})