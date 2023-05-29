export type Pick<T, K extends keyof T> = {
    [key in K]: T[key]
}
interface A {
    a: number;
    b: boolean;
    c: string;
}
type d = Pick<A, 'a' | 'b'>;

// d 的类型是
// {
//     a : number;
//     b: boolean;
// }

type Exclude<T, K> = T extends K ? never : T
type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }

type Partial<T> = {
    [k in keyof T]?: T[k]
};