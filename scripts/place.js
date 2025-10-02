
const yearspan = document.getElementById("currentyear")
if (yearspan) yearspan.textContent = new Date().getFullYear();

const modifiedby = document.getElementById('lastModified');
if (modifiedby) modifiedby.textContent = 'lastModified ' + document.lastModified;

// Windchill calculation for Accra weather section
window.addEventListener('DOMContentLoaded', () => {

    const tempC = 28; // Celsius
    const windKmh = 26; // km/h

    function calcWindChillCelsius(t, v) {
        return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
    }

    const windchillElem = document.getElementById('windchill');
    if (windchillElem) {
        if (tempC <= 10 && windKmh > 4.8) {
            const windchill = calcWindChillCelsius(tempC, windKmh);
            windchillElem.textContent = windchill.toFixed(1) + '°C';
        } else {
            windchillElem.textContent = 'N/A';
        }
    }
});

