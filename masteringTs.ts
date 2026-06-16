// Basics
const username: string = "james";
const age: number = 23;
const isLearningTS: boolean = true;

const skills: string[] = ["draw", "paint", "sketch"];
const grades: number[] = [99, 97, 100];
const mixedData: (string | number)[] = ["paint", 89, "draw"];

// Types
type User = {
  name: string;
  age: number;
  email: string;
  isAdmin?: boolean;
};

const userOne: User = {
  name: "test",
  age: 23,
  email: "test@gmail.com",
  isAdmin: true,
};

const userTwo: User = {
  name: "test",
  age: 23,
  email: "test@gmail.com",
};

// Functions
const name = "jj";
const x = 10;
const y = 10;
const age = 23;
const message = "Hello World";

const greet = (name: string): string => {
  return name;
};

const add = (x: number, y: number): number => {
  return x + y;
};

const isAdult = (age: number): boolean => {
  const isAgeAdult = age > 18 ? true : false;
  return isAgeAdult;
};

const logMessage = (message: string): void => {
  console.log("Message: ", message);
};

// Union Types
type ProductId = string | number;

const productIdOne: ProductId = "21";
const productIdTWO: ProductId = 21;

const formatProductId = (id: ProductId) => {
  console.log("Product Id: ", id);
};

formatProductId(productIdOne);
formatProductId(productIdTWO);

const processInput = (input: string | number): string => {
  if (typeof input === "string") return input.toUpperCase();
  if (typeof input === "number") return `Number: ${input}`;
};

processInput("Test");
processInput(23);

// Types and Interface
interface UserInterface {
  name: string;
  age: number;
}

interface UseWithEmail extends UserInterface {
  email: string;
}

type UserType = {
  name: string;
  age: number;
};

type UserWithEmailType = UserType & {
  email: string;
};

// Generic types
const wrapValue = <T>(value: T): T[] => {
  const newValue: T[] = [];
  newValue.push(value);
  return newValue;
};

wrapValue<string>("Hi");
wrapValue<number>(10);

const wrapObject = <T>(value: T): { data: T; success: boolean } => {
  return { data: value, success: true };
};

wrapObject<string>("james");
wrapObject<{ data: string }>({ data: "hello" });
