const myLibrary = []

function Book(title,author,pages,read){
  this.id = crypto.randomUUID()
  this.title = title
  this.author = author
  this.pages= pages
  this.read = read
  this.info = function (){
    return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`
  }
}
function addtoLibrary(formData){ 
  const values = Array.from(formData.values())
  let book = new Book(...values)
  myLibrary.push(book)
}

const page = document.querySelector("#library")
const submit = document.getElementById("submit-form")
const form = document.querySelector("form")
function preventSubmission(event){
  event.preventDefault()
  let formData = new FormData(form,submit)
  addtoLibrary(formData)
  console.log(myLibrary.length)
}
submit.addEventListener("click",preventSubmission) 
page.style.flex = "1 1 calc(100% /"+ myLibrary.length 
function display(){
    console.log(myLibrary.length)
    for (i=0;i<myLibrary.length;i++){
        let card = document.createElement("div")
        let info = document.createElement("p")
        let button = document.createElement("button")
        button.type= "submit"
        button.dataset.columns = i 
        button.textContent = "Delete"
        card.appendChild(button)
        button.hidden = true
        info.id= i 
        card.id = "card"
        card.dataset.columns= "book"+i 
        info.textContent = myLibrary[i].info()
        console.log(myLibrary[i].info())
        card.appendChild(info)
        page.appendChild(card)
        card.addEventListener("mousemove",() => {
          button.hidden= false
        })
        card.addEventListener("mouseleave", () => {
          button.hidden = true
        })
      
    }
}
if(myLibrary.length >0 )
  display()
let buttons = document.querySelectorAll("[textContent=Delete]")
buttons.forEach(button => {
  button.addEventListener("click",() => {
            let child = document.querySelector("[data-columns="+"book"+button.dataset.columns+"]")
            page.removeChild(child)
          })
  
});