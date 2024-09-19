// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was
// ```
// hello     world    my    name   is       shashank
// ```
// After the program runs, the output should be
// ```
// hello world my name is shashank
// ```

const fs=require('fs')

fs.readFile("b.txt","utf-8",function(err,data){
    removedExtraWhitespaces=data.replace(/\s+/g, ' ');
    fs.writeFile("b.txt",removedExtraWhitespaces,function(err){
        console.log(removedExtraWhitespaces);
    })
});