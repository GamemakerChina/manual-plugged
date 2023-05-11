rh._.exports({"0":[[" ","physics_mass_properties"]],"1":[["physics_mass_properties"]],"2":[["physics_mass_properties"]],"3":[[" ","physics_mass_properties"]],"4":[[" ","This function can be used to set custom mass and rotational inertia values for a physics enabled instance. Normally the mass, centre of mass, and rotational inertia for an instance are calculated using a combination the surface area of the bound fixtures and their density. However, in very special occasions, you may need to offset the centre of mass or change the inertia, and that is when you would use this function."],[" ","The mass is calculated in real world weight (i.e.: kilograms), so you should always try and keep values realistic for what you are modelling. So if your physics object is meant to represent a person, their mass could be, say, 70 kg, instead of something like 2 kg."," ","The mass cannot be negative."],[" ","The centre of mass is calculated automatically for you based on the shape of the fixture (or fixtures) you have defined. To get a general idea of where this could be, if you have a sprite that is the same shape as the fixtures you wish to create, then select the \"centre origin\" option and you will see approximately where the centre of mass will be too."," ","However, this may not be correct or you may be looking for a specific effect from your physics object, in which case this function can also be used to change the x and y coordinates for the centre of mass. These are ","local/relative"," values, so ","0,0"," is the point at which the fixtures are bound to the instance (the origin of the instance). So a centre of mass of ","-4,0"," would shift the centre of mass to the left of the origin, by 4 pixels."],[" ","The inertia value defines how resistant this instance is to changes in its rotational velocity. A higher inertia makes it more resistant and a low inertia makes it less resistant."," ","The rotational inertia cannot be negative."," ","NOTE"," This function does not set mass and inertia for individual fixtures, but rather for the whole physics enabled instance, no matter how many fixtures are bound to it."," ","NOTE"," This function should only be used when necessary, as the physics simulation is designed for the mass and inertia to be optimal based on the density and size of the fixture. Changing these values may produce unexpected results."],[" ","physics_mass_properties(mass, local_center_x, local_center_y, inertia)"," ","Argument","Type"," ","Description"," ","mass","Real"," ","The new mass that you want the fixture to have."," ","local_center_x","Real"," ","The local x coordinate of the new center of mass."," ","local_center_y","Real"," ","The local y coordinate of the new center of mass."," ","inertia","Real"," ","The rotational inertia for the fixture."],[" ","N/A"],[" ","physics_mass_properties(phy_mass, -10, -10, phy_inertia);"," ","The above code will shift the center of mass of the physical body to the left."," ","Back: ","Physics"," ","Next: ","physics_test_overlap"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"7":[[" ","Mass"],[" ","Centre of Mass"],[" ","Rotational Inertia"]],"id":"2195"})