import DS from "ember-data";
import { computed }  from '@ember/object';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  name: attr("string"),
  chefs: hasMany("chef"),
  healthRatings: computed.mapBy('chefs', 'health'),
  maxHealth: computed.max('healthRatings'),
  totalHealth: computed.sum('healthRatings'),
  averageHealth: computed(function() {
    if (this.get('chefs.length') === 0) {
      return 0
    } else {
      return this.get('totalHealth')/this.get('chefs').length
    }
  }),
  fameRatings: computed.mapBy('chefs', 'fame'),
  maxFame: computed.max('fameRatings'),
  totalFame: computed.sum('fameRatings'),
  averageFame: computed(function() {
    if (this.get('chefs.length') === 0) {
      return 0
    } else {
      return this.get('totalFame')/this.get('chefs').length
    }
  })
});
