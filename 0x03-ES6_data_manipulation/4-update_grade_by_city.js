export default function updateStudentGradeByCity(list, city, newGrade) {
  return list
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeInfo = newGrade.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeInfo ? gradeInfo.grade : 'N/A',
      };
    });
}
