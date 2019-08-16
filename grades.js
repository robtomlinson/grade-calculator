"use strict";

function gradeCalc() {
  let STA1 = Number(document.GRADECALC.gradeSTA1.value),
      EL1 = Number(document.GRADECALC.gradeEL1.value),
      STA2 = Number(document.GRADECALC.gradeSTA2.value),
      EL2 = Number(document.GRADECALC.gradeEL2.value);
  let RESULT = (STA2 > STA1) ? ((EL1 - EL2) / (STA1 - STA2)) * 100 :
               (-1 * (EL1 - EL2) / (STA1 - STA2)) * 100;
  document.GRADECALC.gradeOUTPUT.value = round(RESULT, 2);
}

function elevCalc() {
  let STA1 = Number(document.ELEVCALC.elevSTA1.value),
      EL1 = Number(document.ELEVCALC.elevEL1.value),
      STA2 = Number(document.ELEVCALC.elevSTA2.value),
      GRADE = Number(document.ELEVCALC.elevGRADE.value);
  let RESULT = (STA2 < STA1) ? (EL1 + ((GRADE / 100) * (STA1 - STA2))) :
               (EL1 - ((GRADE / 100) * (STA1 - STA2)));
  document.ELEVCALC.elevOUTPUT.value = round(RESULT, 2);
}

function degrCalc() {
  let STA1 = Number(document.DEGREECALC.degrSTA1.value),
      EL1 = Number(document.DEGREECALC.degrEL1.value),
      STA2 = Number(document.DEGREECALC.degrSTA2.value),
      DEGREE = Number(document.DEGREECALC.degrDEGR.value);
  let RESULT = EL1 + ((STA2 - STA1) * getTanFromDegrees(DEGREE));
  document.DEGREECALC.degrOUTPUT.value = round(RESULT, 2);
}

function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function getTanFromDegrees(degrees) {
  return Math.tan(degrees * Math.PI/180);
}
