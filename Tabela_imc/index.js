function calcIMC(event){
    event.preventDefault();
    let massa = document.getElementById("massa").value;
    let altura = document.getElementById("altura").value;

    const imc = massa/(altura*altura)
    
    document.getElementById("imc").innerHTML = "Seu IMC é: " + imc.toFixed(2)
    document.getElementById("condicao").innerHTML = "Condição : " + getCond(imc)
}

function getCond(imc) {
    if(imc < 18.5)
    {
        return "magro"
    } else if( imc < 24.9) {
        return "peso ideal"
    } else if (imc < 29.0) {
        return "sobrepeso"
    } else {
        return "obeso"
    }
}