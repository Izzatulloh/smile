let body = document.querySelector('body')
let eye = document.querySelectorAll('.item')
body.addEventListener('mousemove', (e) => {

    // console.log(e.pageY);
    for (let i = 0; i < eye.length; i++) {
        let speed = eye[i].getAttribute('data-speed')
        let item = eye[i]
        console.log(speed);
        const x = (window.innerWidth - e.pageX * speed) / 200
        const y = (window.innerHeight - e.pageY * speed) / 100
        // console.log(window.innerWidth - e.pageY * speed);
        //    const x = 
        item.style.transform = `translate(${x}px , ${y}px)`
    }

})
const smile = document.querySelector('.smile')
const span = document.querySelector('.smile span')
window.addEventListener('scroll', () => {
    let move = this.scrollY
    if (move > 250) {
        smile.style = ` 
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    `
        span.style = `   
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
         border-top-left-radius: 75px;
    border-top-right-radius: 75px;
    top:25px;
    `

    } else {
        smile.style = ` 
        border-bottom-left-radius: 100px;
        border-bottom-right-radius: 100px;`
        span.style = `   
        border-bottom-left-radius: 75px;
        border-bottom-right-radius: 75px;
         border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    top:0px;
    `
    }
})