# ReLayX2
A (web)designer layout tool with a twist

This project is based on "ReLayX" which was initially written for fun of Javascript, which is archived for references.

**ReLayX2** is ported to work on the desktop using *Electron* but also in *common browsers* and is an improved version of the existing old version.

### Installation and usage
#### Browser Version
Clone or download the repository and open **index.html**.

#### Windows and Linux
Open the releases here: https://github.com/jrie/ReLayX2/releases/latest  
Use and download either the `ia32` for 32 bit, `x64` exe files for 64 bit on Windows or for example the`i386.deb` for 32bit Linux Debian Package.
On Linux you also can make use of the `.AppImage` without any installation.

#### Using a development environment with Electron
If you just downloaded or clonend the repository you have to have `npm` *(NodePackageManager)* installed. After that run `npm install` in the ReLayX2 folder and after that run using `npm start`. This is mainly for the dev part.

#### Build yourself
To build the package yourself run `npm install` from the root folder. Then run `npm run dist` to build all packages - Windows and Linux only at this moment!

### Usage help and shortcuts

`[I]` Toggles this help on/off

`[G]` key toggles the grid on an off, `[Shift + G]` toggles custom designs

`[D]` toogles row / column highlighting / `[Shift + D]` toggles browser scroll grid on/off

`[Control]` cancels ongoing action or when grouping/ungrouping items

`[Shift]` snaps to grid when drawing selection, moving an item (click and drag) and mirroring and also when resizing

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

`[Shift + Backspace]` Clears all saved data (this is browser only!)

`[L]` Create or rename a labeled item if selected. If nothing is selected, turns label rendering on or off.

### Image import

Supported image types are: *gif*, *jpg*, *png* and *webp*.  

Images can be imported by using drag an drop. In order to import a image: Either select a container where the image should become placed and drag and drop the desired image into the window **or** if no container is selected the image, respected it original widht and height, is placed at the mouse cursor position.
