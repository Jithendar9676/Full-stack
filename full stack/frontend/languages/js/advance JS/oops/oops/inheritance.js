function book (title,author,year,summary) {
    this.title = title,
    this.author= author,
    this.year= year,
    this.summary= function() {
       return  `${this.title} was written by ${this.author} in ${this.year}`;
    }
};


//prototype

book.prototype.summary = function(){
    return  `${this.title} was written by ${this.author} in ${this.year}`;    
}

//magazine constractor

function magazine (title, author, year, month){
    book.call(this , title , author , year );
    this.month;

}
 //inharite

 magazine.prototype = Object.create(book.prototype);

 // magazine object

 const mag1 = new magazine ('mag one ' , 'jan don '  , ' 2019', ' jan');
 console.log(mag1.summary());