const valuesToModify = [0, 1, false, 2, "", 3, null, undefined, "hello"];

type ArrayType = number | string | boolean | null | undefined;
type FinalType = number | string;

const removeFalsyValues = (arr: ArrayType[]): FinalType[] => {
  return arr.filter((value): value is FinalType => Boolean(value));
};

const result = removeFalsyValues(valuesToModify);
console.log(result);
