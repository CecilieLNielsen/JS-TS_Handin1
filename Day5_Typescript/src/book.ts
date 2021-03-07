// OPGAVE 1A, 1D og 1E
interface IBook {
    _title: string;
    readonly _author: string;
    _published?: Date;
    _pages?: number;
}

//OPGAVE 1B
function logger(a: IBook) {
    console.log(`Book Description --- Title: ${a._title}, Author: ${a._author}, Published: ${a._published}, Pages: ${a._pages} ---`);
}

//OPGAVE 1C
//Ducktyping: “If it act lice a duck, and talks like a duck, then its probably a duck”.

//OPGAVE 1F 
class Book implements IBook {
    _title: string;
    readonly _author: string;
    _published?: Date;
    _pages?: number;

    /*
    constructor(title: string, author: string, published: Date, pages: number) {
        this._title = title
        this._author = author
        this._published = published
        this._pages = pages
    }
    */
    constructor(properties: IBook) {
        this._title = title
        this._author = author
        this._published = published
        this._pages = pages
    }
}

let b1 = new Book({ title:"Nattergalen", author:"H.C Andersen", published:new Date('20/4/2002'), pages:113});

logger(b1);