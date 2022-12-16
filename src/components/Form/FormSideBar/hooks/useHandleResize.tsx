import { useEffect, useState } from "react"

export function useHandleResize() {
    type Dimensions = {
        height: number;
        width: number;
    }

    const [dimensions, setDimensions] = useState<Dimensions>({
        height: window.innerHeight,
        width: window.innerWidth
    })
    useEffect(() => {
        const debouncedHandleResize = function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }

        window.addEventListener('resize', debouncedHandleResize)

        return () => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    })

    const mobileSize:boolean = dimensions.width <= 575

    return { mobileSize }
}