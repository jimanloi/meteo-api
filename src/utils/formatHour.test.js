import formatHour from './formatHour';

describe('isEven', () => {
    test('00:00', () => {
        expect(formatHour('2025-05-12T00:00')).toBe('00:00');
    });

    test('01:00', () => {
        expect(formatHour('2025-05-12T01:00')).toBe('01:00');
    });
});
