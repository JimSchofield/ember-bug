import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class GetDadJokeComponent extends Component {
  @tracked joke;
  @tracked error;

  constructor() {
    super(...arguments);

    this.fetchDadJoke();
  }

  async fetchDadJoke() {
    try {
      const res = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          accept: 'application/json',
          'User-Agent': 'ember-demonstration',
        },
      });

      const data = await res.json();

      this.joke = data.joke;
    } catch (error) {
      this.error = error;
    }
  }
}
