var notas = 0

const añadir = (clear = true) => {
document.getElementById("chekbox").innerHTML += `
<li class="list-group-item element" id="lista-${notas}">
<div class="content">
<input class="form-check-input me-1" type="checkbox" value="">
<label class="form-check-label" for="firstCheckbox">${document.getElementById("nota").value}</label>
</div>
<button type="button" class="btn btn-danger" onclick="eliminar(${notas})">Eliminar</button>
</li>
`
if(clear) document.getElementById("nota").value = ""
notas++
}


const eliminar = id => document.getElementById(`lista-${id}`).remove()
