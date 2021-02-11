        let inputAltura = document.getElementById("altura")
        let inputPeso = document.getElementById("peso")
        let resultado = document.getElementById("resultado")

        function calcularIMC(){
            let altura = inputAltura.value;
            let peso = inputPeso.value;
            let indiceIMC = (peso)/ ((altura*altura)/10000);

            resultado.innerHTML = `<p>Sue IMC é: ${indiceIMC}</p>`

            if(indiceIMC<18.5){
                resultado.innerHTML += `<p>Você está desnutrido </p>`
            } else if(indiceIMC >=18.5 && indiceIMC<=24.9){
                resultado.innerHTML += `<p>Você está normal </p>`
            } else if(indiceIMC >=25 && indiceIMC<=29.9){
                resultado.innerHTML += `<p>você está pré-obeso </p>`
            } else if(indiceIMC >=30 && indiceIMC<=34.9){
                resultado.innerHTML += `<p>você está com obesidade grau 1 </p>`
            } else if(indiceIMC >=35 && indiceIMC<=39.9){
                resultado.innerHTML += `<p>você está com obesidade grau 2 </p>`
            } else{
                resultado.innerHTML += `<p>você está com obesidade mórbida </p>`
            }
        }

        
