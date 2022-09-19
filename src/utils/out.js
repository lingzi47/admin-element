// 防抖
export const antiShake = (fn, t) => {
    let delay = t || 500
    let timer
    return function () {
        let args = arguments;
        if (timer) {
            clearTimeout(timer)
        }

        let callNow = !timer

        timer = setTimeout(() => {
            timer = null
        }, delay)

        if (callNow) fn.apply(this, args)
    }
}