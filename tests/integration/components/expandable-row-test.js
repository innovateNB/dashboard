import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('expandable-row', 'Integration | Component | expandable row', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{expandable-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#expandable-row}}
      template block text
    {{/expandable-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
