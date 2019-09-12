import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    destroyItem(chefObj) {
      chefObj.destroyRecord();
      this.transitionToRoute('chefs')
    },
  }
});
