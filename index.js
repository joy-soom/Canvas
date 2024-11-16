//basic
const canvas = document.querySelector("canvas");
console.log(canvas);

//그림을 그려줄도구 ctx
const ctx = canvas.getContext("2d");
console.log(window.devicePixelRatio);
const dpr = window.devicePixelRatio;

//시작하는 x,y 가로길이 세로길이 순 () 사각형 만들기
//ctx.fillRect(10, 10, 50, 50);

//캔버스의 사이즈를 다루는 데는 2가지 방법이 있다
//첫번째 방식은 css 값을 직접 수정해서 canvas 사이즈를 조절하는 방식
//두번째 방식은 캔버스 자체의 width와 height를 조절하는 방식 - js

const canvasWidth = 300;
const canvasHeight = 300;

//두번째 방식으로 조절해 보겠다
canvas.style.width = canvasWidth + "px";
canvas.style.height = canvasHeight + "px";

//캔버스 자체의 width height는 150 300이기 때문에
//캔버스 기본 값을 300 x 300 으로 초기화 시켜줬다.
//캔버스 고유의 값과 캔버스 스타일 값이 동일해야 한다
canvas.width = canvasWidth;
canvas.height = canvasHeight;
//dpr을 곱해줌으로써 화질이 선명해짐 물론 1일 경우는 차이가 없음
ctx.scale(dpr, dpr);

//ctx.fillRect(10, 10, 50, 50);

//파티클 그리는 방법
//원 만들기 시작할떄는 beginPath 끝날떄는 closePath를 해줘야 한다
ctx.beginPath();
//순서는 시작하는 x와 y 반지름 길이, 시작하는 각도, 끝나는 각도, 시계방향일지 반시계방향일지
ctx.arc(100, 100, 50, 0, (Math.PI / 180) * 360);
ctx.fillStyle = "purple";
ctx.fill(); //색 채우기
ctx.stroke; //태두리 생기게 하기
ctx.closePath();

class Particle {
  //constructor는 매소드는 클래스를 instance 객체를 생성 및 초기화를 위해 필수!
  //여러개의 원을 생성해 줄 수 있도록 도와준다
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius; //반지름 길이
  }
  //draw라는 매소드를 정의 후 그릴 코드를 넣어 준다
  //클래스 instance를 그릴 때는 draw라는 매소드로 통일해 보쟈
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, (Math.PI / 180) * 360);
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.closePath();
  }
}

const x = 100;
const y = 100;
const radius = 50;
const particle = new Particle(x, y, radius); //새로운 인스턴스가 생성된다. new라 붙이면

function animate() {
  //animate함수가 실행되고 다시 요청하고 실행되고 매 프레임 마다 무한 실행되는 함수가 생성된 것이다
  window.requestAnimationFrame(animate);
  //console.log('실행')
  //clearRect를 통해 이전 프레임을 지우고 새로 생기고 지우고 생기고 할 수 있다.
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // x를 1px 이동시키기

  particle.draw();
}
animate();


