/*
    Create a function palinfrome() which is then 
    made into a method for the Phrase object.

    Here we make "processedContent" a function on ia ts own
    Then we create a new object from the Phrase object
*/


// reverse a string
function reverse(string){
    return Array.from(string).reverse().join("");// uses Array.from() which works likbut be split() keeps emoji's intact 
}



// define the Phrase object

function Phrase(content){
    this.content = content; // "this" represents the object itself


    this.processedContent = function processedContent() {
        return this.content.toLowerCase();
    }

    // Returns true for palindrome, false otherwise
    this.palindrome = function palindrome(){ 
    return this.processedContent() === reverse(this.processedContent());
    }
}

// run a check
phrase = new Phrase("Racecar");
console.log(phrase.content);// Racecar
console.log(phrase.palindrome());

// A new object TranslatedPhrase:

// we could create the new object as:

function TranslatedPhrase(content, translation){
    this.content = content;
    this.translation = translation;

    /* By adding in this code  from Phrase with a modifcation 
         we want we override the original
    */
    this.processedContent = function processedContent() {
        return this.translation.toLowerCase();
    }

}

/*  To give it the palindrome method, we could just copy the code 
    from the  Phrase  object & paste it in the new object. But
    this would result in code duplication.

    This is where the OOPs idea of inheritance comes in handy. Here
    we use the prototype property of the second object as follows:

    set the prototype of the 2nd object to be equal to an instance
    of the first oject:
    
*/
    TranslatedPhrase.prototype =  new Phrase();

    // check

    let frase = new TranslatedPhrase("recognize","reconnocer");
    console.log(frase);
    console.log(frase.content);
    console.log(frase.palindrome());


