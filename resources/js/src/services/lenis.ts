import Lenis from 'lenis'

const lenis = new Lenis()

function raf(time: any) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
(window as any).Lenis = lenis
requestAnimationFrame(raf)
