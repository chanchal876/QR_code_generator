let input = document.querySelector("input")
let button = document.querySelector("button")
let img = document.querySelector("img")
let form = document.querySelector("form")


const getQrGenerator = async (e) =>{
       e.preventDefault()
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`)

    const data = response.url
    img.setAttribute("src", data)
    console.log(response)


    form.reset()
    
}
button.addEventListener("click", getQrGenerator)