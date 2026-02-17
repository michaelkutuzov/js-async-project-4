const { hasFlag, getParamValue } = require('../index');

describe('hasFlag', () => {
  it('Вернёт ИСТИНУ, если флаг есть в аргументах', () => {
    const res = hasFlag(['-a', '-b'], '-b');

    expect(res).toBe(true);
  });

  it('Вернёт ЛОЖЬ, если флага нет в аргументах', () => {
    const res = hasFlag((['-a', '-b'], '-c'));

    expect(res).toBe(false);
  });

  it('Вернёт ИСТИНУ, если хотя бы один флаг есть в аргументах', () => {
    const res = hasFlag(['-a', '-b'], ['-b', '--bravo']);

    expect(res).toBe(true);
  });

  it('Вернёт ЛОЖЬ, если ни одного флага нет в аргументах', () => {
    const res = hasFlag(['-a', '-b'], ['-c', '--charlie']);

    expect(res).toBe(false);
  });
});

describe('getParamValue', () => {
  it('Вернёт значение параметра, если он есть', () => {
    const res = getParamValue(['-a', 'alpha', '-b', 'bravo'], '-b');

    expect(res).toBe('bravo');
  });

  it('Вернёт null, если параметра нет', () => {
    const res = getParamValue(['-a', 'alpha', '-b', 'bravo'], '-c');

    expect(res).toBe(null);
  });

  it('Вернёт null, если у параметра нет значения', () => {
    const res = getParamValue(['-a', 'alpha', '-b'], '-b');

    expect(res).toBe(null);
  });
});
