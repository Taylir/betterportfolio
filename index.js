let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(`.shape`)
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px )`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle
        if(contrastToggle) {
        document.body.classList +=` dark-theme`
    } 
        else {
        document.body.classList.remove(`dark-theme`)
    }
}


//template_p5md8rc
//service_ju9czme
//01135LlMefKItv48l  public key
function contact (event) {
    const loading = document.querySelector(`.modal__overlay--loading`);
    const success = document.querySelector(`.modal__overlay--success`);
    loading.classList += ` modal__overlay--visable`;
    event.preventDefault();
    
    emailjs
    // .sendForm(
    //     `service_ju9czme`,
    //     `template_p5md8rc`,
    //     event.target,
    //     `01135LlMefKItv48l`
    //     )
    .then(() => {
        loading.classList.remove(`modal__overlay--visable`);
        success.classList += ` modal__overlay--visable`;
    }).catch(() => {
        loading.classList.remove(`modal__overlay--visable`);
        alert(`The Email service is temporarily unavailable. Please contact me directly on tdl9716@gmail.com`);
    })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove(`modal--open`);
    }
        isModalOpen = true;
        document.body.classList += ` modal--open`;
}