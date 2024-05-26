rh._.exports({"0":[[" ","The Animation Curve Editor"]],"1":[["Animation Curve Editor"]],"2":[["Aniimation Curves,Anim Curves,Curves"]],"3":[[" ","The Animation Curve Editor"]],"4":[[" ","An animation curve is an asset that contains one or more curves that represent how a value changes over time, and can use ","linear interpolation",", ","smooth interpolation"," or ","bezier interpolation"," to go between different points in the curve. The values you set on the vertical axis can be between any two values (between -1 and 1 by default) and the duration along the horizontal axis is ","always ","normalised from 0 to 1, making it easy to target different time ranges using multipliers in your game code or stretch them to fit a track in the ","Sequences Editor","."," ","Animation curves are comprised of \"channels\" and each channel can have its own curve settings, which permits you to - for example - describe a spatial position with two channels for the x/y location, or a colour gradient with 4 channels to represent a colour format. Animation curve assets can be used when working with Sequences and can also be accessed using code, making them a powerful tool when creating your games."," ","When you first create an animation curve asset the editor window will open and present you with the following sections:"," "," ","Curve Name"," "," ","Here you can give your animation curve a unique name (","alphanumeric characters and the \"_\" underscore symbol only","). This name is what will be used to refer to the curve and all its channels\n      when accessing it through code or in a sequence."," "," ","Curve Library"," "," ","The "," button opens the ","Animation Curve Library"," window,\n      which allows you to change the Curve Type of the Animation Curve, and apply a preset to the selected channel."," ","See the section on ","Animation Curve Library"," for information\n      on Curve Types and Presets. Note that opening the window through the "," button will have the ","\"Overwrite\""," Apply Mode selected by default."," "," ","Channel List"," "," ","The channel list is where you can add and name the different channels that will comprise your animation curve asset. By default when you first create an animation curve, a channel will have been added for you and you can add further channels by clicking\n      on the "," button to the left of the curve name. Each channel must have a unique name (using ","alphanumeric characters and the \"_\" underscore symbol only","),\n      and you can also set the colour for the channel by double clicking "," on the colour swatch to the left, which will open the colour picker to let you choose a new colour.\n      To rename the channel, you can do a slow double click "," and rename, and you can also use the right mouse button "," to open a menu where you can choose to rename, change the colour or delete the channel."," ","Channels can be expanded by clicking on the arrow beside the name to show each of the points on the channel curve, and these points can be edited manually by clicking the current value and typing in the new value."," ","You can toggle the channel visibility by clicking on the \"eye\" icon ",", or delete the channel by clicking the \"bin\" icon ","."," "," ","Channel Range"," "," ","The Channel Range button is used for setting the visual vertical range for the Channel Editor. By default this will be set from -1 to 1, but clicking this button will open the following window:"," ","Changing these values will change the way the data is represented in the Channel Editor section, permitting you\n      to have higher/lower values along the channel curve than just -1 to 1. Note that this is purely visual and does not clamp the values for the channel."," "," ","Channel Editor"," "," ","The Channel Editor shows a visual representation of the different channels used in the animation curve. By default, all channels will be shown here, but you can only edit the channel currently selected from the Channel List, which will be highlighted\n      in the editor. You can change the position of any of the points along the channel curve by clicking "," on them and dragging them around within the editor, but note that the\n      first and last point can only be changed along the vertical axis and their horizontal value will always be 0 and 1 respectively."," ","You can add points directly to the channel curve by moving the mouse close to the main channel line and then clicking "," when the cursor changes to the \"","Add Point","\"\n      tool, and you can then edit these points by clicking "," and dragging or by changing their values in the expanded channel options in the Channel List:"," ","You can edit multiple points at once by clicking "," and dragging within the editor to select all the points you want to edit or by using "," / "," + "," to add points to the selection individually. Releasing the mouse button and then clicking again on any of the points in the selection\n      and dragging will move them all together:"," ","You can "," right-click anywhere in the Channel Editor to open the ","Animation Curve Library"," window (only when the selected Curve Type is ","Bezier","). Applying a preset in this way will affect the whole channel. To modify only a part of the channel, you can "," right-click on an individual line to apply a preset to it, or select multiple lines by clicking "," and dragging, then "," right-click on the selection to apply a preset to the selected lines."," ","Note that opening the ","Animation Curve Library"," window through the Channel Editor will have the ","\"Between\""," Apply Mode selected by default."," "," ","Zoom Controls"," "," ","The zoom controls permit you to expand "," or contract "," the\n      vertical scale of the channel curves in the Channel Editor. You can also click the \"Center Fit\" button "," to have the Channel Editor view adjust it's\n      scale to fit all the points on the channel curve within the editor, centered around the mid range of the values:"," ","For information on the different ","Runtime"," functions that can be used along with animation curves, please see the following section of the manual:"," ","Animation Curve Functions"," ","Back: ","The Asset Editors"," ","Next: ","Animation Curve Library"]],"6":[[" ","© Copyright YoYo Games Ltd. 2024 All Rights Reserved"]],"id":"2737"})