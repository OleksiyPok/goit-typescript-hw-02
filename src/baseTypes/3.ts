// => ВИПРАВИВ у коді (як написано у завданні)

let some: string;
some = "Text";
let str: string;
str = some;

export {};

// ---------------------------------------
// => ДОДАВ необхідний код (може це малося на увазі у завданні)

let some1: unknown;
some1 = "Text";
let str1: string;

if (typeof some1 === "string") {
  str1 = some1;
} else {
  console.log('"some1" not a "string"');
}

export {};
