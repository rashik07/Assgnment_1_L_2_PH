// Problem 1:
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};
filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Problem 2:

const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};
reverseString("typescript");



// Problem 3:

const checkType = (input: string | number): string => {
  if (typeof input === "string") {
    return "String";
    } else if (typeof input === "number") {
    return "Number";
  } else {
    return "Unknown type";
  }

};
checkType("Hello");
checkType(42);

// problem 4

const user = { id: 1, name: "John Doe", age: 21 };
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

getProperty(user, "name");

// Problem 5:
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

// Sample Input
const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

toggleReadStatus(myBook);

//problem 6
interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  grade: string;
}

const createStudent = (
  name: string,
  age: number,
  grade: string
): Student => {
  return {
    name,
    age,
    grade,
  };
};

const getDetails = (student: Student): string => {
  return `Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`;
};


createStudent("Alice", 20, "A");


// Problem 7:


const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((num) => arr2.includes(num));
};
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);



