const returnString = (msg: string): void => {
  console.log("Message: ", msg);
};

const funcThatAcceptsFunction = (cb: (msg: string) => void) => {
  cb("Hello");
};

funcThatAcceptsFunction(returnString);

type TupleArray = [string, number];

const returnArray = (arr: TupleArray) => {
  console.log("returnArrayResult: ", arr);
};

const funcThatAcceptsArray = (fn: (arr: TupleArray) => void) => {
  const arrays: TupleArray = ["hello", 10];
  fn(arrays);
};

funcThatAcceptsArray(returnArray);
