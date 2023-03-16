let letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
const container = document.querySelector('.container')
const text = document.querySelector('.text')

function getColors(){
    let color = '#'
    for(let i = 0; i<6; i++){
        let random = Math.floor(Math.random() * letters.length)
        color += letters[random]
    }
    return color;
}

function setColor(){
    let color1 = getColors()
    let color2 = getColors()
    let getDeg = Math.floor(Math.random() * 360)
    text.textContent = `linear-gradient(${getDeg}deg, ${color1} , ${color2})`
    document.body.style.background = `linear-gradient(${getDeg}deg, ${color1}, ${color2})`
}

setColor()


container.addEventListener('click', setColor)

text.addEventListener('click', ()=>{
    document.execCommand('copy')
})

text.addEventListener('copy', function(event){
    event.preventDefault();
    if(event.clipboardData){
        event.clipboardData.setData("text/plain", text.textContent)
        alert('Text copied')
    }
})