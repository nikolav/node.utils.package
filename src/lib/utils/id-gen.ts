let ID = 1;
//
export default () =>
  parseInt(String(Math.random() * Date.now() * ID++), 10).toString(36);
