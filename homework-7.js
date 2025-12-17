//Задание 2

const numbers = [1,2,3,4,5,6,7,8,9,10];
const filteredNumbers = numbers.filter(num => {
    return num >= 5; 
});

console.log(numbers);
console.log("(>= 5):", filteredNumbers);

//Задание 3

const movies = [ "Последний Самурай", "Джон Уик", "Аватар"];
const movieToFind = "Аватар";
const movieNotFound = "Анету";

const isInCatalog = movies.includes(movieToFind);
const isAvatarInCatalog = movies.includes(movieNotFound);

console.log(`Фильм "${movieToFind}" в каталоге?`, isInCatalog);
console.log(`Фильм "${movieNotFound}" в каталоге?`, isAvatarInCatalog); 

//Задание 4

function reverseArray(arrayToReverse) {
    const reversedCopy = [...arrayToReverse].reverse();
    return reversedCopy;
}

const reversedNumbers = reverseArray(numbers); 
console.log("перевернутые:", reversedNumbers); 
 
const reversedMovies = reverseArray(movies);
console.log("перевернутые:", reversedMovies);

//Задание 5-6
import { socialMediaComments } from './comments.js';

console.log("--- (Импорт) ---");
console.log(socialMediaComments.length);

//Задание 7

const commentsWithComEmail = socialMediaComments.filter(comment => {
    return comment.email.includes(".com");
});

console.log(commentsWithComEmail);

//Задание 8

const updatedCommentsPostId = socialMediaComments.map(comment => {
    const newPostId = comment.id <= 5 ? 2 : 1;
    return { ...comment, postId: newPostId
    };
});

console.log(updatedCommentsPostId);

//Задание 9

const simplifiedComments = socialMediaComments.map(comment => {
    return { id: comment.id,name: comment.name };
});

console.log(simplifiedComments);

//Задание 10

console.log("--- (Проверка длины сообщения) ---");

const commentsWithValidation = socialMediaComments.map(comment => {
    const isLongMessage = comment.body.length > 180;
    return {...comment, isInvalid: isLongMessage };
});

console.log(commentsWithValidation);

console.log(commentsWithValidation[0].isInvalid); 

//Задание 11

const emailsMap = socialMediaComments.map(comment => {
    return comment.email;
});

console.log(emailsMap);

const emailsReduce = socialMediaComments.reduce((accumulator, currentComment) => {
    accumulator.push(currentComment.email); 
    return accumulator; 
}, []);

console.log(emailsReduce);

//Задание 12

const emailsArray = emailsMap; 
const emailsStringSimple = emailsArray.toString();

console.log(emailsStringSimple);

const emailsJoinedMultiline = emailsArray.join("\n"); 

console.log(emailsJoinedMultiline);
