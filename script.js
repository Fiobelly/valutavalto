async function convertCurrency(){

    const amount = document.getElementById("amount").value
    const currency = document.getElementById("currency").value

    const url = `https://hexarate.paikama.co/api/rates/latest/HUF?target=${currency}`

    try{

        const response = await fetch(url)
        const data = await response.json()

        const rate = data.data.mid
        const result = amount * rate

        document.getElementById("result").innerHTML =
            `${amount} HUF = ${result.toFixed(2)} ${currency}`

    }catch(error){
        document.getElementById("result").innerHTML = "Hiba történt az API hívásnál."
    }

}