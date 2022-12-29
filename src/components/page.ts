abstract class Page {
  protected container: HTMLElement;
  static CodeBlock: string;

  constructor(className: string) {
    this.container = document.createElement('main');
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
