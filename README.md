# In Memorial

This is a project dedicated to a dear childhood companion who has taught me the virtues of loyalty, friendship and compassion. Love you doggo.

See the project [here](https://julzerinos.github.io/in-memoriam/). 

### About the project

This is a simple `html` + `typescript` web page compiled with `vite`. 

The key tech which makes this possible (and especially helpful with handling augmented reality) is Google's `<model-viewer>` component (check out the [overview](https://modelviewer.dev/), or the [Github repository](https://github.com/google/model-viewer)).

### Technical set up

The model was set up in Blender 4.0. For integration with “ the model was exported to `glTF 2.0` and `usdz` to support Apple's iOS AR Quick Look. For future reference, remember to flatten the armature bone hierarchy when exporting to `glTF`.

To workaround material limitations in the export process, `glTF` material variants are used and programatically (in javascript) swapped between to create the texture eye/blinking animation. There is no equivalent in `usdz` files (so no eye animation for iOS Quick Look). 

### Credits

- Modified version of Path Lord's [Augmented Reality](https://thenounproject.com/icon/augmented-reality-1741261/) icon from The Noun Project
