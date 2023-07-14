rh._.exports({"0":[[" ","Create Time Source"]],"1":[["Create Time Source"]],"2":[[" "," Create Time Source"]],"3":[[" ","This action creates a new ","Time Source",", and stores it in the ","Target"," variable. Read ","Time Sources"," for an overview."," ","This is based on the ","time_source_create()"," function. Read its page for detailed information on the arguments."," ","You need to use ","Start Time Source"," to activate a ","Time Source"," after it's created."," ","You must destroy a ","Time Source"," using ","Destroy Time Source"," when you no longer need it."],[" ","Argument"," ","Description"," ","Target"," ","The variable where the new ","Time Source"," will be stored"," ","Parent"," ","The parent ","Time Source",": either a ","built-in Time Source"," or a custom one"," ","Period"," ","The period length of the ","Time Source",", how long it takes to expire"," ","Units"," ","The ","units"," that the period is expressed in (seconds or frames)"," ","Callback"," ","The ","method"," or ","script function"," to call when the ","Time Source"," expires"," ","Arguments"," ","OPTIONAL"," An ","array"," containing the arguments to pass into the callback function"," ","Repetitions"," ","OPTIONAL"," How many times the ","Time Source"," should run in total, or -1 for indefinite repetition"," ","Expiry Type"," ","OPTIONAL"," The ","expiry type"," for the ","Time Source"],[" ","This code block does the following:"," ","It creates a new function, with the \"Temp\" option enabled. This creates a local method variable.\n      "," "," This method takes one argument, ","msg",", which it prints to the Output Log."," ","It then creates a new ","Time Source"," with a 1-second period length.\n      "," ","It specifies the ","callback_method"," variable as the \"Callback\", and an array with one argument for the function."," ","This ","Time Source"," is set to repeat indefinitely, as -1 is specified in \"Repetitions\"."," ","The ","Time Source"," is then started."," ","This ","Time Source"," will execute its callback every second, printing ","\"A second has passed!\""," to the Output Log."," ","Back: ","Time Source Actions"," ","Next: ","Destroy Time Source"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["GML Visual Action - Create Time Source"]],"6":[[" ","Action Syntax:"," ","Arguments:"],[" ","Example:"]],"id":"2420"})