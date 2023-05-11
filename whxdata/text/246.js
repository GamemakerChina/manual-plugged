rh._.exports({"0":[[" ","game_id"]],"1":[["game_id"]],"2":[["game_id"]],"3":[[" ","game_id ","DEPRECATED"]],"4":[[" ","This ","read only"," variable returns the unique identifier for the game you have created. You can use this if you need a unique file name, or anything else that needs something to identify your game only. This can be set in the ","Game Options","."],[" ","game_id"],[" ","Real"],[" ","ini_open(\"Score.ini\");","\n    ini_write_real(\"Scores\", \"0\", score + game_id);","\n    ini_close();"," ","The above code performs a very basic encryption on the score by adding the game_id to it before saving. On reading it back into the game you would deduct the game_id to get the correct value again."," ","Back: ","General Game Control"," ","Next: ","game_save_id"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"246"})