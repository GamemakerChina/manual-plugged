rh._.exports({"0":[[" ","dbg_watch"]],"2":[[" ","dbg_watch"]],"3":[[" ","This function creates a watch for a variable within the current debug section."," ","This is simply used to monitor a variable's value, and cannot be used to change it. Look at the Debug View ","Function Reference"," for controls that allow variable modification."," ","Each value is converted to a ","String"," and displayed."," ","NOTE"," This debug control spans two columns."],[" ","dbg_watch","(ref[, label]);"," ","Argument"," ","Type"," ","Description"," ","ref"," ","Reference"," ","A reference to a variable created with ","ref_create"," ","label"," ","String"," ","OPTIONAL"," The label to show"],[" ","N/A"],[" ","Create Event"," ","counter = 0;"," ","dbg_watch","(ref_create(self, \"counter\"), \"Counter\");\n  "," ","Step Event"," ","counter += 1;"," ","The above code first initialises a variable ","counter"," in the Create event. It then adds a watch for this variable using ","dbg_watch","."," ","In the Step event, the counter is incremented, a change that will be shown by the watch."," ","Back: ","The Debug Overlay"," ","Next: ","show_debug_overlay"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"1773"})