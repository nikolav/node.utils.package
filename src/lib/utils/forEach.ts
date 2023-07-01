const forEach_ = Function.prototype.call.bind(Array.prototype.forEach);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface IList<TValue = any> {
  length: number;
  [index: number]: TValue;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ICallback<TNode = any, TRes = any> {
  (node: TNode, index: number, list: TNode[]): TRes;
}

export default <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TForEachListValue = any,
  TForEachCallback = ICallback<TForEachListValue>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TForEachContext = any
>(
  list: IList<TForEachListValue>,
  callback: TForEachCallback,
  context: TForEachContext = null
) => forEach_(list, callback, context);
