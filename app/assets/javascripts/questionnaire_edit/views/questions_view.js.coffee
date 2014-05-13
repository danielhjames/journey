#= require ./sortable_view
#= require ./question_view

QuestionnaireEdit.QuestionsView = QuestionnaireEdit.SortableView.extend
  classNames: ["questions"]
  itemViewClass: Ember.View.extend
    template: Ember.Handlebars.compile('{{render "question" view.content}}')
  
  rezebrify: ->
    i = 1
    @get('content').forEach (item, index) ->
      i = 1 if item.get('resetsCycle')

      if item.get('ignoresCycle')
        item.set('cardinality', null)
      else
        item.set('cardinality', ['even', 'odd'][i % 2])      
        i++
  
  rezebrifyObserver: ( ->
    Ember.run.debounce this, this.rezebrify, 50
  ).observes('content.@each.position', 'content.@each.type')