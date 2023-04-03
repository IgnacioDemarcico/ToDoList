const mostrarArray = arr => console.log(`Array:${arr.map(e => " " + e)}`)


var notas = 0
var nota

const arrayToDo = []
const arrayGuardado = []
const arrayTildado = []

const añadir = (clear = true) => {
nota = document.getElementById("nota").value
arrayToDo.push(document.getElementById("nota").value)
document.getElementById("chekbox").innerHTML += `
<li class="fecha list-group-item element " id="lista-${notas}">
<div class="content">
<button type="button" class="btn btn-primary" data-bs-toggle="button" onclick="tachar(${notas})">Toggle button</button>
<label id="tachar" class="form-check-label" for="firstCheckbox">${document.getElementById("nota").value}</label>
</div>
<button type="button" class="btn btn-danger" onclick="eliminar(${notas})">Eliminar</button>
</li>
`
if(clear) document.getElementById("nota").value = ""
notas++



//const time = document.getElementById("time")
//time.firstChild.nodeValue = event.timeStamp

arrayGuardado.push(event.timeStamp)
mostrarArray(arrayToDo)
mostrarArray(arrayGuardado)
}

function tachar(id) {
    let elementoModificado = document.querySelector(`#lista-${id} > div > label`)
    if(elementoModificado.innerHTML != `<strike> ${nota} </strike>`){
        elementoModificado.innerHTML = `<strike> ${nota} </strike>`
        document.getElementsByClassName("fecha").className += "time-${event.timeStamp}"
        arrayTildado.push(event.timeStamp)
    }
    else if(elementoModificado.innerHTML = `<strike> ${nota} </strike>`){
        elementoModificado.innerHTML = `${nota}`
        arrayTildado.splice(document.getElementById(`lista-${id}`),1)
    }
    mostrarArray(arrayTildado)
}


function eliminar(id){ 
    document.getElementById(`lista-${id}`).remove()
    arrayTildado.splice(document.getElementById(`lista-${id}`),1)
    arrayToDo.splice(document.getElementById(`lista-${id}`),1)
}





