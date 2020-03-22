const f = require('./Calculator');

//반지름 입력
let r = 1;
f.calCircleArea(r);

//사각형의 가로, 세로 길이 입력
let a = 2;
let b = 3;
f.calRectangleArea(a, b);

//사다리꼴의 윗변, 아랫변, 높이 입력
let c = 4;
let d = 5;
let h = 6;
f.calTrapezoidArea(c, d, h);

//원기둥의 반지름, 높이 입력
let r2 = 7;
let h2 = 8;
f.calCylinderVolume(r2, h2);
