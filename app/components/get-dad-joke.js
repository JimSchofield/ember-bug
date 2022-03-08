import Component from '@glimmer/component';
import { trackedFunction } from 'ember-resources';
import { tracked } from '@glimmer/tracking';

export default class GetDadJokeComponent extends Component {
  @tracked error;

  joke = trackedFunction(this, async () => {
    const res = await fetch(
      `https://icanhazdadjoke.com/search?term=${this.randomWord.value}`,
      {
        headers: {
          accept: 'application/json',
          'User-Agent': 'ember-demonstration',
        },
      }
    );

    const data = await res.json();

    if (data.results.length > 0) {
      return data.results[0].joke;
    } else {
      return 'No joke found!';
    }
  });

  randomWord = trackedFunction(this, async () => {
    const res = await fetch(`https://random-words-api.herokuapp.com/w?n=1`);

    const data = await res.json();

    return data[0];
  });
}
