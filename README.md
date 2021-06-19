# ReLayX2
A (web)designer layout tool with a twist

This project is based on "ReLayX" which was initially written for fun of Javascript, which is archived for references.

**ReLayX2** is ported to work on the desktop using *Electron* but also in *common browsers* and is an improved version of the existing old version.

### Installation and usage
#### Browser Version
Clone or download the repository and open **index.html**.

#### Using Electron
If you just downloaded or clonend the repository you have to have `npm` *(NodePackageManager)* installed. After that run `npm install` in the ReLayX2 folder and after that run using `npm start`. This is mainly for the dev part, but recommended since there are no official releases of RelayX2 at the moment.


### Usage help and shortcuts

`[I]` Toggles this help on/off

`[G]` key toggles the grid on an off, `[Shift + G]` toggles custom designs

`[D]` toogles row / column highlighting / `[Shift + D]` toggles browser scroll grid on/off

`[Control]` cancels ongoing action or when grouping/ungrouping items

`[Shift]` snaps to grid when drawing selection, moving an item (click and drag) and mirroring and also on resizing

`[Shift + I]` Toggles image display on and off

`[Left click and drag movement]` Moves a single item or a single item of a group

`[Y / Z]` Move mode on/off switch, moves a element or group if grouped, can be used with snapping

`[Del]` Deletes a single element or a grouped element

`[T]` Toggles container visibility on or off - use with images!

`[C]` create a copy of a single item selection

`[V]` pastes the copy at cursor location, snapping is possible

`[Spacebar]` Mirror mode

By default uses distance from grid start to cursor for mirroring
This can be changed by pressing `[W]` or `[Q]` for each axis independently

`[X]` Toggles mirror mode horizontally or vertically

`[Q / W]` decrease / increase mirror grid spacing on selected axis - used with `[Space]` and `[X]`

`[E]` zeros/erases the grid spacing values for both mirroring axis

`[+ or -]` Increase or decrase the border on a single item or a group of items

`[Shift + Arrow up, down, left or right]` Moves the current selected container up, down, left or right

`[1 to 9]` - Loads the design from slot 1 to 9, `[Shift + 1 ... 9]` saves a design to slot 1 to 9

`[Shift + Backspace]` Clears all saved data

`[L]` Create or rename a labeled item if selected. If nothing is selected, turns label rendering on or off.

### Image import

Images can be imported by using drag an drop. In order to import a image, select a container where the image should become placed and drag and drop the desired image into the window.
