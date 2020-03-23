const polyLogArr = [];
const pushLog = polygon => {
  polyLogArr.push(polygon);
};
const printExecutionSequence = () => {
  let logging = '';
  logging = polyLogArr.toString();
  console.log('계산수행순서: ' + logging);
};

//원의 1개의 넓이 구하는 함수 (반지름)
const getCircle = r => {
  let circleArea = r * r * Math.PI;
  pushLog('circle');
  return circleArea;
};
//원의 넓이의 합을 구하는 재귀 함수 (반지름, n개)
const sumCircle = (r, n) => {
  let circleArea = r * r * Math.PI;
  if (n === 0) {
    pushLog('circle');
    return 0;
  } else {
    return circleArea + sumCircle(r + 1, n - 1);
  }
};
//사각형의 넓이 구하는 함수 (가로, 세로)
const getRectangle = (w, h) => {
  let rectangleArea = w * h;
  pushLog('rect');
  return rectangleArea;
};
//사다리꼴의 넓이 구하는 함수 (윗변, 아랫변, 높이)
const getTrapezoid = (uw, dw, h) => {
  let trapezoidArea = (uw + dw) * h / 2;
  pushLog('trapezoid');
  return trapezoidArea;
};

//입력된 인자에 따라 알맞은 함수 호출하여 넓이 계산
const getArea = (polygon, ...params) => {
  let area = 0;
  switch (polygon) {
    case 'circle':
      area = params.length === 2 ? sumCircle(...params) : getCircle(params[0]);
      break;
    case 'rect':
      area = getRectangle(...params);
      break;
    case 'trapezoid':
      area = getTrapezoid(...params);
      break;
  }
  return area;
};

module.exports = {
  getArea,
  getCircle,
  getRectangle,
  getTrapezoid,
  printExecutionSequence
};
