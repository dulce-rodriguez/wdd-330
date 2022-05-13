//example of how it normally is creating objects
const movieOne = {
    name: 'Harry',
    id: 01,
    play() {
        return `playing movie... ${this.name}`;
    }    

}

class Movies {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    play() {
        return `playing movie... ${this.name}`
    }
}

class Series extends Movies{
    constructor(name,id,chap) {
        super(name,id);
        this.chap = chap;
    }
    playChapter() {
        return `playing chapter ${this.chap}... ${this.name}`
    }
}

const movieone = new Movies('Harry',1);
const movietwo = new Movies('Spiderman',2);
const seriesone = new Series('Dark', 3, 10)

console.log(movieone.play());
console.log(movietwo.play());
console.log(seriesone.playChapter());