
const apiKey = '70512bad6a894339a2b185548250402';
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${"São Paulo"}&lang=pt`;


fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(`Cidade: ${data.location.name}`);
        console.log(`Temperatura: ${data.current.temp_c}°C`);
        console.log(`Clima: ${data.current.condition.text}`);
        console.log(`Umidade: ${data.current.humidity}%`);
    })
