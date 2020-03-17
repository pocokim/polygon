//원의 넓이 구하는 함수
const circleArea = r => {
  let circleArea = r * r * Math.PI;
  console.log('원의 넓이: ' + circleArea);
};
//사각형의 넓이 구하는 함수 (가로, 세로)
const rectangleArea = (a, b) => {
  let rectangleArea = a * b;
  console.log('사각형의 넓이: ' + rectangleArea);
};
//사다리꼴의 넓이 구하는 함수 (윗변, 아랫변, 높이)
const trapezoidArea = (a, b, h) => {
  let trapezoidArea = (a + b) * h / 2;
  console.log('사다리꼴의 넓이: ' + trapezoidArea);
};
//원기둥의 부피 구하는 함수 (반지름, 높이)
const cylinderVolume = (r, h) => {
  let cylinderVolume = r * r * Math.PI * h;
  console.log('원기둥의 부피: ' + cylinderVolume);
};

//에러 체크------------------------------------------------------------
//https://stackoverflow.com/questions/8407622/set-type-for-function-parameters 의 예시 활용

//인자 타입 체크
const checkType = (value, i) => {
  if (typeof value !== 'number') throw new Error(`${i + 1} 번째 인자가 숫자가 아닙니다`);
};

//인자 개수 체크
const checkNumber = (parameterTypes, func) => {
  if (parameterTypes.length !== func.length)
    throw new Error(
      `${func.length}개의 인자가 필요한 함수입니다. ${parameterTypes.length}개로 틀리게 정의했습니다.`
    );
  return function(...args) {
    if (parameterTypes.length !== args.length)
      throw new Error(
        `${func.length}개의 인자가 필요합니다. 현재 ${args.length}개만 입력되었습니다.`
      );
    for (let i = 0; i < args.length; i++) checkType(args[i], i);
    return func(...args);
  };
};

//각 함수에 에러 체크 함수 적용------------------------------------------------------------
let calCylinderVolume = checkNumber([Number, Number], (r, h) => {
  cylinderVolume(r, h);
});

let calCircleArea = checkNumber([Number], r => {
  circleArea(r);
});

let calRectangleArea = checkNumber([Number, Number], (a, b) => {
  rectangleArea(a, b);
});

let calTrapezoidArea = checkNumber([Number, Number, Number], (a, b, h) => {
  trapezoidArea(a, b, h);
});

module.exports = {
  calCircleArea,
  calRectangleArea,
  calTrapezoidArea,
  calCylinderVolume
};
