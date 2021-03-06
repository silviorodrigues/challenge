import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wc-messages-list', 'Integration | Component | wc messages list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{wc-messages-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#wc-messages-list}}
      template block text
    {{/wc-messages-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
