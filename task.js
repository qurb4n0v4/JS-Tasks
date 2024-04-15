//! SLACK TAPSHIRIQLARI:
// 1
let arr1 =  [1, 3, -1, 5, 7, 8, 12, -6, 3, 9];
console.log(arr1);
let sum = 0
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 !== 0 || arr1[i] < 0) {
        sum += arr1[i];
    }
}
console.log(sum);
// 2; 5
let cutVeMenfi = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 == 0 && arr1[i] > 0) {
        cutVeMenfi.push(arr1[i]);
    }
}
console.log(cutVeMenfi);
// 3
let enBoyuk = arr1[0];
let enKicik = arr1[0];
for (i = 0; i < arr1.length; i++) {
    if (arr1[i] > enBoyuk) {
        console.log(arr1[i]);
    }
    if (arr1[i] < enKicik) {
        console.log(arr1[i]);
    }
}
// 4
let edediOrta = 0;
console.log(arr1.length);
for (let i = 0; i < arr1.length; i++) {
    edediOrta += arr1[i] / 10;
}
console.log(edediOrta);
// 6
let ar =  [1, 3, -1, 'a', 'B', 8, 'P', -6, 3, 'g']; 
let stg = [];
for (i = 0; i < ar.length; i++) {
    if (typeof ar[i] === 'string') {
        stg.push(ar[i]);
    }
}
console.log(stg);
// 7
const obj = [
    {
        name: 'Turan',
        surname: 'Isayev',
        age: 16,
        school: '163 N-li'
    },
    {
        name: 'Ilqar',
        surname: 'Esedov',
        age: 13,
        school: '163 N-li'
    },
    {
        name: 'Musa',
        surname: 'Abdullayev',
        age: 11,
        school: '163 N-li'
    },
    {
        name: 'Gunay',
        surname: 'Memmedova',
        age: 15,
        school: '163 N-li'
    }
]
console.log(obj);
for (i = 0; i < obj.length; i++) {
    console.log(obj[i]);
}
// 8
let fruits =  ["apple", "banana", "cherry", "orange"];
console.log(fruits.sort());
// 9
let user = +prompt('Ededi daxil edin');
let a = 1;
for (i = 1; i <= user; i++) {
    a *= i;
}
console.log(a);
// 10
let text = 'Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.'
let miqdar = 0;
for (i = 0; i < text.length; i++) {
    if (text[i] === 'a') {
        miqdar++
    }
}
console.log(miqdar);
// 11
function cem () {
    let one = 3;
    let two = 5;
    let cem = one + two;
    return cem;
}
console.log(cem())
// 12
const arr0 = [5, 6, 3, 2, 10];
let cemi = 0;
function umumi() {
    for(i = 0; i < arr0.length; i++) {
        cemi += arr0[i];
    }
    return cemi;
}
console.log(umumi());
// 13
let ters = []
function tersine() {
    for(i = arr0.length - 1; i >= 0; i--) {
        ters.push(arr0[i]);
    }
}
tersine();
console.log(ters);
// 14
const object = [
    {
        name: 'fazil',
        age: 43
    },
    {
        name: 'samir',
        age: 13
    },
    {
        name: 'teymur',
        age: 17
    },
    {
        name: 'mikayil',
        age: 25
    },
    {
        name: 'leyla',
        age: 14
    },
];
let underEighteen = [];
for (let i = 0; i < object.length; i++) {
    if (object[i].age < 18) {
        underEighteen.push(object[i]);
    }
}
console.log(underEighteen);