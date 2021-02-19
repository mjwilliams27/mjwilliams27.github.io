
let s = parseFloat(document.getElementById('speed').textContent);
let t = parseFloat(document.getElementById('temp').textContent);

let wind_chill = Math.round(35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16)));

if (t <= 50 && s > 3) {
    document.getElementById("chill").textContent = wind_chill;
} else {
    document.getElementById("chill").textContent = "None";
}
