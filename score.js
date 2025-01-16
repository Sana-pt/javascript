const students = [
    { name: "Alice", score: 95, subject: "Math" },
    { name: "Bob", score: 67, subject: "Science" },
    { name: "Charlie", score: 82, subject: "English" },
    { name: "David", score: 74, subject: "History" },
    { name: "Eve", score: 58, subject: "Art" },
    { name: "Frank", score: 89, subject: "Physics" },
    { name: "Grace", score: 91, subject: "Biology" },
];




const result=students.filter(student=>student.score>70);
console.log(result)




const grade=students.map(students=>{
    let grade;
    if(students.score>=90){
        grade='A';
    }
    else if(students.score>=80){
        grade='B';
    }
    else if(students.score>=70){
        grade='C';
    }
    else if(students.score>=60){
        grade='D';
    }
    else if(students.score<60){
        grade='F';
    }
    return {grade};
})
console.log(grade)



const total=students.reduce((sum,student)=>sum+student.score,0)
console.log(total)


const avg=total/students.length;
console.log(avg.toFixed(2))

const avgs=students.filter(student=>student.score>avg)
console.log(avgs);