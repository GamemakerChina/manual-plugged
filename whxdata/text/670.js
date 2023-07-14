rh._.exports({"0":[[" ","file_bin_seek"]],"1":[["file_bin_seek"]],"2":[[" ","file_bin_seek"]],"3":[[" ","This function moves the current read position within the file to the indicated position. You supply the file ID value, as returned by the function ","file_bin_open()",", and to append a file, move the position to the\n    size of the file before writing."," ","NOTE",": These functions ","do not"," work when the target module is HTML5."],[" ","file_bin_seek(binfile, pos);"," ","Argument","Type"," ","Description"," ","binfile","Binary File ID"," ","The ID of the file to read from."," ","pos","Real"," ","The position in the file to move to."],[" ","N/A"],[" ","file = file_bin_open(\"myfile.bin\", 2);"," size = file_bin_size(file);"," file_bin_seek(file, size);"," ","This would open a file from the same directory as the game, and assign its index to the variable \"file\", then get the size of the file and set the next writing position to that size."," ","Back: ","Binary Files"," ","Next: ","file_bin_write_byte"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["file_bin_seek"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"670"})