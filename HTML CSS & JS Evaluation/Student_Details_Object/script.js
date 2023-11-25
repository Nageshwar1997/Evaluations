function Student(name, roll_no, className, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;


    this.printTop3Subjects = function () {

        let sortedSubjects = Object.keys(this.marks_of_5_subjects).sort((a, b) => {
            return this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a];
        });


        console.log("Top 3 Subjects:", this.name);
        for (let i = 0; i < 3; i++) {
            console.log(`${i + 1}. ${sortedSubjects[i]}`);
        }
    };

    this.printReportCard = function () {

        let totalMarks = Object.values(this.marks_of_5_subjects).reduce((acc, curr) => acc + curr, 0);
        let percentage = (totalMarks / 500) * 100;

        console.log("");
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name  - ${this.name}  |`);
        console.log(`| Roll no. - ${this.roll_no}     |`);
        console.log(`| Class    - ${this.class}     |`);
        console.log(`| Section  - ${this.section}      |`);


        let subjectArr = Object.keys(this.marks_of_5_subjects);
        for (let i = 0; i < subjectArr.length; i++) {
            if (subjectArr[i] == "Science") {
                console.log(`| ${subjectArr[i]}  : ${this.marks_of_5_subjects[subjectArr[i]]}      |`);
            }
            else if (subjectArr[i] == "Maths") {
                console.log(`| ${subjectArr[i]}    : ${this.marks_of_5_subjects[subjectArr[i]]}      |`);
            }
            else if (subjectArr[i] == "S_Science") {
                console.log(`| ${subjectArr[i]}: ${this.marks_of_5_subjects[subjectArr[i]]}      |`);
            }
            else if (subjectArr[i] == "English") {
                console.log(`| ${subjectArr[i]}  : ${this.marks_of_5_subjects[subjectArr[i]]}      |`);
            }
            else if (subjectArr[i] == "Hindi") {
                console.log(`| ${subjectArr[i]}    : ${this.marks_of_5_subjects[subjectArr[i]]}      |`);
            }
        }


        console.log(`| Percentage:${percentage}%   |`);
        console.log("+--------------------+");
        console.log("");
        console.log("");
        console.log("");
    };
}


let student1 = new Student("Nageshwar", 159, "Cap", "VI", {
    Science: 85,
    Maths: 95,
    S_Science: 80,
    English: 90,
    Hindi: 75
});
student1.printTop3Subjects();
student1.printReportCard();




let student2 = new Student("Manjusha ", 160, "Map", "VI", {
    Science: 95,
    Maths: 85,
    S_Science: 90,
    English: 80,
    Hindi: 81
});
student2.printTop3Subjects();
student2.printReportCard();
