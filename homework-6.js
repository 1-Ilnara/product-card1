//Задание 3

const personalInfo = {
    firstName: "Ильнара",
    lastName: "Хайрулина",
    age: 35,
    email: "hajrulinailnaragmail.com",
    job: "Старший разработчик",
    company: "TechSolutions LLC",
    country: "Kazakhstan",
    city: "Uralsk"
};
 
console.log("Задание 3 (Объект владельца):", personalInfo);

//Задание 4

const carInfo = {
    brand: "Audi",
    model: "Q8",
    year: 2023,
    color: "Металлик",
    transmissionType: "8-ступенчатая АКПП Tiptronic"
};

carInfo.owner = personalInfo;

//Задание 5

console.log("объект с вложенным владельцем:", carInfo);

function addMaxSpeedIfMissing(carObject) { 
    if (!carObject.maxSpeed) {
        console.log("Добавляю максимальную скорость..."); 
        carObject.maxSpeed = 250; 
    } else {
        console.log("Скорость уже была."); 
    }
}


addMaxSpeedIfMissing(carInfo); 
console.log(carInfo); 
addMaxSpeedIfMissing(carInfo); 

//Задание 6

function displayObjectProperty(obj, propName) {
    console.log(`Значение свойства "${propName}":`, obj[propName]);
}

displayObjectProperty(carInfo, "brand"); 

displayObjectProperty(carInfo, "year"); 

displayObjectProperty(carInfo, "owner"); 

displayObjectProperty(carInfo, "doors");

//Задание 7

const productNames = ["Молоко", "Хлеб", "Яйца"];

console.log(productNames[0]); 
console.log(productNames[1]); 

//Задание 8

const bookCatalog = [
    {
        title: "Квантовый воин",
        author: "Джон Кехо",
        year: 2020,
        coverColor: "Синий",
        genre: "Саморазвитие"
    },
    
    {
        title: "Путешествие домой. Майкл Томас и семь ангелов",
        author: "Ли Кэрролл (Крайон)",
        year: 2012, 
        coverColor: "Разноцветный",
        genre: "Эзотерика" 
    },
    {
        title: "Интуиция",
        author: "Ошо",
        year: 2021,
        coverColor: "Белый",
        genre: "Философия"
    }
];


bookCatalog.push({
    title: "Один день из жизни мозга",
    author: "Сьюзан Гринфилд",
    year: 2018, 
    coverColor: "Желтый",
    genre: "Нейронаука" 
});

console.log(bookCatalog);

//Задание 9

const generalCatalog = [
{ title: "Квантовый воин", author: "Джон Кехо", year: 2020, genre: "Саморазвитие" },
{ title: "Путешествие домой", author: "Ли Кэрролл", year: 2012, genre: "Эзотерика" },
{ title: "Интуиция", author: "Ошо", year: 2021, genre: "Философия" },
];

const harryPotterCatalog = [
{ title: "Гарри Поттер и Философский камень", author: "Джоан Роулинг", year: 1997, universe: "Harry Potter" },
{ title: "Гарри Поттер и Тайная комната", author: "Джоан Роулинг", year: 1998, universe: "Harry Potter" },
];

// Задание 10

const combinedCatalog = [...generalCatalog, ...harryPotterCatalog];

console.log("--- Результат Задания 9 (Объединенный каталог) ---");
console.log(combinedCatalog);
console.log("Общее количество книг:", combinedCatalog.length); 


function markRareBooks(booksArray) {
    
    const updatedCatalog = booksArray.map(book => {
        return {...book, isRare: book.year > 2000 };
    });
        return updatedCatalog;
}

const finalCatalogWithRarity = markRareBooks(combinedCatalog);

console.log("\n--- Результат Задания 10 (Каталог с пометкой о редкости) ---");
console.log(finalCatalogWithRarity);