// Generated by CoffeeScript 1.10.0
import Ember from 'ember';
var QuestionController;

QuestionController = Ember.ObjectController.extend({
  saveInPlace: (function() {
    return Ember.run.debounce(this.get('model'), 'save', 300);
  }).observes('defaultAnswer', 'min', 'max', 'step', 'layout', 'radioLayout', 'required'),
  defaultAnswerBoolean: (function(key, value, oldValue) {
    var defaultAnswer;
    if (arguments.length === 1) {
      defaultAnswer = this.get('defaultAnswer');
      return defaultAnswer !== null && defaultAnswer !== '';
    } else {
      return this.set('defaultAnswer', (value ? 'true' : null));
    }
  }).property('defaultAnswer'),
  isLeftLayout: (function() {
    return this.get('layout') === 'left';
  }).property('layout'),
  isRadio: (function() {
    return this.get('type') === 'Questions::RadioField';
  }).property('type'),
  isVerticalRadioLayout: (function() {
    return this.get('radioLayout') === 'vertical';
  }).property('radioLayout'),
  resetsCycle: (function() {
    return this.get('type') === "Questions::Divider";
  }).property('type'),
  ignoresCycle: (function() {
    var ref;
    return (ref = this.get('type')) === "Questions::Heading" || ref === "Questions::Label";
  }).property('type'),
  actions: {
    eraseDefaultAnswer: function() {
      return this.set('content.defaultAnswer', null);
    },
    setLayout: function(layout) {
      return this.set('content.layout', layout);
    },
    setRadioLayout: function(radioLayout) {
      return this.set('content.radioLayout', radioLayout);
    },
    toggleRequired: function() {
      return this.set('required', !this.get('required'));
    }
  }
});

export default QuestionController;