import { helper } from '@ember/component/helper';

export default helper(function not([expr]) {
  return !expr;
});
