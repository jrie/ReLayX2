# ReLayX2
A (web)designer layout tool with a twist

This project is based on "ReLayX" which was initially written for fun of Javascript, which is archived for references.

**ReLayX2** is ported to work on the desktop using *Electron* and is an improved version of the existing old version.

#### Shortcuts

`[I]` Toggles this help on/off

`[G]` key toggles the grid on an off, `[Shift + G]` toggles custom designs

`[D]` toogles row / column highlighting / `[Shift + D]` toggles browser scroll grid on/off

`[Control]` cancels ongoing action or when grouping/ungrouping items

`[Shift]` snaps to grid when drawing selection, moving an item (click and drag) and mirroring and also on resizing

`[Shift + I]` Toggles image display on and off

`[Left click and drag movement]` Moves a single item or a single item of a group

`[Y / Z]` Move mode on/off switch, moves a element or group if grouped, can be used with snapping

`[Del]` Deletes a single element or a grouped element

`[C]` create a copy of a single item selection

`[V]` pastes the copy at cursor location, snapping is possible

`[Spacebar]` Mirror mode

By default uses distance from grid start to cursor for mirroring
This can be changed by pressing `[W]` or `[Q]` for each axis independently

`[X]` Toggles mirror mode horizontally or vertically

`[Q / W]` decrease / increase mirror grid spacing on selected axis - used with `[Space]` and `[X]`

`[E]` zeros/erases the grid spacing values for both mirroring axis

`[+ or -]` Increase or decrase the border on a single item or a group of items

`[1 to 9]` - Loads the design from slot 1 to 9, `[Shift + 1 ... 9]` saves a design to slot 1 to 9

`[Backspace]` Clears all saved data

`[L]` Create or rename a labeled item if selected. If nothing is selected, turns label rendering on or off.

### Image import

Images can be imported by using drag an drop. In order to import a image, select a container where the image should become placed and drag and drop the desired image into the window. In order to see the image, you have then to deselect the container (active selection overrides the image display for the item).
