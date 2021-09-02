const loadData = () => {
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    inputField.value = '';
    const api = 'e01023a8f643454752a45e3ec5861eb4';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputFieldText}&APPID=${api}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data));
}

const displayResult = data => {
    console.log(data);
    const displayInfo = document.getElementById('display-info');
    displayInfo.innerHTML = '';
    const celcius = data.main.temp - 273.15
    // celcius.toFixed()
    const div = document.createElement('div');
    div.innerHTML = `
    <h1 class="text-center">${data.name}</h1>
    <h3 class="text-center">${celcius.toFixed(2)}<sup>o</sup>C</h3>
    <p class="text-center">${data.weather[0].main}</p>
    `
    displayInfo.appendChild(div);
}