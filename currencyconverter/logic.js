var url = "https://api.exchangeratesapi.io/latest?base="

async function convert(){
    var base = document.getElementById('base').value;
    var output = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var ourcurr;
    var final;
    let response = await fetch(`${url}${base}`,{method:'GET'});
    let data = await response.json()
    ourcurr = data.rates
    final = `Converted Value of ${amount} ${base}  is ${ourcurr[output]*parseFloat(amount)} ${output}`
    document.getElementById('result').innerText=final
}

//es6
/*function convert(){
    var base = document.getElementById('base').value;
    var output = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var ourcurr;
    var final;
    console.log(`${url}${base}`)
    fetch(`${url}${base}`,{method:'GET'})
    .then((response) => response.json())
    .then((data) => {
        //console.log(data.rates.CAD)
        ourcurr = data.rates
        final = `Converted Value of ${amount} ${base}  is ${ourcurr[output]*parseFloat(amount)} ${output}`
        document.getElementById('result').innerText=final
    })
}*/