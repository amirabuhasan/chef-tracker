import Controller from '@ember/controller';
import { set, computed } from '@ember/object';

export default Controller.extend({
  chef: 'Chef',
  newItem: null,
  availableItems: computed.filterBy('model', 'isAvailable'),
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
    }
  }
});
