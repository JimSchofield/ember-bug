import Component from '@glimmer/component';
import { task, timeout } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';
import { useTask } from 'ember-resources';

export default class GetDadJokeComponent extends Component {
  @tracked data;

  word = useTask(this, this.getRandomWord);

  @task
  *getRandomWord() {
    yield timeout(2000);

    const response = yield fetch(
      'https://random-words-api.herokuapp.com/w?n=1'
    );

    const data = yield response.json();

    return data[0];
  }
}
