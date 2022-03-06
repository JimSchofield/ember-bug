import Component from '@glimmer/component';
import FetchHandler from '../util/fetch-handler';

export default class GetDadJokeComponent extends Component {
  apiHandler = new FetchHandler(
    'https://icanhazdadjoke.com/',
    {
      headers: {
        accept: 'application/json',
        'User-Agent': 'ember-demonstration',
      },
    },
    true
  );

  get joke() {
    return this.apiHandler.data ? this.apiHandler.data.joke : undefined;
  }

  get error() {
    return this.apiHandler ? this.apiHandler.error : undefined;
  }
}
