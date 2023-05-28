//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.students = {}
  }
  roster() {
    let deepCoded = JSON.parse(JSON.stringify(this.students));
    return deepCoded;
  }
  
  add(name, grade) {
    for (const item in this.students) {
      if (this.students[item].includes(name)) {
        this.students[item] = this.students[item].filter((x) => x != name);
      }
    }
    if (this.students[grade]) {
      this.students[grade].push(name)
    } else {
      this.students[grade] = [name];
    }
    this.students[grade].sort();
    return this.students;
  }
  
  grade(grade) {
    //deep code again:
    let deepcoded = JSON.parse(JSON.stringify(this.students));
    if (deepcoded[grade]) {
      return deepcoded[grade].sort();
    } else {
      return [];
    }
  }
}
