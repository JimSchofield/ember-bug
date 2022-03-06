import Component from '@glimmer/component';

export default class GetDadJokeComponent extends Component {
  constructor() {
    super(...arguments);

    this.args.doFetch(this.dadJokePromise());
  }

  dadJokePromise() {
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        accept: 'application/json',
        'User-Agent': 'ember-demonstration',
      },
    });
  }
}
