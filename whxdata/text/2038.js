rh._.exports({"0":[[" ","keyboard_set_map"]],"1":[["keyboard_set_map"]],"2":[["keyboard_set_map"]],"3":[[" ","keyboard_set_map"]],"4":[[" ","Sometimes when making a game you may wish one key to do the same as another. For example many people use the keys WASD for movement, but then many people ","also"," use the arrow keys! So, what to do? Well, you ","could"," code the movement system\n    twice, but that is a bit complicated and thankfully redundant as this function permits you to \"map\" one key to another and so any input from either key will be interpreted as the same. To do this you choose a key that you want to map (key2\n    - this will be the key that you write the code for) and a key that you want it to be mapped ","to"," (key1). After that, keypresses to either key will be interpreted by ","GameMaker"," as coming from key2. You can also use this function to design\n    a system where the user can define their own keys for playing by simply mapping the user input key to the key that you have coded into the game."," ","The function takes a keycode value as returned by the function ","ord()"," (only ","capital"," letters from A-Z or numbers from 0-9), or any of the ","vk_*"," constants listed on the main ","Keyboard Input","    page."," ","IMPORTANT!"," The key you are mapping to (key1) will no longer be usable as it's actual key symbol once you use this function. For example, if you map the up-arrow to \"W\" then you will no longer be able to detect the press\n    of the \"W\" key as a \"W\", it will always be considered as the up-arrow. To undo this, either map the key to itself - so both key1 and key2 would be ","ord(\"W\")"," - or use the function ","keyboard_unset_map()","."],[" ","keyboard_set_map(key1, key2);"," ","Argument","Type"," ","Description"," ","key1","Virtual Key Constant (vk_*)"," ","This is the key that key1 is to be mapped to"," ","key2","Virtual Key Constant (vk_*)"," ","This is the key that is to be mapped"],[" ","Boolean"],[" ","keyboard_set_map(ord(\"A\"), vk_left);"," ","The above example code will map the \"A\" key to the left arrow key. This means that the player can use either the \"A\" ","or"," the left arrow key, and that all code written for the left arrow will also respond to the \"A\"\n    key being used instead."," ","Back: ","Keyboard Input"," ","Next: ","keyboard_get_map"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2038"})