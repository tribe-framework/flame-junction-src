import { module, test } from 'qunit';
import { setupRenderingTest } from 'junction/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | interfaces/new-modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Interfaces::NewModal />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Interfaces::NewModal>
        template block text
      </Interfaces::NewModal>
    `);

    assert.dom().hasText('template block text');
  });
});
