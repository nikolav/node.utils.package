const has_ = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (node: any, key: string) => has_(Object(node), key);