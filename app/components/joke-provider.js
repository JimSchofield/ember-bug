import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class JokeProviderComponent extends Component {
  @tracked data;
  @tracked error;

  doFetch = this._doFetch.bind(this);

  async _doFetch(promise) {
    try {
      const response = await promise;

      const data = await response.json();

      this.data = data;
    } catch (error) {
      this.error = error;
    }
  }
}
