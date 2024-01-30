/**
 * Student: {name: String, grades: Array[Number]}
 * Given 3 students -> find the best one
 * The best one is the one who has highest score
 * Incase more than 1 person has same score -> print them all out
 */
const { deepCopyObject } = require('../utils/ObjectHelper');

const calculateAverageScore = function (student) {
    if (!student || !student.grades || student.grades.length === 0) {
        return 0;
    }

    const totalGrade = student.grades.reduce((sum, score) => sum += score, 0);
    const numberOfGrades = student.grades.length;

    return Math.floor(totalGrade / numberOfGrades);
}

const findBestStudents = function (students) {
    return students.reduce((bestStudents, currentStudent) => {
        const currentAverageScore = calculateAverageScore(currentStudent);

        if (bestStudents.length === 0 || currentAverageScore > calculateAverageScore(bestStudents[0])) {
            bestStudents = [currentStudent];
        } else if (currentAverageScore === calculateAverageScore(bestStudents[0])) {
            bestStudents.push(currentStudent);
        }

        return bestStudents;
    }, []);
};

const ti = {
    name: 'Ti',
    grades: [9, 8, 9],
};

const teo = deepCopyObject(ti);
teo.name = 'Teo';
teo.grades = [7, 9, 9];

const tun = deepCopyObject(ti);
tun.name = 'Tun';
tun.grades = [6, 7, 8];

const bi = deepCopyObject(ti);
bi.name = 'Bi';

const students = [undefined, ti, teo, tun, bi];
console.log(findBestStudents(students));
