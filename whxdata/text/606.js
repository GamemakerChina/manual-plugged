rh._.exports({"0":[[" ","phy_rotation"]],"1":[["phy_rotation"]],"2":[[" ","phy_rotation"]],"3":[[" ","This variable can be used to get (or to set) the angle of the instances fixture in degrees, similar to setting or getting the ","image_angle",". However note that in the physics world rotations are calculated in the ","opposite"," way to the normal ","GameMaker"," game world, meaning that vector functions like ","point_direction()","should have their return values modified (simply making positive to negative should resolve this)."],[" ","phy_rotation;"],[" ","Real"," (single precision floating point value, or ","undefined"," if the instance is not physics enabled)"],[" ","if (phy_speed_x > 0) || (phy_speed_y > 0)","\n    {","\n        phy_rotation += sqrt(sqr(phy_speed_x) + sqr(phy_speed_y)) /10;","\n    }"," ","The above code checks the linear speed and if either vector is not 0, it then calculates the actual speed and uses that to set the rotation."," ","Back: ","Physics Variables"," ","Next: ","phy_fixed_rotation"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["phy_rotation"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"606"})