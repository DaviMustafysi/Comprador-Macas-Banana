const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) { // Quando enviar o resultado o mesmo recarregar a página
    e.preventDefault();

    const inputQuantidadeMacasDuzia = e.target.querySelector('#qtdDuzia'); // Criando as variaveis 
    const qtdDuzia = Number(inputQuantidadeMacasDuzia.value); // Convertendo o valor do usuário para Number

    const inputQuantidadeBananas = e.target.querySelector('#qtdBananas'); // Criando as variaveis 
    const qtdBananas = Number(inputQuantidadeBananas.value); // Convertendo o valor do usuário para Number

    if (!qtdDuzia) {
        setResultado('Quantidade de macas inválido', false) // Caso o valor do usuário for diferente de number, vai exibir essa mensagem
        return;
    }

    if (!qtdBananas) {
        setResultado('Quantidade de bananas inválido', false) // Caso o valor do usuário for diferente de number, vai exibir essa mensagem
        return;
    }

    /*
        const inputQuantidadeMacasMeiaDuzia = e.target.querySelector('#qtdMeiaDuzia'); // Criando as variaveis 
        const qtdMeiaDuzia = Number(inputQuantidadeMacasMeiaDuzia.value); // Convertendo o valor do usuário para Number
    
        const inputQuantidadeMacasMaior = e.target.querySelector('#qtdMaior'); // Criando as variaveis 
        const qtdMaior = Number(inputQuantidadeMacasMaior.value); // Convertendo o valor do usuário para Number
    
        
        if (!qtdMeiaDuzia) {
            setResultado('Quantidade de meia duzia inválido', false) // Caso o valor do usuário for diferente de number, vai exibir essa mensagem
            return;
        }
    
        if (!qtdMaior) {
            setResultado('Quantidade maior inválido', false) // Caso o valor do usuário for diferente de number, vai exibir essa mensagem
            return;
        }
    
    */
    /*

    
        const nivelMaca = testeMaca(totalMaca);
    
        const msg = `Você tem o total de ${totalMaca} anos (${nivelMaca}).`; // Exibindo o resultado para o usuário
    
        setResultado(msg, true); // Puxando o resultado do usuário para exibir
    
        */
    
        const macas = calcMacas(qtdDuzia, valorRealMacas);

        const bananas = calcBanana(qtdBananas, valorRealBanana);

    const pMaca = `Você comprou o total de ${qtdDuzia} Maças, dando o valor de R$${macas} reais`; // Exibindo o resultado para o usuário

    const pBanana = `Você comprou o total de ${qtdBananas} Bananas, dando o valor de R$${bananas} reais`; // Exibindo o resultado para o usuário

    //const msg2 = `Você comprou o total de ${nivelDuziaMeia} Maças, dando o valor de R$${macas} reais`;

    setResultado(pMaca, pBanana);

    //setResultado(msg2);

});
 
function qtdDuzia() {
    return qtdDuzia;
}

function valorMaca() {
    return valorMaca = 0.50;
}

const valorRealMacas = valorMaca();

function calcMacas(quantidadeMacas, valorRealMacas) {
    const macas = quantidadeMacas * valorRealMacas;
    return macas;
}

/*
function getTesteMaca (testeDuziaMeia){
    const nivelDuziaMeia = ['Uma duzia', 'Meia Duzia']

    if(testeDuziaMeia === 12) {
        return nivelDuziaMeia[0]
    } else if (testeDuziaMeia === 6) {
        return nivelDuziaMeia[1]
    } else {
        'Valor não atribuido'
    }
}

*/

function qtdBananas() {
    return qtdBananas;
}

function valorBanana() {
    return valorBanana = 0.25;
}

const valorRealBanana = valorBanana();

function calcBanana(quantidadeBananas, valorRealBanana) {
    const bananas = quantidadeBananas * valorRealBanana;
    return bananas;
}

/*

const totaldeMacas = totalMaca(); // totalMaca

const umadDuziaTotal = umaDuzia(); // umaDuzia

const meiadDuziaTotal = meiaDuzia(); // meiaDuzia

const calMeiaDuzia = meiadDuziaTotal * totaldeMacas;

function calUmaDuzia(umadDuziaTotal, totaldeMacas) {
    const result = umadDuziaTotal * totaldeMacas;
    return result;
}


function getVerificadorMacas (maca) {

    if(maca == 12) {
        return 'Você comprou uma duzia ' + totaldeMacas + ' Maças, dando valor total R$ ' + calUmaDuzia + ' Reais';
    } 
    else if (maca == 6) {
        return 'Você comprou meia duzia ' + totaldeMacas + ' Maças, dando valor total R$ ' + calMeiaDuzia + ' Reais';
    }
    else if (maca > 12) {
        return 'Você comprou ' + totaldeMacas + ' Maças, dando valor valor total R$ ' + calUmaDuzia + ' Reais';
    } 
    else if (maca < 6) {
        return 'Você comprou ' + totaldeMacas + ' Maças, dando valor valor total R$ ' + calMeiaDuzia + ' Reais';
    }
    else if (maca > 6 && maca < 12) {
        return 'Total de ' + totaldeMacas + ' Maças, dando valor valor total R$ ' + calMeiaDuzia + ' Reais';
    } 
    else {
        return 'Valor não atribuido';
    }

*/

function criaP() { // Criando um paragráfo para retornar o valor calculado para o cliente
    const p = document.createElement('p');
    return p;
}

function setResultado(msgMaca, msgBanana) {
    const resultado = document.querySelector('#resultado');

    const pMaca = criaP();

    const pBanana = criaP();

    pMaca.innerHTML = msgMaca;

    pBanana.innerHTML = msgBanana;

    resultado.appendChild(pMaca);

    resultado.appendChild(pBanana);
}




