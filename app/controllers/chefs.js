import Controller from '@ember/controller';
import { set, computed } from '@ember/object';

export default Controller.extend({
  chef: 'Chef',
  newItem: null,
  availableItems: computed.filterBy('model', 'isAvailable'),
  allStudents: computed.mapBy('model', 'numberOfStudents'),
  numberOfStudents: computed.sum('allStudents'),
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  actions: {
    handleEnter: (chefObj) => {
      set(chefObj, 'isAvailable', true);
      chefObj.save();
    },
    handleExit: (chefObj) => {
      set(chefObj, 'isAvailable', false);
      chefObj.save();
    },
    saveNewItem() {
      this.store.createRecord('chef', {
        name: this.get('newItem'),
        isAvailable: false
      }).save();
      this.set('newItem', '');
    },
    destroyItem(chefObj) {
      chefObj.destroyRecord();
    },
    addStudents(chefObj) {
      chefObj.set('numberOfStudents', chefObj.get('numberOfStudents') + 1);
      chefObj.save();
    },
    reduceStudents(chefObj) {
      if (chefObj.numberOfStudents) {
        chefObj.set('numberOfStudents', chefObj.get('numberOfStudents') - 1);
        chefObj.save();
      }
    }
  }
});
