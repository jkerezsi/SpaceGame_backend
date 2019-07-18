const test = require('tape');
const { checkType } = require('../../../src/services/building-services/checkBuildingType_service');

test('check if buildingtype is correct', (t) => {
  checkType('', '98q769832764')
    .catch((error) => {
      t.equals(error.message, ('Type is required.'));
    });

  checkType('mine', '')
    .catch((error) => {
      t.equals(error.message, ('Token is required.'));
    });

  checkType('blubli', '87619782639187')
    .catch((error) => {
      t.equals(error.message, ('Wrong type.'));
    });


  t.end();
});


test('check if token exists', (t) => {
  checkType('mine', '123')
    .then((i) => {
      t.equals(i, undefined);
    });

  checkType('farm', '123')
    .then((i) => {
      t.equals(i, undefined);
    });

  t.end();
});
