import Component from '@glimmer/component';
import { trackedFunction } from 'ember-resources';

export default class GetDadJokeComponent extends Component {
  joke = trackedFunction(this, async () => {
    const res = await fetch(
      `https://icanhazdadjoke.com/search?term=${this.args.searchText}`,
      {
        headers: {
          accept: 'application/json',
          'User-Agent': 'ember-demonstration',
        },
      }
    );

    const data = await res.json();

    return data?.results[0].joke ?? 'No joke found!';
  });
}
