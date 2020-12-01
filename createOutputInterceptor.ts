export function createOutputInterceptor<
  T extends (...args: any) => any,
  A extends (arg: Unwrap<T>) => any
>(func: T, cb: A) {
  return async (...args: any): Promise<Unwrap<T>> => {
    const res = await func(...args);
    return cb(res);
  };
}
