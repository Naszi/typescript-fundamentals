# Primitive Types

## 1. **String**

**Mi ez?** Szöveges adatokat tároló típus. Mindig idézőjelek közé tesszük: `'`, `"`, vagy ``.

**Interjú kérdés:** Mi a különbség a " és a ' használata között a stringeknél JavaScript-ben?
*Válasz:* Funkcionálisan nincs különbség, csak stílusbeli – viszont a template literal (```) dinamikus beillesztést is támogat.

**Használata JS-ben és TS-ben:**

JavaScript:
```js
let name = "Anna"; // String
```

TypeScript:
```ts
let city: string = "Anna"; // String
```


## 2. **Number**

**Mi ez?** Egész és lebegőpontos számok.

**Interjú kérdés:** Hogyan kezeli a JavaScript a NaN-t (Not-a-Number)? *Válasz:*
`NaN` is a number type, de logikai összehasonlításnál minden esetben `false` lesz, még `NaN === NaN` is!

**Használata JS-ben és TS-ben:**

JavaScript:
```js
let age = 30;       // egész szám
let price = 10.99;  // lebegőpontos
```

TypeScript:
```ts
let computer: number = 5;       // egész szám
let temperature: number = 22.5; // lebegőpontos
```

## 3. **Boolean**

**Mi ez?** Igazságérték: `true` vagy `false`.

**Interjú kérdés:** Mi számít "falsy" értéknek JS-ben? *Válasz:*
false, 0, "", null, undefined, NaN.

**Használat:**

JavaScript:
```js
let isOnline = true;
let isAdmin = false;
```

TypeScript:
```ts
let isLoggedIn: boolean = true;
```

## 4. **Null**

**Mi ez?** A tudatosan üres érték. Jelzi, hogy a változónak nincs értelmes értéke.

**Interjú kérdés:** Mi a különbség a null és az undefined között?
_Válasz:_ `null` szándékosan beállított értéktelenség, `undefined` pedig azt jelenti, hogy nem lett érték adva.

**Használat:**

JavaScript:
```js
let selectedItem = null;
```

TypeScript:
```ts
let data: string | null = null;
```

## 5. **Undefined**

**Mi ez?** Ha egy változó deklarálva van, de nincs érték hozzárendelve.

**Interjú kérdés:** Mi történik, ha egy nem létező property-t kérsz le egy objektumból?
_Válasz:_ undefined értéket kapsz vissza.

**Használat:**

JavaScript:
```js
let user;
console.log(user); // undefined
```

TypeScript:
```ts
let result: number | undefined = undefined;
```

## 6. **BigInt**

**Mi ez?** Nagy egész számokat tárol, amik nagyobbak mint `Number.MAX_SAFE_INTEGER`.

**Interjú kérdés:** Miért van szükség BigInt-re JS-ben?
_Válasz:_ A number típus nem tud pontosan reprezentálni `2⁵³`-nél nagyobb értékeket.

**Használat:**

JavaScript:
```js
const big = 1234567890123456789012345678901234567890n;
```

TypeScript:
```ts
let bigNumber: bigint = 123456789123456789n;
```

## 7. **Symbol**

**Mi ez?**Egyedi és megismételhetetlen értékek. Főként objektum kulcsokhoz használjuk.

**Interjú kérdés:** Mire használható a Symbol JS-ben?
_Válasz:_ Egyedi azonosítókra, elkerülve a kulcsütközést objektumoknál – pl. belső meta-adatok tárolására.

**Használat:**

JavaScript:
```js
const id = Symbol('id');
const user = {
    [id]: 123
};
```

TypeScript:
```ts
let uniqueId: symbol = Symbol("uid");
```

## Összegzés (táblázatban)

| Típus |	Leírás	| Példa | 	TS típus  |
|-------|----------|-------|------------|
| String	| Szöveges adat |	`hello`	| string     |
| Number |	Szám (int/float) |	`42`, `3.14` | 	number    |
| Boolean |	Logikai érték |	`true`, `false`	| boolean    |
| Null	| Tudatos üres érték |	`null` | 	null      |
| Undefined	| Nincs hozzárendelt érték |	`undefined`	| undefined  |
| BigInt |	Nagyon nagy egész szám	| `9007199254740991n` |	bigint |
| Symbol |	Egyedi, nem ütköző érték |	`Symbol('key')` |	symbol |