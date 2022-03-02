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

  async fetchDadJoke(id) {
    // await Promise.resolve();

    if (this.status !== statusEnum.fetching) {
      this.status = statusEnum.fetching;
    }

    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        accept: 'application/json',
        'User-Agent': 'ember-demonstration',
      },
    });

    const data = await response.json();

    if (this.status !== statusEnum.finished) {
      this.status = statusEnum.finished;
    }

    return data.joke;
  }

  get isWorking() {
    return this.status === statusEnum.fetching;
  }

  get isFinished() {
    return this.status === statusEnum.finished;
  }

  get hasError() {
    return this.status === statusEnum.error;
  }
}
