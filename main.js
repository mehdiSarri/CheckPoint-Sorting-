let tab = [9,2,5,6,4]
let x ;
console.log(tab)

for (let i = 1; i < tab.length; i++) {
    x = tab[i]
    for (let j = i; j >0 ; j--) {
        if (tab[j-1]>x) {
            tab[j]= tab[j-1]
            tab[j-1] = x
        }
    }
    
}
console.log(tab)