import { PRIORITY_VALUES, PRIORITY_DEFAULT, PRIORITY_COLORS } from '../priorityConstants';

describe('priority constants', () => {
  test('uses expected values and default', () => {
    expect(PRIORITY_VALUES).toBeDefined();
    expect(PRIORITY_DEFAULT).toBeDefined();
    expect(PRIORITY_VALUES).toEqual(['P1', 'P2', 'P3']);
    expect(PRIORITY_DEFAULT).toBe('P3');
  });

  test('uses sketch-mandated selected and unselected colors', () => {
    expect(PRIORITY_COLORS.selected.backgroundColor).toContain('#07F2E6');
    expect(PRIORITY_COLORS.selected.color).toContain('#212121');
    expect(PRIORITY_COLORS.unselected.backgroundColor).toContain('#7A7A7A');
    expect(PRIORITY_COLORS.unselected.color).toContain('#ffffff');
    expect(PRIORITY_COLORS.unselectedHover.backgroundColor).toContain('#9A9A9A');
  });
});
