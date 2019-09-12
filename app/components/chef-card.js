import Component from '@ember/component';

export default Component.extend({
  isOpen: false,
  actions: {
    toggleOpen() {
      this.toggleProperty('isOpen');
    },
    toggleEnter(chefObj) {
      chefObj.toggleProperty('isAvailable')
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
