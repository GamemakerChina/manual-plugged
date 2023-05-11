rh._.exports({"0":[[" ","random_set_seed"]],"1":[["random_set_seed"]],"2":[["random_set_seed"]],"3":[[" ","random_set_seed"]],"4":[[" ","To generate a random number ","GameMaker"," starts with a random seed number. With this function you can set that seed to a known value and so \"force\" the outcome of all random events afterwards to be the same every time the program is run. For example, this function can be used in conjunction with ","random_get_seed()"," to create procedurally generated content and save the results without having huge savegames (you save the seed only, no need for anything else). Should you need truly random results for everything, you should be using the ","randomise()"," function."," ","NOTE"," While this seed will give consistent results on each target platform, results may vary between platforms due to the different way each target works."],[" ","random_set_seed(val);"," ","Argument","Type"," ","Description"," ","val","Real"," ","The seed to set."],[" ","N/A"],[" ","if debug","\n    {","\n        random_set_seed(1);","\n    }"," ","The above code sets the random seed to 1 only if the variable \"debug\" is true."," ","Back: ","Number Functions"," ","Next: ","random_get_seed"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"id":"933"})