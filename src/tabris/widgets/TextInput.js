import Widget from '../Widget';

export default Widget.extend({
  _name: 'TextInput',
  _type: 'tabris.TextInput',
  _events: {
    focus: {
      trigger() {
        this.trigger('focus', this);
      }
    },
    blur:  {
      trigger() {
        this.trigger('blur', this);
      }
    },
    accept: {
      trigger(event) {
        this.trigger('accept', this, event.text, {});
      }
    },
    input: {
      alias: 'change:text',
      trigger(event) {
        this._triggerChangeEvent('text', event.text);
        this.trigger('input', this, event.text, {});
      }
    }
  },
  _properties: {
    type: ['choice', ['default', 'password', 'search', 'multiline']],
    text: {type: 'string', nocache: true},
    message: {type: 'string', default: ''},
    editable: {type: 'boolean', default: true},
    keepFocus: {type: 'boolean'},
    alignment: {type: ['choice', ['left', 'center', 'right']], default: 'left'},
    autoCorrect: {type: 'boolean', default: false},
    autoCapitalize: {type: 'boolean', default: false},
    keyboard: {
      type: ['choice', ['ascii', 'decimal', 'email', 'number', 'numbersAndPunctuation', 'phone', 'url', 'default']],
      default: 'default'
    },
    focused: {type: 'boolean', nocache: true},
    fillColor: {type: 'color'},
    borderColor: {type: 'color'}
  }
});
