const dataArr = ['Matt Johnson','Bart Paden','Ryan Doss','Miguel Solano','Matt Johnson','Bart Paden','Jordan Heigle','Tyler Viles'];

const resultArr = dataArr.filter((data,index)=>{
  return dataArr.indexOf(data) === index;
})
console.log(resultArr); 

