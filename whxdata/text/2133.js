rh._.exports({"0":[[" ","network_connect_raw_async"]],"1":[["network_connect_raw_async"]],"2":[["network_connect_raw_async"]],"3":[[" ","network_connect_raw_async"]],"4":[[" ","This function sends a request to connect to a server."," ","The function takes the ","Network Socket ID"," ","to connect through (see ","network_create_socket",") and requires you to give the IP address to connect to (a string, can be IPv4 or IPv6) as well as the port to connect through. If the connection fails a value of less than 0 will be returned."," ","The difference between this function and ","network_connect_async"," is that this function can connect to any server and does nothing to the raw data, meaning that you have to implement the protocols yourself at the server end. Note that this function is asynchronous, generating an ","Asynchronous Networking"," event of the type ","network_type_non_blocking_connect","."," ","NOTE"," This function uses a TCP-like socket (i.e. ","network_socket_tcp","). It may work with other socket types as well, but this isn't guaranteed."],[" ","network_connect_raw_async","(socket, url, port);"," ","Argument"," ","Type"," ","Description"," ","socket"," ","Network Socket ID"," ","The id of the socket to use."," ","url"," ","String"," ","The URL or IP to connect to (a string)."," ","port"," ","Real"," ","The port to connect to."],[" ","Real"],[" ","client = network_create_socket(network_socket_tcp);","\n    network_connect_raw_async(client, \"www.macsweeneygames.com\", 6510);"," ","The above code will create a new TCP socket then attempt to create a \"raw\" asynchronous connection through that to the given URL on port 6510."," ","Back: ","Networking"," ","Next: ","network_resolve"]],"5":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2133"})