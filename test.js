const assert = require('assert');
const { kmi, kategorija } = require('./script.js');

assert.strictEqual(kmi(70, 175), 22.9);
assert.strictEqual(kategorija(kmi(70, 175)), 'Normalus svoris');
assert.strictEqual(kategorija(18.4), 'Per mažas svoris');
assert.strictEqual(kategorija(18.5), 'Normalus svoris');
assert.strictEqual(kategorija(24.9), 'Normalus svoris');
assert.strictEqual(kategorija(25), 'Antsvoris');
assert.strictEqual(kategorija(29.9), 'Antsvoris');
assert.strictEqual(kategorija(30), 'Nutukimas');
for (const [s, u] of [[0, 175], [70, 0], [-70, 175], [70, -175], [NaN, 175], [70, NaN]]) {
  assert.strictEqual(kmi(s, u), null, `${s}/${u} turėtų būti atmesta`);
}
console.log('Visi testai praėjo');
