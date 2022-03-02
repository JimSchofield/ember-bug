import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class GetDadJokeComponent extends Component {
  @service('dad-joke') dadJokeService;

  @tracked joke;

  constructor() {
    super(...arguments);

    this.dadJokeService.fetchDadJoke().then((joke) => (this.joke = joke));
  }
}
