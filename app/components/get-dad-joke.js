import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class GetDadJokeComponent extends Component {
  @service('dad-joke') dadJokeService;

  constructor() {
    super(...arguments);

    this.dadJokeService.fetchDadJoke();
  }

  get isLoading() {
    return this.dadJokeService.status === 'fetching';
  }

  get isFinished() {
    return this.dadJokeService.status === 'finished';
  }

  get hasError() {
    return this.dadJokeService.status === 'error';
  }

  get joke() {
    return this.dadJokeService.joke;
  }

  @action
  getAnotherJoke() {
    this.dadJokeService.fetchDadJoke();
  }
}
