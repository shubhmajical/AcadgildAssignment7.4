function outer(inner) {
console.log(inner());
};
outer(function(){
return "Hello World From Inner Function";
});