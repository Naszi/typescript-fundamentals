1. install [NodeJS](https://nodejs.org/en)
  verzió ellenörzése `node --version` and `npm --version`
2. install VS Code, extension: Better Commets (Aaron Bond), Color Picker (anseki), Error Lens (Alexander), indent-rainbow (oderwat), Material Icon Theme (Philipp Kief), Monokai Pro, Prettier - Code formatter (Prettier), TS/JS postfix completion (Ireneusz Patalas), 
3. install globali typescript: `npm install -g typescript` and check version: `tsc --version`
4. create TS Hello World program end compile to JS (`tsc index.ts`) end run JS file (`node index.js`) (`npx tsc index.ts`)
5. create tsconfig.json (`tsc --init`) end compiler semple command (`tsc`) (`tsc -w`) -w: watching
6. create node js project (`npm init`) entry point: index.ts
7. `npm i -D typescript@5.8.3` latest version, local version
8. added package.json file scripts: `"start:dev ": "tsc -w"`
9. npm run start_dev

## **TypeScript vs. JavaScript**
|Feature                      |JavaScript |TypeScript  |
|How are types bound          |Dynamically|Statically  |
|Type automatically converted?|Yes        |No (at Time)|
|When are types checked?      |Runtime    |Compile Time|
|When errors surface?         |Runtime    |Compile Time|

