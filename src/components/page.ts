abstract class Page {
  protected container: HTMLElement;
  static CodeBlock = {};

  constructor(className: string) {
    this.container = document.createElement('div');
    this.container.className = className;
  }

  protected createBlock(text: string) {
    const block = document.createElement('div');
    block.className = 'container';
    block.innerHTML = text;
    return block;
  }

  render() {
    return this.container;
  }
}

export default Page;
