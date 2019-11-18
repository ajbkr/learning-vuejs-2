var data = {
  items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }],
  newItem: '',
  title: 'My Shopping List'
}

// add item component
Vue.component('add-item-component', {
  template: '#add-item-template',
  /*
  data: function () {
    return {
      newItem: ''
    }
  }
  */
  props: ['items', 'newItem']
})

// item component
Vue.component('item-component', {
  template: '#item-template',
  props: ['item']
})

// items component
Vue.component('items-component', {
  template: '#items-template',
  props: ['items']
})

// chamge title component
Vue.component('change-title-component', {
  template: '#change-title-template',
  props: ['value'],
  methods: {
    onInput: function (event) {
      this.$emit('input', event.target.value)
    }
  }
})

new Vue({
  el: '#app',
  data: data,
  methods: {
    addItem: function () {
      var text;

      text = this.newItem.trim()
      if (text) {
        this.items.push({
          text: text,
          checked: false
        });
        this.newItem = ''
      }
    }
  }
})
