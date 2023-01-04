abstract class Page {
  protected mainEl: HTMLElement;
  static htmlTemplate: string;

  constructor(className: string) {
    this.mainEl = document.createElement('main');
    this.mainEl.className = className;
  }

  protected createBlock(text: string) {
    const block = document.createElement('div');
    block.className = 'container';
    block.innerHTML = text;
    return block;
  }

  protected appendBlock(item: HTMLElement) {
    this.mainEl.append(item);
  }

  render() {
    return this.mainEl;
  }
}

export default Page;
