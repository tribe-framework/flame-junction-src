import Component from '@glimmer/component';
import { service } from '@ember/service';
import { Modal } from 'bootstrap';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TypesBlueprintConsultationModalComponent extends Component {
	@service types;


  @action
  initModel() {
  	console.log(this.types.json.webapp);
    let m = new Modal(document.getElementById('blueprintConsultationModal'), {});
    m.show();
  }
}
