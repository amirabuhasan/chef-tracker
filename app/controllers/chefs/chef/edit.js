import Controller from "@ember/controller";
import { set } from "@ember/object";
import restaurant from "../../../models/restaurant";

export default Controller.extend({
  actions: {
    selectRestaurant(selection) {
      let chef = this.get("model.chef");
      chef.get("restaurant").then(restaurant => {
        chef.set("restaurant", selection);
        selection.save();
        restaurant.save();
      });
    },
    save() {
      const model = this.get("model");
      const { wentToCulinarySchool } = model;

      if (!wentToCulinarySchool) {
        set(model, "culinarySchoolName", "");
      }
      this.get("model.chef").save();
      this.transitionToRoute("chefs.chef", this.get("model.chef.id"));
    }
  }
});
