interface Container {
    helloPhrase: string;
}

class SayHelloContainer implements Container {
    public helloPhrase: string;
    public constructor() {
        this.helloPhrase = "Hello World!";
    }
}

export default SayHelloContainer;
