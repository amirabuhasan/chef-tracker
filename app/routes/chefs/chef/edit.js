import Route from "@ember/routing/route";
import { hash } from "rsvp";

export default Route.extend({
  model(params) {
    return hash({
      chef: this.store.findRecord("chef", params.chef_id),
      restaurants: this.store.findAll("restaurant")
    });
  }
});
