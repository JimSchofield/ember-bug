import { tracked } from '@glimmer/tracking';

export default class FetchHandle {
  @tracked data;
  @tracked error;

  constructor(path, config, immediate = false) {
    this.path = path;
    this.config = config;

    if (immediate) {
      this.fetch();
    }
  }

  async fetch() {
    try {
      const response = await fetch(this.path, this.config);

      const data = await response.json();

      this.data = data;
    } catch (error) {
      this.error = error;
    }
  }
}
