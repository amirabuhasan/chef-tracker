import DS from "ember-data";
const { belongsTo, Model, attr } = DS;

export default Model.extend({
  name: attr("string"),
  isAvailable: attr("boolean"),
  numberOfStudents: attr("number", { defaultValue: 0 }),
  description: attr("string", { defaultValue: "no description available" }),
  wentToCulinarySchool: attr("boolean", { defaultValue: false }),
  culinarySchoolName: attr("string"),
  restaurant: belongsTo("restaurant")
});
