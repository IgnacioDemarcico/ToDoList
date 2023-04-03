const mostrarArray = arr => console.log(`Array:${arr.map(e => " " + e)}`)


var notas = 0

const nota = []
const arrayToDo = []
const arrayGuardado = []
const arrayId = []
const arrayTildado = []

const añadir = (clear = true) => {
nota.push(document.getElementById("nota").value)
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


arrayGuardado.push(event.timeStamp)
mostrarArray(arrayToDo)
mostrarArray(arrayGuardado)
}

function tachar(id) {
    let elementoModificado = document.querySelector(`#lista-${id} > div > label`)
    if(elementoModificado.innerHTML != `<strike> ${nota[id]} </strike>`){
        elementoModificado.innerHTML = `<strike> ${nota[id]} </strike>`
        document.getElementsByClassName("fecha").className += "time-${event.timeStamp}"
        arrayId.push(id)
        arrayTildado.push(event.timeStamp)
    }
    else if(elementoModificado.innerHTML = `<strike> ${nota[id]} </strike>`){
        elementoModificado.innerHTML = `${nota[id]}`
        arrayTildado.splice(document.getElementById(`lista-${id}`),1)
        arrayId.splice(document.getElementById(`lista-${id}`),1)
    }
    mostrarArray(arrayTildado)
    mostrarArray(arrayId)
}

const MasChico = () => document.getElementById("maschico").innerHTML = `el primero en terminar fue ${arrayToDo[arrayId[0]]} en ${arrayTildado[0]}`


function eliminar(id){ 
    document.getElementById(`lista-${id}`).remove()
    arrayTildado.splice(document.getElementById(`lista-${id}`),1)
    arrayToDo.splice(document.getElementById(`lista-${id}`),1)
    arrayId.splice(document.getElementById(`lista-${id}`),1)
}





