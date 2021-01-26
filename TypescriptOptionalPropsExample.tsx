type Type = "A" | "B";
interface PropsA<Type> {
  type: Type;
  a_b: number;
  hoho: number;
}
interface PropsB<Type> {
  type: Type;
  a_b: string;
  haha: string;
}
type MainProps<Type> = Type extends "A" ? PropsA<Type> : Type extends "B" ? PropsB<Type> : never;

function Hehe<T extends Type>(props: MainProps<T>) {
  return null;
}
