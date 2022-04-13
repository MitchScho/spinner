//process.stdout.write("hello from spinner1.js... \rheyyy\n");
//Function runs until animation has done complete rotation
const spinner = function () {
  //Define all characters in one array
  const myCharacters = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
  let delay = 100;
  //Loop over array using delay counter and assinging delay to new var
  for (let i = 0; i < myCharacters.length; i++) {
    delay += 200;
    
    setTimeout(() => {
      // print out characters after time delay
      process.stdout.write(myCharacters[i])
      
    }, delay);
  }
};
spinner()

  

