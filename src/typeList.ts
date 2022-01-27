/* eslint-disable @typescript-eslint/no-unused-vars */

/** TypeListの基本の型 */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "A";

// Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple ←あんまり使わないかも
let tuple: [number, string] = [0, "A"];

// any なんでも入る型　なるべく使わない
let any1: any = false;

// void 返却値なしの関数 ": void"を書かなくてもOK
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined 何も設定されていない
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAAA" };
