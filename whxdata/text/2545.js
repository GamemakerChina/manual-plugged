rh._.exports({"0":[[" ","array_contains_ext"]],"1":[["array_contains_ext"]],"2":[[" ","array_contains_ext"]],"3":[[" ","This function checks if the given array (or a part of it) contains any or all of the given values."," ","The ","matchAll"," argument determines if ","all"," values should be present in the array (","true",") or if ","any one"," of the values will do (","false",")."," ","The array of values may contain duplicates. This way you can check if there are multiple (or ","enough",") occurrences of a value in an array. To avoid this, you can run ","array_unique"," on your array first to guarantee only single occurrences."," ","TIP"," To check if an array not just ","contains"," a value but rather contains a value ","that satisfies a certain condition",", use ","array_any","."],[" ","array_contains_ext","(array, values, [matchAll], [offset], [length]);"," ","Argument"," ","Type"," ","Description"," ","array"," ","Array"," ","The array in which to look for the values"," ","values"," ","Array"," ","An array containing the values to look for. Add a value multiple times with the ","matchAll"," argument set to ","true"," to require that a value occurs multiple times (see Example 2). Order isn't taken into account, i.e. the values don't have to occur in the array in the order they're listed here."," ","matchAll"," ","Boolean"," ","OPTIONAL"," Whether all values should be present in the array (","true",") or any of the values will do (","false",")."," ","offset"," ","Real"," ","OPTIONAL"," The offset, or starting index, in the array. Setting a negative value will count from the end of the array. The starting index will then be ","array_length(array) + offset",". See: ","Offset And Length"," ","length"," ","Real"," ","OPTIONAL"," The number of elements to traverse. A negative value will traverse the array backwards (i.e. in descending order of indices, e.g. 2, 1, 0 instead of 2, 3, 4). See: ","Offset And Length"],[" ","Boolean"],[" ","hand = [\"1\", \"1\", \"4\", \"J\", \"J\", \"Q\", \"7\", \"10\", \"K\", \"8\", \"7\", \"8\", \"5\"];","\n    var _high_cards = [\"A\", \"K\", \"Q\", \"J\"];","\n    var _any_high_cards = ","array_contains_ext","(hand, _high_cards);","\n    show_debug_message(_any_high_cards);"," ","The above code first creates an array ","hand"," with 13 values. It then defines another array ","_high_cards"," that defines which are considered \"high\" cards. Next the ","hand"," array is checked for any of these using ","array_contains_ext"," and the result is stored in a temporary variable ","_any_high_cards",". Finally a debug message shows the value of the variable ","_any_high_cards","."],[" ","inventory = [\"potion\", \"elixir\", \"potion\", \"herb\", \"herb\", \"special spice\"];","\n    var _required_items = [\"herb\", \"herb\"];","\n    var _can_make_potion = ","array_contains_ext","(inventory, _required_items, true);","\n    show_debug_message(\"A potion can{0} be made using the inventory's current contents\", _can_make_potion ? \"\" : \"not\");"," ","The above code first creates an array that stores a basic inventory of items. The items are stored as strings. It then defines a temporary array ","_required_items"," that contains the items required to make a \"potion\". Next ","array_contains_ext"," is called to check if ","all"," values in ","_required_items"," are present in ","inventory",". This is done by setting the ","matchAll"," argument to ","true",". The result is stored in the variable ","_can_make_potion",". Finally a debug message is shown saying if a \"potion\" can be made or not from the inventory's current contents."," ","Back: ","Array Functions"," ","Next: ","array_sort"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["array_contains_ext"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example 1: Check if any of the given values is present in an array"],[" ","Example 2: Check if all values are present in an array"]],"id":"2545"})