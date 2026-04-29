import { CommandTranslatorBase } from '../src/translators/base';

describe('CommandTranslatorBase', () => {
  it('should instantiate with a mock page', () => {
    const mockPage = {} as any;
    const translator = new CommandTranslatorBase(mockPage);
    expect(translator).toBeDefined();
  });
});
