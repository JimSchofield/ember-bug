import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export const statusEnum = {
  default: 'default',
  fetching: 'fetching',
  error: 'error',
  finished: 'finished',
};

export default class DadJokeService extends Service {
  @tracked joke;
  @tracked status = statusEnum.default;

  async fetchDadJoke() {
    this.status = statusEnum.fetching;

    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        accept: 'application/json',
        'User-Agent': 'ember-demonstration',
      },
    });

    const data = await response.json();

    this.joke = data.joke;

    this.status = statusEnum.finished;
  }
}
