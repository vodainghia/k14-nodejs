/**
 * Student: {name: String, grades: Array[Number]}
 * Given 3 students -> find the best one
 * The best one is the one who has highest score
 * Incase more than 1 person has same score -> print them all out
 */
const { deepCopyObject } = require('../utils/ObjectHelper');

let ti = {
    name: 'Ti',
    grades: [9, 8, 6],
};

let teo = deepCopyObject(ti);
teo.name = 'Teo';
teo.grades = [7, 9, 9];

let tun = deepCopyObject(ti);
tun.name = 'Tun';
tun.grades = [6, 7, 8];

const students = [ti, teo, tun];
const bestStudent = findBestStudent(students);
console.log(bestStudent);

function findBestStudent(students) {
    return students.reduce((bestStudent, currentStudent) => {
        const currentAverageScore = calculateAverageScore(currentStudent);
        const bestAverageScore = calculateAverageScore(bestStudent);

        return currentAverageScore > bestAverageScore ? currentStudent : bestStudent;
    });
};

function calculateAverageScore(student) {
    const totalGrade = student.grades.reduce((sum, score) => sum += score, 0);
    const numberOfGrades = student.grades.length;

    return Math.floor(totalGrade / numberOfGrades);
}
