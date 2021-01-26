let book = {
    title: prompt("Enter title:"),
    author: prompt("Enter name of the author:"),
    readingStatus: prompt("Enter true or false"),

    info: function(){
        if(this.readingStatus == "true"){
            alert(`Already read '${this.title}' by ${this.author}`)
        }
        else {
            alert(`You still need to read '${this.title}' by ${this.author}`)
        }
    }
}

book.info();