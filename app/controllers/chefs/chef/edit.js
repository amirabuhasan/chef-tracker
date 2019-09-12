import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  actions: {
    save() {
      const model = this.get('model');
      const { wentToCulinarySchool } = model;

      if (!wentToCulinarySchool) {
        set(model, 'culinarySchoolName', '');
      }
      this.get('model').save();
      this.transitionToRoute('chefs.chef', this.get('model.id'));
    }
  }
});
