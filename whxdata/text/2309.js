rh._.exports({"0":[[" ","draw_surface_general"]],"1":[["draw_surface_general"]],"2":[[" ","draw_surface_general"]],"3":[[" ","This function combines the function ","draw_surface_ext()"," with the function ","draw_surface_part()",", adding in some additional blending options so that each corner of the final surface part can be blended with an individual colour."," ","NOTE"," ","Gradient blending is not available for the HTML5 target unless WebGL is enabled."," ","NOTE"," When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()"," before referencing them directly."," ","TIP"," How a surface appears depends on its contents, especially the alpha values inside the surface. A surface ","cleared"," with an alpha of 0 may appear different from a surface cleared with an alpha of 1, due to the way they blend with the background. Take care of this whenever you notice a difference in the way something renders on a custom surface as opposed to the ","application_surface","."],[" ","draw_surface_general(id, left, top, w, h, x, y, xscale, yscale, rot, c1, c2, c3, c4, alpha);"," ","Argument"," ","Type"," ","Description"," ","id"," ","Surface ID"," ","The unique ID value of the surface to draw."," ","left"," ","Real"," ","The left position in the surface of the part to be drawn."," ","top"," ","Real"," ","The top position in the surface of the part to be drawn."," ","w"," ","Real"," ","The width of the part to be draw, from left."," ","h"," ","Real"," ","The height of the part to be draw, from top."," ","x"," ","Real"," ","The x position of where to draw the surface."," ","y"," ","Real"," ","The y position of where to draw the surface."," ","xscale"," ","Real"," ","The horizontal scaling to draw the surface with."," ","yscale"," ","Real"," ","The vertical scaling to draw the surface with."," ","rot"," ","Real"," ","The rotation or angle to draw the surface with."," ","c1"," ","Colour"," ","The colour of the top left corner of the surface."," ","c2"," ","Colour"," ","The colour of the top right corner of the surface."," ","c3"," ","Colour"," ","The colour of the bottom right corner of the surface."," ","c4"," ","Colour"," ","The colour of the bottom left corner of the surface."," ","alpha"," ","Real"," ","The alpha transparency to draw the surface with.."],[" ","N/A"],[" ","draw_surface_general(surf, 8, 8, 32, 32, x, y, 2, 0.5, 180, c_white, c_white, c_black, c_black, 1);"," ","This will draw a 32x32 pixel area from 8x8 pixels into the surface. It will be stretched to double its usual width but half its usual height. It will be opaque, and upside down. The top area of the surface will be blended white and hence normal, but the bottom area will be black, meaning the surface will go from normal to silhouette downwards in a smooth gradient."," ","Back: ","Surfaces"," ","Next: ","application_surface"]],"4":[[" ","© Copyright YoYo Games Ltd. 2023 All Rights Reserved"]],"5":[["draw_surface_general"]],"6":[[" ","Syntax:"],[" ","Returns:"],[" ","Example:"]],"id":"2309"})