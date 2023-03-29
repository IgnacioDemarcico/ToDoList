const mostrarArray = arr => console.log(`Array:${arr.map(e => " " + e)}`)


var notas = 0

const arrayToDo = []
const arrayGuardado = []
const arrayTildado = []

const añadir = (clear = true) => {
document.getElementById("chekbox").innerHTML += `
<li class="list-group-item element" id="lista-${notas}">
<div class="content">
<button type="button" class="btn btn-primary" data-bs-toggle="button" onclick="tachar()">Toggle button</button>
<label id="tachar" class="form-check-label" for="firstCheckbox">${document.getElementById("nota").value}</label>
</div>
<button type="button" class="btn btn-danger" onclick="eliminar(${notas})">Eliminar</button>
</li>
`

if(clear) document.getElementById("nota").value = ""
notas++




//const time = document.getElementById("time")
//time.firstChild.nodeValue = event.timeStamp
arrayToDo.push(document.getElementById("nota").value)
arrayGuardado.push(event.timeStamp)
mostrarArray(arrayToDo)
mostrarArray(arrayGuardado)
}

function tachar() {
    document.getElementById("tachar").innerHTML += `hola`
    arrayTildado.push(event.timeStamp)
    mostrarArray(arrayTildado)
}




const eliminar = id => document.getElementById(`lista-${id}`).remove()




