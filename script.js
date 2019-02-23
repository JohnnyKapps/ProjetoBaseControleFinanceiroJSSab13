var mensagem = "";
var despesas = [];

function mostrarFormulario(){
    document.getElementById('abrir-formulario').classList.toggle('hidden')
    document.getElementById('form').classList.toggle('hidden')
}

function salvar(){
    var novaDespesa = {
        descricao: document.getElementById('nome').value,
        valor: parseFloat(document.getElementById('valor').value)
    }

    if(despesaValida(novaDespesa)){
        despesas.push(novaDespesa);
        renderizaDespesas();
        calculaTotalLiquido();
        limpaFormulario();
        mostrarFormulario();
    }
    else {
        exibeErro();
    }
}

function limpaFormulario(){
    document.getElementById('nome').value = ""
    document.getElementById('valor').value = ""
}

function renderizaDespesas(){
    var html = "";

    for(var i = 0; i < despesas.length; i++) {
        html += "<tr>"
        html += " <td>" + despesas[i].descricao + "</td>"
        html += " <td>" + despesas[i].valor + "</td>"
        html += "</tr>"
    }

    document.getElementById('lancamentos').innerHTML = html;
}

function calculaTotalLiquido(){
    var total = 0;
    var salario = parseFloat(document.getElementById('salario').value)
    for(var i = 0; i < despesas.length; i++) {
        total += despesas[i].valor;
    }
    document.getElementById('total').innerHTML = Math.round(salario - total);
}

function despesaValida(despesa){
    var valido = true;

    if(despesa.descricao == "")
    {
        valido = false;
        mensagem = "Informe uma descrição"
    }

    if(isNaN(despesa.valor))
    {
        valido = false;
        mensagem = "Informe um valor"
    }

    return valido;
}

function exibeErro(){
    document.getElementById('error').innerHTML = mensagem;
}