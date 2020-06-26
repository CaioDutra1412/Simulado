function correção(){
    var questao1 = document.getElementById("resposta1").value
    var questao2 = document.getElementById("resposta2").value
    var questao3 = document.getElementById("resposta3").value
    resposta1 = "20"
    resposta2 = "50"
    resposta3 = "9"
    let a=document.createElement('a');
    a.target='_blank';
    a.href='Simulado2 HTML.html';

    acertos = 0
    if (questao1 == resposta1)
    {
        acertos = acertos + 1
    }
    if (questao2 == resposta2)
    {
        acertos = acertos + 1
    }
    if (questao3 == resposta3)
    {
        acertos = acertos + 1
    }
    if (acertos >= 2)
    {
        if (window.confirm('Aprovado para a próxima etapa!')) 
        {
        a.click();
        };
    }else{
        alert("Reprovado!")
    }
}

function correção2(){
    var questao4 = document.getElementById("resposta4").value
    var questao5 = document.getElementById("resposta5").value
    var questao6 = document.getElementById("resposta6").value
    resposta4 = "2"
    resposta5 = "19"
    resposta6 = "30"
    let a=document.createElement('a');
    a.target='_blank';
    a.href='Simulado3 HTML.html';

    acertos = 0
    if (questao4 == resposta4)
    {
        acertos = acertos + 1
    }
    if (questao5 == resposta5)
    {
        acertos = acertos + 1
    }
    if (questao6 == resposta6)
    {
        acertos = acertos + 1
    }
    if (acertos >= 2)
    {
        if (window.confirm('Aprovado para a próxima etapa!')) 
        {
        a.click();
        };
    }else{
        alert("Reprovado!")
    }
}

function correção3(){
    var questao7 = document.getElementById("resposta7").value
    var questao8 = document.getElementById("resposta8").value
    var questao9 = document.getElementById("resposta9").value
    resposta7 = "3"
    resposta8 = "5"
    resposta9 = "0"
    let a=document.createElement('a');
    a.target='_blank';
    a.href='Fim.html';

    acertos = 0
    if (questao7 == resposta7)
    {
        acertos = acertos + 1
    }
    if (questao8 == resposta8)
    {
        acertos = acertos + 1
    }
    if (questao9 == resposta9)
    {
        acertos = acertos + 1
    }
    if (acertos >= 2)
    {
        if (window.confirm('Fim do Simulado!!!')) 
        {
        a.click();
        };
    }else{
        alert("Reprovado!")
    }
}


