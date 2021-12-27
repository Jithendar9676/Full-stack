const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


  //for

//   for(let i = 0 ; i < companies.length ; i++) 
//       console.log(companies[i]);
//   }

//for each

// companies.forEach(function(Company){
//     console.log(Company.name)
// })

//filter

// let candrink = [];
// for(let i = 0 ; i < ages.length ; i++){
//     if(ages[i] >= 21){
//         candrink.push(ages[i]);

//     }
// }
// console.log(candrink);

// let candrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// })
// console.log(candrink);

// let candrink = ages.filter(age => age >= 21);
// console.log(candrink);

// const retailcompanies = companies.filter(function(Company) {
// if (Company.category === 'Retail') {
//     return true;
// }
// });
// console.log(retailcompanies);


// const autocompanies = companies.filter( Company => Company.category === 'Auto')
// console.log(autocompanies);


// let startyear = companies.filter(function(companies){
//     if (companies.start <= '1986' ){
//         return true;
// }

// });
// console.log(startyear);

// let startyear = companies.filter( companies => companies.start >= '1987');
// console.log(startyear)
// let endyear = companies.filter(companies => companies.end <= '2000')
// console.log(endyear);

//Map

// let Companynames = companies.map(function(Company){
// return Company.name
// });
// console.log(Companynames);

// const startend = companies.map(companies => `${companies.name} [${companies.start}]-[${companies.end}]`)
// console.log(startend);

// let agemap = ages
// .map(age => Math.sqrt(age))
// .map(age => age-20);
// console.log(agemap);

//sort

// let sortcompanies = companies.sort(function(c1, c2){
//     if (c1.start > c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// console.log(sortcompanies);


// let sort = companies.sort((a,b) => (a.start < b.start ? 1 : -1));
// console.log(sort);

// let sortends= companies.sort((a, b) => (a.end > b.end ? 1 : -1));
// console.log(sortends);

// let sortage = ages.sort((a, b) => a - b);
// console.log(sortage);

//reduce

// let agesum = 0;
// for(let i=0;i<ages.length;i++){
//      agesum += ages[i];
// }
// console.log(agesum);

// let agesum = ages.reduce(function(total , age){
//     return total + age;
// },0);
// console.log(agesum);


// let agesum = ages.reduce((total, ages) => total + ages);
// console.log(agesum);


// let combain = ages
// .map(ages => ages*2)
// .filter(ages => ages>=50)
// .sort((a, b) => a-b)
// .reduce((total , ages) => total + ages ,0)


// console.log(combain);