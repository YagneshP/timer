const argArr = process.argv.slice(2);
if(argArr.length === 0){
  return 
};
for(let val of argArr){
  if(!isNaN(+val) && +val > 0  ){
    setTimeout(() => {
      process.stdout.write('\x07');
    }, val * 1000);
  }
}
