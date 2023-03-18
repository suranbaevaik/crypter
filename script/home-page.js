const slider = document.querySelector('#price-range');
        const output = document.querySelector('#value');

        output.innerHTML = slider.value;

        slider.addEventListener('input', () => {
            output.innerHTML = slider.value;
        })

        slider.addEventListener('mousemove', () => {
            const x = slider.value;
            const color = 'linear-gradient(106deg, rgba(55,114,255,0.9894082633053222)' + x + '%, rgba(230,232,236,1)' + x + '%)';
            slider.style.background = color;
        })