const sliderImages = document.querySelectorAll(".howClean__image")

const startSlider = () => {
    let index = 0;

    const startIntervalSlider = () => {
        setInterval(() => {
            sliderImages[index].style.zIndex = index
            index++

            if(index === sliderImages.length) {
                setTimeout(() => {
                    index = 0
                    sliderImages.forEach(element => {
                        element.style.zIndex = index
                    })
                }, 2000);
            }
        }, 3000);
    }

    startIntervalSlider()
}

startSlider()