import { TPrimitive } from '../../types';

const has_ = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default <TObject = any>(node: TObject, key: TPrimitive): boolean =>
  has_(Object(node), key);
