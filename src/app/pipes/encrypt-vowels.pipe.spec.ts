import { EncryptVowelsPipe } from './encrypt-vowels.pipe';

describe('EncryptVowelsPipe', () => {
  it('create an instance', () => {
    const pipe = new EncryptVowelsPipe();
    expect(pipe).toBeTruthy();
  });
});
