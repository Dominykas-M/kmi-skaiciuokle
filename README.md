# KMI skaičiuoklė

Paprasta internetinė kūno masės indekso (KMI) skaičiuoklė. Įveskite svorį (kg) ir ūgį (cm) – programa apskaičiuos jūsų KMI ir parodys svorio kategoriją.

**Programa veikia čia:** https://dominykas-m.github.io/kmi-skaiciuokle/

## Formulė

```
KMI = svoris (kg) / ūgis (m)²
```

Ūgis centimetrais pirmiausia paverčiamas metrais (padalijama iš 100). Rezultatas suapvalinamas iki vieno skaitmens po kablelio. Pavyzdžiui, 70 kg ir 175 cm → KMI 22.9.

## Kategorijos

| KMI | Kategorija |
|-----|------------|
| < 18.5 | Per mažas svoris |
| 18.5–24.9 | Normalus svoris |
| 25–29.9 | Antsvoris |
| ≥ 30 | Nutukimas |

Jei laukas tuščias, lygus nuliui, neigiamas ar ne skaičius, rodomas klaidos pranešimas.

## Technologijos

Grynas HTML, CSS ir JavaScript – be karkasų ir be kompiliavimo.

## Testavimas

```
node test.js
```
