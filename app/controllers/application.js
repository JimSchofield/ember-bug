import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked searchText = 'ape';

  @action
  updateText(event) {
    this.searchText = event.target.value;
  }
}
