rh._.exports({"0":[[" ","exit"]],"1":[["exit"]],"2":[["exit"]],"3":[[" ","exit"]],"4":[[" ","The ","exit"," statement has the following syntax:"," ","exit;"," ","exit"," simply ends the execution of the current ","script function",", ","method",", or ","event",". Note there is a slight difference in use here depending on the scope:"," ","If you use ","exit"," in a script function or method it will simply exit the function and return to the code that called the function."," ","If you use ","exit"," in a code block within an object's event, it will exit ","the entire event"," even if there are various separate code blocks after ","exit"," has been called."," ","If you use ","exit"," in a parent event and call that event using ","event_inherited()"," in a child object, only the parent event will exit and the child's event (which called ","event_inherited()",") will continue."," ","When used in an event, ","exit"," is typically used to avoid an instance running any further code when a specific condition has been met (or not). The code below outlines an example of how it could be used, in this case within a Collision Event, although it can be used in any event."," ","if (!visible)","\n    {","\n        exit;","\n    }"," ","\n    other.hp -= attack;","\n    other.coins -= 4;","\n    coins += 4;\n  "," ","The above code checks if the current instance is not visible, in that case it exits the code block, otherwise it goes ahead and runs the rest of the code."," ","NOTE",": It does not end the execution of the game. For that you need to use the function ","game_end()","."," ","Back: ","Language Features"," ","Next: ","with"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"1547"})