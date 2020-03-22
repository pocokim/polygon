//원의 1개의 넓이 구하는 함수
const circleArea = r => {
  let circleArea = r * r * Math.PI;
  return circleArea;
};
//원의 넓이의 합을 구하는 재귀 함수
const sumCircleAreas = (r, n) => {
  if (n === 0) {
    return 0;
  } else {
    return circleArea(r) + sumCircleAreas(r + 1, n - 1);
  }
};
//사각형의 넓이 구하는 함수 (가로, 세로)
const calRectangleArea = (a, b) => {
  let rectangleArea = a * b;
  console.log('사각형의 넓이: ' + rectangleArea);
};
//사다리꼴의 넓이 구하는 함수 (윗변, 아랫변, 높이)
const calTrapezoidArea = (a, b, h) => {
  let trapezoidArea = (a + b) * h / 2;
  console.log('사다리꼴의 넓이: ' + trapezoidArea);
};

//입력된 인자에 따라 알맞은 함수 호출하여 넓이 계산
const getArea = (polygon, a, b, c) => {
  switch (polygon) {
    case 'circle':
      if (b === undefined) {
        console.log('원의 넓이: ' + circleArea(a));
      } else {
        console.log('원의 넓이의 합: ' + sumCircleAreas(a, b));
      }
      break;
    case 'rect':
      calRectangleArea(a, b);
      break;
    case 'trapezoid':
      calTrapezoidArea(a, b, c);
      break;
  }
};

module.exports = {
  getArea
};
