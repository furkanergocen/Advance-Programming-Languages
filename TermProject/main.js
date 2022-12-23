    var screen = document.querySelector('#screen');
    var btn = document.querySelectorAll('.btn');
    for (item of btn) {
        item.addEventListener('click', (e) => { btntext = e.target.innerText;
            if (btntext == '×') {
                btntext = '*';
            }
            if (btntext == '÷') {
                btntext = '/';
            }
            screen.value =screen.value+ btntext;
        });
    }
    function sinus() {
        screen.value = Math.sin(screen.value);
    }

    function cosinus() {
        screen.value = Math.cos(screen.value);
    }

    function tanjant() {
        screen.value = Math.tan(screen.value);
    }

    function pow() {
        screen.value = Math.pow(screen.value, 2);
    }

    function sqrt() {
        screen.value = Math.sqrt(screen.value, 2);
    }

    function log() {
        screen.value = Math.log(screen.value);
    }

    function pi() {
        screen.value = 3.14159265359;
    }

    function e() {
        screen.value = 2.71828182846;
    }

    function factorialize() {
        let i, number, f;
        f = 1
        number = screen.value;
        for (i = 1; i <= number; i++) {
            f = f * i;
        }
        i = i - 1;
        screen.value = f;
    }
    function backClear() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }