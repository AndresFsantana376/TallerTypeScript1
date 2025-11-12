import { series } from './data.js';
const seriesTbody = document.getElementById("series");
const avgElement = document.getElementById("average-seasons");
const detailContainer = document.getElementById("series-detail");
renderSeriesInTable(series);
avgElement.innerHTML = `Promedio de temporadas: ${getAverageSeasons(series).toFixed(2)}`;
function renderSeriesInTable(series) {
    series.forEach(s => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${s.id}</td><td>${s.name}</td><td>${s.channel}</td><td>${s.seasons}</td>`;
        tr.addEventListener("click", () => showSeriesDetail(s));
        seriesTbody.appendChild(tr);
    });
}
function getAverageSeasons(series) {
    let totalSeasons = 0;
    series.forEach(s => totalSeasons += s.seasons);
    return totalSeasons / series.length;
}
function showSeriesDetail(serie) {
    detailContainer.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${serie.image}" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.webpage}" target="_blank" class="btn btn-primary">Ver más</a>
      </div>
    </div>
  `;
}
