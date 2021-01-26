type Type = "A" | "B";
interface PropsA<T extends Type> {
  type: T;
  a_b: number;
  hoho: number;
  haha?:undefined
}
interface PropsB<T extends Type> {
  type: T;
  a_b: string;
  haha: string;
  hoho?:undefined
}
type MainProps<T extends Type> = T extends "A" ? PropsA<T> : T extends "B" ? PropsB<Type> : never;

function isTypeAPredicate<T extends Type>(
  props: PropsA<T> | PropsB<T>,
): props is PropsA<T> {
  return (props as PropsA<T>).type === "A";
}

function Hehe<T extends Type>(props: MainProps<T>) {
  if(isTypeAPredicate(props)) {
    console.log(props.hoho)
  }
  console.log(props.hoho)
  return null;
}
