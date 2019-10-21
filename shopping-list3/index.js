/* global Vue */
var data = {
  items: [{
    checked: true,
    text: 'Bananas'
  }, {
    checked: false,
    text: 'Apples'
  }],
  newItem: '',
  title: 'My Shopping List'
}

/**
 * Declaring components
 */
var ItemsComponent = Vue.extend({
  data: function () {
    return data
  },
  template: [
    '<ul>',
    '  <li v-for="item in items"',
    '    :class="{ \'removed\': item.checked }">',
    '    <div class="checkbox">',
    '      <label>',
    '        <input type="checkbox"',
    '          v-model="item.checked"> {{ item.text }}',
    '      </label>',
    '    </div>',
    '  </li>',
    '</ul>'
  ].join('\n')
})

var ChangeTitleComponent = Vue.extend({
  data: function () {
    return data
  },
  template: '<input v-model="title" />'
})

var AddItemComponent = Vue.extend({
  data: function () {
    return data
  },
  methods: {
    addItem: function () {
      var text = this.newItem.trim()

      if (text) {
        this.items.push({
          text,
          checked: false
        })
        this.newItem = ''
      }
    }
  },
  template: [
    '<div class="input-group">',
    '  <input v-model="newItem" @keyup.enter="addItem"',
    '    placeholder="add shopping list item" type="text"',
    '    class="form-control">',
    '  <span class="input-group-btn">',
    '    <button v-on:click="addItem" class="btn btn-default"',
    '      type="button">Add!</button>',
    '  </span>',
    '</div>'
  ].join('\n')
})

/**
 * Registering components
 */
Vue.component('items-component', ItemsComponent)
Vue.component('change-title-component', ChangeTitleComponent)
Vue.component('add-item-component', AddItemComponent)

Vue.config.devtools = true

/**
 * Instantiating a Vue instance
 */
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  data
})
