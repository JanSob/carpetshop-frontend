import { Carpet } from './carpet';

describe('Carpet', () => {
  it('should create an instance', () => {
    expect(new Carpet(1, 'Iran', 'Nain', 300, 200, '', 300)).toBeTruthy();
  });
});
