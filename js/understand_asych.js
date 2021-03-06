function async(fn, callback) {
    setTimeout(function() {
        fn();
        callback();
    }, 0);
}
function sync(fn) {
    fn();
}
function foo(){
    console.log('foo');
}

console.log('SYNC TEST --------------');
//synchronous
console.log('start sync');
sync(foo);
console.log('end sync');
console.log('');
console.log('ASYNC TEST --------------');
//asynchronous
console.log('start async');
async(foo, function(){ 
    console.log('async callback');
});
console.log('end async');
