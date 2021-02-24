// Object Destruction
// ex-1
// const person = {name:'Jack Willium', age: 24, job: 'facebooker', wifeName: 'Ema Watson', address: 'kocu Khet', phone: '01765501651', friends:['Tom hancks', 'Tom cruise', 'Tom yang' ] }

// // console.log(person.wifeName);

// // ex-2
// const person = {name:'Jack Willium', age: 24, job: 'facebooker', wifeName: 'Ema Watson', address: 'kocu Khet', phone: '01765501651', friends:['Tom hancks', 'Tom cruise', 'Tom yang' ] }

// const wifeName = person.wifeName;
// const phone = person1.phone;

// console.log(wifeName , phone);     

// ex-3 same thing doing different ways
const person = { name: 'Jack Willium', age: 24, job: 'facebooker', wifeName: 'Ema Watson', address: 'kocu Khet', phone: '01765501651', friends: ['Tom hancks', 'Tom cruise', 'Tom yang'] }

const { phone, wifeName } = person;
// console.log(phone,wifeName);

// array destruction
// ex-1
// const friends = ['Sakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Sharukh Khan'];
// const [chotoFriend, nextFriend] = friends;
// console.log(chotoFriend, nextFriend);

// ex-1 type-2
// const friends = ['Sakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Sharukh Khan'];
// const [chotoFriend, nextFriend, ...restFriends] = friends;
// console.log(restFriends);
// ex-1 type-3
const friends = ['Sakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Sharukh Khan'];
const [chotoFriend, ...restFriends] = friends;
console.log(restFriends);

// complex object destruction
const complexObject = {
    name: 'abc',
    info:{
        address: 'Kola bagan',
        leader: 'Tiger Leader'
    }
}
const {leader} = complexObject.info;
console.log(leader);




