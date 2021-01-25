let words = ["Hello","there","students","of","SEDC!"];
function fullSentence (){
    let flag = 0; 
while (flag < words.length) {  
	document.write(words[flag] + ' ');  
	flag++; 
}
}

fullSentence(words);