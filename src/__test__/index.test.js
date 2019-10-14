import * as QasirComponents from '..';

describe('Qasir component', () => {
  it('Should Exports all components', () => {
    expect(QasirComponents).toMatchSnapshot();
  });
});
