test('nonLayeredTidyTreeLayout exists', () => {
    const { layout, Tree } = require('../lib/index');
    expect(layout).toBeTruthy();
    expect(Tree).toBeTruthy();
});
