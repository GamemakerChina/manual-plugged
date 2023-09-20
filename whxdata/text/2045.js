rh._.exports({"0":[[" ","If Gamepad Button Down"]],"1":[["If Gamepad Button Down"]],"2":[[" "," If Gamepad Button Down"]],"3":[[" ","With this action you can poll a gamepad to see if a given button is currently being held down. The action will return ","true"," every step that the button is being held down, or ","false"," otherwise, although if you click the ","not"," modifier\n    you can then check to see if the button is ","not"," being held, ie: the action will return ","true"," while no button is down and ","false"," if there is. If you only need to check for a single button press then use the action ","If Gamepad Button Pressed","."," ","If the button being checked is an analogue button, then it will not be considered held down until the button value has gone above the threshold set using the action ","Set Gamepad Button Threshold","."," ","Note that to add actions into the \"if\" block, they should be dropped to the side of the action, as shown in the image below:"," ","These actions will now be run if the \"if\" evaluates to ","true",",\n    while any actions dropped elsewhere will be performed after the \"if\" block."],[" ","Argument"," ","Description"," ","Gamepad"," ","The gamepad index."," ","Button"," ","The name of the button to check."," ","Not"," ","Negate the check (true becomes false and vice versa)"],[" ","The above action block code polls the button state of gamepad 0 every step and if\n    a button is being held down it checks for the initial button down press. If the check is ","true"," on the initial down press, a sound is played, then, while the button is held down, the instance speed is set to 10. If the button is not being held\n    down, a check is done on the button release to reset the speed to 0 again."," ","Back: ","Gamepad Actions"," ","Next: ","If Gamepad Button Released"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - If Gamepad Button Down"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"2045"})