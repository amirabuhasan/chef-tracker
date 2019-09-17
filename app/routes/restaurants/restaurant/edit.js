import Route from '@ember/routing/route';
import { hash } from "rsvp";

export default Route.extend({
    model(params) {
        return hash({
            chefs: this.store.findAll('chef'),
            restaurant: this.store.findRecord('restaurant', params.restaurant_id) 
        })
    }
});
