import {removeForbiddenChar} from './forbiden-chars';

describe('Function removeForbiddenChar()', () => {

  it('should remove forbidden chars', () => {
    const inputText = 'ttt \t ttt \n yyy';
    const outputText = 'ttt ttt yyy';
    expect(removeForbiddenChar(inputText)).toEqual(outputText);
  });

});
