import quibble from "quibble";

await quibble.esm("./a-module.js", { life: 41 }, "replacement universe");

console.log(`expected: 41, replacement universe`);
await import("./uses-a-module.js");
