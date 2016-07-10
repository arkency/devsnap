import Ember from 'ember';
import getRandomInt from '../utils/get-random-int';

export default Ember.Component.extend({
  style: Ember.computed(function() {
    const hue = getRandomInt(0, 360);
    return Ember.String.htmlSafe(`filter: hue-rotate(${hue}deg);-webkit-filter: hue-rotate(${hue}deg);`);
  })
});
