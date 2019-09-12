import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  chef: 'Chef',
  newItem: null,
  availableItems: computed.filterBy('model', 'isAvailable'),
  allStudents: computed.mapBy('model', 'numberOfStudents'),
  numberOfStudents: computed.sum('allStudents'),
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  actions: {
    saveNewItem() {
      this.store.createRecord('chef', {
        name: this.get('newItem'),
        isAvailable: false
      }).save();
      this.set('newItem', '');
    }
  }
});
