rh._.exports({"0":[[" ","If Mouse Down"]],"1":[["GML Visual Action - If Mouse Down"]],"2":[["If Mouse Down Action"]],"3":[[" ","If Mouse Down"]],"4":[[" ","With this action you can poll the mouse to see if the selected button is currently being held down. The action will return ","true"," every step that the button is being held down, or ","false"," otherwise, although if you click the ","not"," modifier you can then check to see if the button is ","not"," being held, ie: the action will return ","true"," while no button is down and ","false"," if there is. If you only need to check for a single button press then use the action ","If Mouse Pressed","."," ","Note that to add actions into the \"if\" block, they should be dropped to the side of the action, as shown in the image below:"," ","These actions will now be run if the \"if\" evaluates to ","true",", while any actions dropped elsewhere will be performed after the \"if\" block."],[" ","Argument"," ","Description"," ","Mouse Button"," ","The name of the mouse button to check (","see this page"," ","for information on mouse button constants",")."," ","Not"," ","Negate the check (true becomes false and vice versa)"],[" ","The above action block code polls the mouse button state every step and if it is being held down it checks for the initial mouse down press. If the check is ","true"," on the initial down press the instance speed is set, then, while the button is down, the sprite blending is changed to red. If the mouse is not being held down, a check is done on the mouse release to reset the blending colour to white and set the speed to 0."," ","Back: ","Mouse And Keyboard Actions"," ","Next: ","If Mouse Released"]],"5":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1892"})