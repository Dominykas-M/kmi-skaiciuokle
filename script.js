// Grąžina KMI, suapvalintą iki 1 skaitmens po kablelio, arba null, jei įvestis netinkama.
function kmi(svoris, ugisCm) {
  if (!(svoris > 0) || !(ugisCm > 0)) return null; // atmeta NaN, 0 ir neigiamus
  const ugisM = ugisCm / 100;
  return Math.round((svoris / (ugisM * ugisM)) * 10) / 10;
}

// Kategorija pagal suapvalintą reikšmę, kad sutaptų su rodomu skaičiumi.
function kategorija(k) {
  if (k < 18.5) return 'Per mažas svoris';
  if (k < 25) return 'Normalus svoris';
  if (k < 30) return 'Antsvoris';
  return 'Nutukimas';
}

if (typeof document !== 'undefined') {
  document.getElementById('forma').addEventListener('submit', (e) => {
    e.preventDefault();
    const laukas = (id) => document.getElementById(id).value.trim();
    const s = laukas('svoris'), u = laukas('ugis');
    const k = s && u ? kmi(Number(s), Number(u)) : null;
    const rez = document.getElementById('rezultatas');
    if (k === null) {
      rez.className = 'klaida';
      rez.textContent = 'Įveskite teigiamus skaičius: svorį ir ūgį.';
    } else {
      rez.className = 'sekme';
      rez.textContent = `Jūsų KMI: ${k.toFixed(1)} — ${kategorija(k)}`;
    }
  });
}

if (typeof module !== 'undefined') module.exports = { kmi, kategorija };
