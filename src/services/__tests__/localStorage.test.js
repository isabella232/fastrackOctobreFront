import { setToken } from '../../Helper/Partner/localStorage';
import { getToken } from '../../Helper/Partner/localStorage';

describe('localStorage', () => {
  it('should be equal', () => {
    setToken('test');
    expect(getToken()).toBe('test');
  });
});
