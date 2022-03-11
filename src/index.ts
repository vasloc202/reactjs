type Product = {
    id: number,
    name: string,
    price: number
}
type Product2 = {
    id: string,
    name: string,
    status: boolean
}
type MergeType = Product | Product2;

const firstName:string = "Abc";
const firstNumber:number = 123;
const trueFalse:boolean = true;
const stringArr: string[] = ["a","b","c"];
const objArr: MergeType[] = [
    { id: 1, name: "Abc", price: 12312312 },
    { id: "123", name: "Abc", status: true }
];

function sumNumber(a:number,b:number) {
    return (a*b)-(a+b);
}
console.log(sumNumber(3,4));
 