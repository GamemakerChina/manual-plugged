rh._.exports({"0":[[" ","Restart Game"]],"1":[["Restart Game"]],"2":[[" "," Restart Game"]],"3":[[" ","With this action you can restart the game. This is similar to running the game for the first time and so the ","Other - Game Start Event"," will be triggered, as well as the ","Other - Game End Event",".\n    However it should be noted that global variables will not be re-initialised unless explicitly coded as such - meaning that if you don't define and set them in the very first room of the game they will retain their previous values - and that\n    ","Data Structures"," and ","Particles"," will not be freed either and so that should be done ","before"," the Restart Game action is called ","or"," in the Game End Event. Also note that the game will ","not","      restart the moment this action is called, but rather at the end of the script or event where the action is placed, so if there are any actions placed after this one, they will still be called and the game restarted at the end of the block."],[" ","The above action block code will check for a gamepad button press and if one is detected it will restart\n    the game."," ","Back: ","Game Actions"," ","Next: ","Exit Game"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - Restart Game"]],"6":[[" ","Action Syntax:"," ","Example:"]],"id":"1148"})