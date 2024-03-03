import "./style.css"


let timeoutId = -1
type EyeAnims = "EyesClosed" | "EyesOpen"
type Anims = "Happy" | "Sleep1"


const modelViewer = document.querySelector('model-viewer') as Element & { variantName: EyeAnims, availableAnimations: Anims[], iosSrc: string }
if (!modelViewer) console.warn("Could not find the <model-viewer> element.")


const initializeModelViewer = () => {
    modelViewer.addEventListener('load', populateAnimationSelect)
}

const populateAnimationSelect = () => {
    const animationSelect = document.querySelector('#anim-select') as HTMLSelectElement

    if (!animationSelect) return

    const animations = modelViewer['availableAnimations'].filter(a => !a.includes('rig'))
    const options = animations.map((a) => {
        const option = document.createElement('option')
        option.text = option.value = a
        return option
    })
    animationSelect.append(...options)
    const initialAnim = modelViewer.getAttribute("animation-name")
    if (!initialAnim) console.warn("No initial animation was selected for the <model-viewer> element.")
    animationSelect.value = initialAnim ?? animations[0]


    animationSelect.addEventListener('change', () => {
        const animation = animationSelect.value as Anims
        modelViewer.setAttribute("animation-name", animation)

        if (animation === "Happy") {
            startEyesAnimation()
            modelViewer.iosSrc = "memoriam-happy.usdz"
        }

        if (animation === "Sleep1") {
            stopEyesAnimation()
            modelViewer.iosSrc = "memoriam-sleep1.usdz"
        }
    })

}


const generateBlinkTime = () => Math.random() * 250 + 100
const generateOpenTime = () => Math.random() * 500 + 250

const stopEyesAnimation = () => {
    modelViewer.variantName = "EyesClosed"

    clearInterval(timeoutId)
    timeoutId = -1
}

const animateEyes = (blink: boolean) => {
    modelViewer.variantName = blink ? "EyesClosed" : "EyesOpen"
    const timeout = blink ? generateBlinkTime() : generateOpenTime()
    timeoutId = setTimeout(() => animateEyes(!blink), timeout);
}

const startEyesAnimation = () => {
    modelViewer.variantName = "EyesOpen"
    timeoutId = setTimeout(() => animateEyes(false), generateOpenTime());
}


initializeModelViewer()
