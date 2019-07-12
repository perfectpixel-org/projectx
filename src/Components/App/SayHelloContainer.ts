interface ISayHelloContainer {
  helloPhrase: string;
}

class SayHelloContainer implements ISayHelloContainer {
  public helloPhrase: string;
  constructor() {
    this.helloPhrase = "Hello World!";
  }
}

export default SayHelloContainer;
