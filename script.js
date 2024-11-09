async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    const apiKey = '8af1099b9a169b57d34056ec';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;
    
    try{
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === 'success'){
            const rate = data.conversion_rates[toCurrency];
            const result = (amount * rate).toFixed(2);
            document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
        }else{
            document.getElementById('result').textContent = 'Erro ao obter taxa de câmbio';
        }
    } catch (error){
        console.error('Erro', error);
        document.getElementById('result').textContent = 'Erro ao obter taxa de câmbio';
    }
        
}