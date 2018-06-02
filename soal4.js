function getReport(studentGrades) {
    // only code here..
    studentGrades.sort();
    var reportObj = [];
    var passed = [];
    var failed = [];
    var rptObj = {};
      for (var i = 0; i<studentGrades.length; i++) {
          indexReport = reportObj.indexOf(studentGrades[i].classCode);
          if(indexReport == -1) {
              for(var j = 0; j< studentGrades.length;j++) {
                  if(studentGrades[j].classCode == studentGrades[i].classCode) {
                      if(studentGrades[j].score>=70) {
                        passed.push(studentGrades[j].name);
                      }
                      else {
                        failed.push(studentGrades[j].name);
                      }
                  }
              }
              reportObj.push({ClassCode : studentGrades[i].classCode,Passed : passed,Failed : failed});
              passed = [];
              failed = [];
          }
      }
     
  
      return reportObj;
  }
  
  
  
  var grades1 = [
    { name: 'John', score: 80, classCode: 'A' },
    { name: 'Mike', score: 60, classCode: 'B' },
    { name: 'Budi', score: 70, classCode: 'C' },
    { name: 'Siti', score: 50, classCode: 'A' },
    { name: 'Aaron', score: 10, classCode: 'A' },
    { name: 'Arthur', score: 10, classCode: 'C' },
    { name: 'Osass', score: 10, classCode: 'B' },
    { name: 'Yolo', score: 90, classCode: 'C' },
  ];
  
  console.log(getReport(grades1));
  
  /*
  [
    { classCode: 'A', passed: [ 'Siti', 'Aaron' ], failed: [ 'John' ] },
    { classCode: 'B', passed: [ 'Mike', 'Osass' ], failed: [] },
    { classCode: 'C', passed: [ 'Arthur' ], failed: [ 'Budi', 'Yolo' ] },
  ]
  */
  