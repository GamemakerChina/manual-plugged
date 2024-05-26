rh._.exports({"0":[[" ","buffer_md5"]],"1":[["buffer_md5"]],"2":[["buffer_md5,MD5"]],"3":[[" ","buffer_md5"]],"4":[[" ","This function takes the input data from a given buffer (or part of the buffer) and return the 32-character hexadecimal MD5 hash that is unique to that data. In this way you can generate a secure key which can be stored and used to check the integrity of the information being sent to (or received from) an external server (for example)."," ","In cryptography, MD5 (Message-Digest algorithm 5) is a widely used cryptographic ","hashing"," function with a 128-bit hash value which has been employed in a wide variety of security applications. It is also commonly used to check the integrity of data."," ","When applying this to buffers using this function you must specify the buffer to use, then an offset value (in bytes) for where to begin, and then a size (again in bytes) for the region to be hashed."," ","NOTE"," MD5 is not completely secure and can be broken. See ","this page"," for more info."],[" ","buffer_md5","(buffer, offset, size);"," ","Argument"," ","Type"," ","Description"," ","buffer"," ","Buffer"," ","The buffer to use."," ","offset"," ","Real"," ","The data offset value."," ","size"," ","Real"," ","The size of the buffer."],[" ","String"],[" ","check_string = buffer_md5(buff, 0, buffer_get_size(buff));"," ","The above code will create an MD5 hash for the full data stored in the buffer stored in the variable ","buff",", and store the returned hash in the variable ","check_string","."," ","Back: ","Buffers"," ","Next: ","buffer_sha1"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"1856"})