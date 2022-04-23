import { InfoPanelComponent } from './info-panel.component';

describe('InfoPanelComponent', () => {
  it('compute time string', () => {

    const expectedString = '2 hr, 3 m, 5 s.';

    const resultString = InfoPanelComponent.computeTimeStr(
      1000 * (5 + 60 * (3 + 60 * 2))
    );

    expect(expectedString).toBe(resultString);
  });
});
