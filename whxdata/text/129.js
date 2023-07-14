rh._.exports({"0":[[" ","phy_mass"]],"1":[["phy_mass"]],"2":[[" ","phy_mass"]],"3":[[" ","This ","read-only"," variable returns the mass of the instance in ","kilograms",". This value is calculated automatically based on the surface area of the assigned fixtures and their density values, but it can be changed using the function ","physics_mass_properties()","."],[" ","phy_mass;"],[" ","Real"," (single precision floating point value, or ","undefined"," if the instance is not physics enabled)"],[" ","if (phy_mass < other.phy_mass)","\n    {","\n        instance_destroy();","\n    }"," ","The above code is from the collision event of the instance with another and it compares the mass of each instance and destroys that which has less mass."," ","Back: ","Physics Variables"," ","Next: ","phy_sleeping"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["phy_mass"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"129"})