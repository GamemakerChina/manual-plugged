rh._.exports({"0":[[" ","file_text_readln"]],"1":[["file_text_readln"]],"2":[[" ","file_text_readln"]],"3":[[" ","With this function you can skip the remainder of the current line from a given opened text file and move to the start of the next one. The function will also return the full line as a string, making it an easy way to read complete \"chunks\" of data for parsing later."],[" ","file_text_readln(fileid);"," ","Argument","Type"," ","Description"," ","fileid","Text File ID"," ","The id of the file to read from."],[" ","String"],[" ","var file = file_text_open_read(working_directory + \"hiscore.txt\");","\n    for (var i = 0; i < 10; ++i;)","\n    {","\n        scr[i] = file_text_read_real(file);","\n        file_text_readln(file);","\n        scr_name[i] = file_text_read_string(file);","\n        file_text_readln(file);","\n    }","\n    file_text_close(file);"," ","The above code opens a file for reading and then loops through the lines of the file reading alternately a real number value and a string into two different arrays for future use. The file is then closed when the loop has finished."," ","Back: ","Text Files"," ","Next: ","file_text_write_real"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["file_text_readln"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"683"})