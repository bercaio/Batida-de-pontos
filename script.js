document.getElementById('calc');


function calc() {


    let dataEntrada = document.getElementById("dataEntrada").value.split(':');
    let hraEntrada = parseInt(dataEntrada[0]);
    let minEntrada = parseInt(dataEntrada[1]);

    let saidaAlmoco = document.getElementById("saidaAlmoco").value.split(':');
    let hraSaidaAlmo = parseInt(saidaAlmoco[0]);
    let minSaidaAlmo = parseInt(saidaAlmoco[1]);

    let entradaAlmoco = document.getElementById("entradaAlmoco").value.split(':');
    let hraEntradaAlmo = parseInt(entradaAlmoco[0]);
    let minEntradaAlmo = parseInt(entradaAlmoco[1]);

    let dataSaida = document.getElementById("dataSaida").value.split(':');
    let hraSaida = parseInt(dataSaida[0]);
    let minSaida = parseInt(dataSaida[1]);


    let tranfHrToMinEntr = (hraEntrada * 60) + minEntrada;
    let hrToMinEndAlmoco = (hraSaidaAlmo * 60) + minSaidaAlmo;
    let hrToMinEntrAlmoco = (hraEntradaAlmo * 60) + minEntradaAlmo;
    let tranfHrToMinEnd = (hraSaida * 60) + minSaida;

    let tempHrDeAlmoco = hrToMinEndAlmoco - hrToMinEntrAlmoco;
    let tempDeTrabInMin = (tranfHrToMinEnd - tranfHrToMinEntr) + tempHrDeAlmoco;
    let tranfMinToHr = (tempDeTrabInMin / 60);
    let tranfHrToMin = Math.round((tranfMinToHr % 1) * 60);
    let hrsTransf = Math.floor(tranfMinToHr);

     //Hora normal 8
     let ganhoHr = 120;
     let ganhoPorMin = (ganhoHr / 480) * 480;
     
    //Horas extras
    let minInteiroHRE;
    let minExtraPorDay;
    let hrExtraPorDay;
    let ganhoPorMinHRE;
    
    if(tempDeTrabInMin > 480){
        minInteiroHRE = (tempDeTrabInMin - 480) 
        minEmHR = minInteiroHRE / 60;
        minExtraPorDay = Math.round((minEmHR % 1) * 60);
        hrExtraPorDay = Math.floor(minEmHR);
        
        ganhoPorMinHRE =  (0.2 * minInteiroHRE) + ganhoPorMin;

        document.getElementById("resp").innerHTML = (`Horas Trabalhadas: ${hrsTransf.toString().padStart(2, '0')}:${tranfHrToMin.toString().padStart(2, '0')}<br/>`);
        document.getElementById("resp").innerHTML += (`Horas extra do dia: ${hrExtraPorDay.toString().padStart(2, '0')}: ${minExtraPorDay.toString().padStart(2, '0')}<br/>`);
        document.getElementById("resp").innerHTML += (`Ganho no dia R$${ganhoPorMinHRE}`);
    } else{
        document.getElementById("resp").innerHTML = (`Horas Trabalhadas: ${hrsTransf.toString().padStart(2, '0')}:${tranfHrToMin.toString().padStart(2, '0')}<br/>`);
        document.getElementById("resp").innerHTML += (`Ganho no dia R$${ganhoPorMin}`);
    }

    //console.log(ganhoPorMinHRE)
    //console.log(minEmHR);
    //console.log(minInteiroHRE);
}