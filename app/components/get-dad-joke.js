import Component from '@glimmer/component';
import FetchHandler from '../util/fetch-handler';

export default class GetDadJokeComponent extends Component {
  apiHandler = new FetchHandler(
    `https://icanhazdadjoke.com/search?term=${this.args.searchText}`,
    {
      headers: {
        accept: 'application/json',
        'User-Agent': 'ember-demonstration',
      },
    },
    true
  );

  get joke() {
    // for the example, just get the first result :D
    return this.apiHandler.data
      ? this.apiHandler.data.results[0].joke
      : undefined;
  }

  get error() {
    return this.apiHandler ? this.apiHandler.error : undefined;
  }
}
