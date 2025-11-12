import { Serie } from './Serie.js';
import { series } from './data.js';

const seriesTbody: HTMLElement = document.getElementById("series")!;
const avgElement: HTMLElement = document.getElementById("average-seasons")!;

renderSeriesInTable(series);
avgElement.innerHTML = `Promedio de temporadas: ${getAverageSeasons(series).toFixed(2)}`;

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(s => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${s.id}</td><td>${s.name}</td><td>${s.channel}</td><td>${s.seasons}</td>`;
    seriesTbody.appendChild(tr);
  });
}

function getAverageSeasons(series: Serie[]): number {
  if (series.length === 0) return 0;
  const total = series.reduce((acc, s) => acc + s.seasons, 0);
  return total / series.length;
}
