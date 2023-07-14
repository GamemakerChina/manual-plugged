rh._.exports({"0":[[" ","phy_speed"]],"1":[["phy_speed"]],"2":[[" ","phy_speed"]],"3":[[" ","This ","read-only"," variable returns the current speed of the physics enabled instance, defined in pixels per step. Should you need to change this value, you must do so by changing the x and y vectors using the variables ","phy_speed_x"," and ","phy_speed_y","."],[" ","phy_speed;"],[" ","Real"," (single precision floating point value, or ","undefined"," if the instance is not physics enabled)"],[" ","if phy_speed > 10","\n    {","\n        phy_linear_damping += 0.01;","\n    }","\n    else","\n    {","\n        phy_linear_damping = 2;","\n    }"," ","The above code checks the speed of the physics enabled instance and then changes the linear damping based on the returned value."," ","Back: ","Physics Variables"," ","Next: ","phy_com_x"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["phy_speed"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"217"})