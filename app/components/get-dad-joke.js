import Component from '@glimmer/component';
import { task } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';

async function getRandomWord() {
  const response = await fetch('https://random-words-api.herokuapp.com/w?n=1');

  const data = await response.json();

  await new Promise((res) => {
    setTimeout(() => res(), 2000);
  });

  if (Math.random() < 0.5) {
    return data[0];
  } else {
    return Promise.reject('Your request is denied!');
  }
}

export default class GetDadJokeComponent extends Component {
  @tracked data;

  constructor() {
    super(...arguments);

    this.getRandomWord.perform();
  }

  @task
  *getRandomWord() {
    this.data = yield getRandomWord();
  }
}
