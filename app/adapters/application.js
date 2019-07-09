// app/adapters/application.js
import FirestoreAdapter from 'emberfire/adapters/firestore';

export default FirestoreAdapter.extend({
  enablePersistence: true,
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  persistenceSettings: { synchronizeTabs: true }
});
