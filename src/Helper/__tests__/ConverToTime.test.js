import ConvertToTime from '../ConvertToTime';

describe('ConvertToTime', () => {
  it('should calcul a correct number', () => {
    const number = 15;
    expect(ConvertToTime(number)).toStrictEqual({ months: 3, years: 1 });
  });
});
