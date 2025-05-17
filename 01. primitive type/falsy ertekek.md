# **A "falsy" értékek**

A **"falsy" értékek** JavaScript-ben (és 
TypeScript-ben, mivel az TS is JS-re épül)
rendkívül fontosak, **főként feltételek kiértékelésénél**,
mint például `if` vagy `while` esetén.

## **Mit jelent az, hogy "falsy"?**
A "falsy" egy olyan érték, amely **automatikusan** 
`false`**-ként viselkedik egy logikai kifejezésben**
(pl. `if (value)`), még akkor is, ha az **nem a** 
`false` **szó szerinti érték**.

Ha egy érték **nem falsy, akkor truthy** – azaz igazként viselkedik.

## **A 7 beépített falsy érték JS/TS-ben:**
| Érték |	Magyarázat	|Példa |
| ----- | ------------- | ----- |
| `false` |	A logikai `false` érték |	`if (false)` → nem fut le |
| `0` |	Számérték nulla |	`if (0)` → nem fut le |
| `-0` |	Negatív nulla (ritka, de létezik) |	`if (-0)` → nem fut le |
| `0n` |	BigInt nulla |	`if (0n)` → nem fut le |
| `` |	Üres string |	`if ("")` → nem fut le |
| `null` |	Üres érték |	`if (null)` → nem fut le |
| `undefined` |	Nem definiált érték |	`if (undefined)` → nem fut le |
| `NaN` |	"Not a Number" – érvénytelen szám |	`if (NaN)` → nem fut le |

Minden más érték truthy (pl. `0`, `false`, `[]`, `{}`, stb.)

### **JavaScript példa:**
```js
if ("") {
  console.log("Ez nem fut le");
}

if ("hello") {
  console.log("Ez igen, mert 'hello' truthy"); // ✅
}

if (null) {
  console.log("Ez sem fut le");
}

if ([]) {
  console.log("Ez le fog futni – az üres tömb truthy!"); // ✅
}
```

## **TypeScript-ben van különbség?**
TypeScript csak típusellenőrzést ad hozzá, de a futási logika
(pl. `if`, `while`, `!`, stb.) pontosan ugyanaz, mint JavaScript-ben.

Viszont a TS meg tud akadályozni olyan hibákat, ahol
"falsy" értékeket használunk, ha a típus szűkítése jól van beállítva:

### **TypeScript példa:**
```ts
function checkName(name: string | null) {
  if (name) {
    console.log(name.toUpperCase()); // TS szerint itt már biztosan string
  } else {
    console.log("Nincs név megadva.");
  }
}
```
### **Extra: Trükkös példák**
```js
if ([] == false) {
  console.log("Ez igaz!"); // 😮 Igen, mert == konverzió történik
}

if ([]) {
  console.log("Ez is igaz!"); // 😮 Az üres tömb truthy
}

console.log(Boolean([]));      // true
console.log(Boolean({}));      // true
console.log(Boolean("false")); // true – nem üres string
```

## **Intejú kérdések:**
1. Felsorolnál néhány "falsy" értéket JS-ben? 

_Válasz:_ Igen, JavaScript-ben az alábbi értékek 
"falsy", tehát logikai értelemben false-ként viselkednek:
* false
* 0 és -0
* 0n (BigInt null)
* "" (üres string)
* null
* undefined
* NaN

Minden más érték "truthy", tehát igazként értékelődik ki feltételekben.

2. Mit jelent, hogy egy érték truthy/falsy?

_Válasz:_ Egy érték akkor truthy, ha logikai kontextusban (`if`, `while`, logikai művelet) 
igazként viselkedik, és akkor falsy, ha hamisként.

Például:
```js
if ("hello") { ... } // lefut (truthy)
if (0) { ... }       // nem fut le (falsy)
```
Ez különösen fontos, ha pl. egy API válaszát, űrlapmezőt vagy változót ellenőrzünk a megléte alapján.

3. Mi történik, ha egy üres tömböt vagy objektumot használsz if-ben? 

_Válasz:_ Egy üres tömb (`[]`) vagy üres objektum (`{}`) truthy JS-ben. 

Ez meglepő lehet, mert tartalmilag üres, de technikailag létező 
objektum, így:

```js
if ([]) { console.log("Ez lefut!"); }     // ✅
if ({}) { console.log("Ez is lefut!"); }  // ✅
```
Ezért fontos, hogy ne az `if (obj)` alapján döntsük el,
hogy például egy tömb "üres-e" – helyette `array.length === 0`
vagy `Object.keys(obj).length === 0` ellenőrzés szükséges.



