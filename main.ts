import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById("series")!;
const avgSeasonsElm: HTMLElement = document.getElementById("average-seasons")!;

renderSeriesTable(series);
avgSeasonsElm.innerHTML = `Promedio de temporadas: ${getAverageSeasons(series)}`;

function renderSeriesTable(series: any[]): void {
  series.forEach((s) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.id}</td>
                           <td>${s.name}</td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeasons(series: any[]): number {
  let totalSeasons = 0;
  series.forEach((s) => (totalSeasons += s.seasons));
  return totalSeasons / series.length;
}
