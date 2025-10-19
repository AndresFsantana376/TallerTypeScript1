import { series } from "./data.js";
const seriesTbody = document.getElementById("series");
const avgSeasonsElm = document.getElementById("average-seasons");
renderSeriesTable(series);
avgSeasonsElm.innerHTML = `Promedio de temporadas: ${getAverageSeasons(series)}`;
function renderSeriesTable(series) {
    series.forEach((s) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
                           <td>${s.name}</td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    let totalSeasons = 0;
    series.forEach((s) => (totalSeasons += s.seasons));
    return totalSeasons / series.length;
}
