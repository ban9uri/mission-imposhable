let k = 400;
let stage = 800;
let mainstage = 1000;
let stamp, stamp1, stamp2;
let main;
let lock;
let layer;
let retry;
let back;
let stamps;
let title2, title3, title4;
let s1, s2, s3, s4, olds1, news1, olds2, news2, olds3, news3, olds4, news4;
let timerSound;
let fontDung, fontLab, fontScd;
let backover, retryover, nextover, nextgameover, startover, outroover;
let outroButton;
let outro = []; //outro

///////////인트로 변수/////////////////
let missonImpossible,
  intro1,
  intro2,
  intro3,
  intro4,
  intro5,
  intro6,
  intro7,
  intro8,
  intro9,
  intro10,
  intro11,
  intro12,
  intro13,
  startButton;

///////////미션1 변수/////////////////////

let mission1_main,
  mission1_explain,
  mission1_setting,
  mission1_success,
  mission1_failure,
  mission1_main2;
let ftime;
let stime;

//소리 관련 변수
let heartbeat;
//타이머 관련 변수
let y = 29;
let x = 54;
let prevMillis = 1000;
let feedback;
let change1 = 0;
let change2 = 0;

///////////미션2 변수/////////////////////

let selection = 0;
let timerStart1 = 0;
let timerLength1 = 1000;
let timerCount1;
let circleX = 4 * k * 0.2;
let circleY = (170 / 200) * k;
let circleR = (30 / 200) * k;
let colors = [0, 1, 2, 3, 4, 5];
let nameColors = [" 빨", " 주", " 노", " 초", " 파", " 보"];
let newColors;
let ps = 8;
let rows;
let cols;
let arr = [];
let transparency;
let popups = [];
let myButton;
let myInput;
let stuff;
let ranNum;
let ranTime1;
let ranTime2;
let mission2_main,
  mission2_explain,
  mission2_setting,
  mission2_warning,
  mission2_popup,
  mission2_success,
  mission2_failure,
  mission2_code,
  mission2_arrow;

//////미션3 변수////////////
let timerStart2 = 0;
let timerLength2 = 1000;
let timerCount2;
let ME3, ST3, SU3, FA3, BG3;
let subject1Arr = [
  "심라힉개론",
  "심리학개룬",
  "심리햑개론",
  "심리학개논",
  "삼리학개론",
  "심리학개른",
  "섬리학개론",
  "심리힉개론",
  "삼리학개룬",
  "심라학개론",
  "심러학개론",
  "심리학게론",
  "심리힉개론",
  "심리학개른",
  "삼리헉개론",
  "심러학개룬",
  "싱리학개론",
  "싱리학개른",
  "심리학게른",
  "심리힉개론",
];
let subject2Arr = [
  "한국어문법룬",
  "한국어문밥론",
  "한국아문법론",
  "한국어몬법론",
  "한국이문법론",
  "한국어문빕론",
  "한곡어문법론",
  "힌국어문법론",
  "한국어믄법론",
  "한국어믄빕론",
  "헌국어문법론",
  "한극어문법론",
  "한국어문빕룬",
  "한국어문밥룬",
  "한국어문빕론",
  "헌극어문법론",
  "한쿡어문법론",
  "한극어문븝론",
  "흔극으믄븝른",
  "한국어몬법론",
  "한국어믄법론",
];
let subject3Arr = [
  "정부문화기술입문",
  "정보문회기술입문",
  "정보몬화기술입문",
  "정보문화기솔입문",
  "정보문화가술입문",
  "정보믄화기술입문",
  "정브문화기술입문",
  "정보문화기술입믄",
  "정보문회기술임문",
  "정보문와기술입문",
  "정보문화기슬입문",
  "정보믄화기슬입문",
  "정보문화기솔입믄",
  "징보문화기술입문",
  "정보문화거술입문",
  "정보문화기술임문",
  "정보몬화기솔입문",
  "장보문화기술입문",
  "정보문화기술압문",
  "정보문화기술업문",
];
let subject4Arr = [
  "조션의역사적성취와유산",
  "조신의역사적성취와유산",
  "조선의역시적성취와유산",
  "조선의역시직성취와유산",
  "조선의역사적성취와윾산",
  "조선의역사적성츼와유산",
  "조선의역사적성취와유신",
  "조선의역사석정취와유산",
  "조선의역사젘성취와유산",
  "죠선의역사적성취와유산",
  "조선의약사적성취와유산",
  "조선외역사적성취와유산",
  "조선의익사적성취와유산",
  "조선의역사적싱취와유산",
  "조선의역사적성취의유산",
  "조선의역샤적성취와유산",
  "조선의역서적성취와유산",
  "조선의역서작성취와유산",
  "조선의역사적성취와윾산",
  "조산의역사적성취와유산",
];
let SCD3, SCDream;

//////미션4 변수//////////////
let sttimer = 3;
let hello;
let Game4Button;
let inp;
let answer1, answer2, answer3, answer4, answer5;
let timerStart3 = 0;
let timerLength3 = 1000;
let timerCount3;
let reassign,
  mission4_main,
  mission4_explain,
  mission4_setting,
  mission4_success,
  mission4_failure;
let stuffGame4;
let reassignover;

//////////////아웃트로 변수////////
let outro1, outro2, outro3, outro4, outro5, outro6, ending, outcome;

function preload() {
  fontDung = loadFont("assets/DungGeunMo.otf");
  fontLab = loadFont("assets/LAB디지털.ttf");
  fontScd = loadFont("assets/SCDream5.otf");
  timerSound = loadSound("music/timer.mp3");

  stamp = loadImage("assets/stamp.png");
  stamp1 = loadImage("assets/stamp1.png");
  stamp2 = loadImage("assets/stamp2.png");
  main = loadImage("assets/main.png");
  title2 = loadImage("assets/title2.png");
  title3 = loadImage("assets/title3.png");
  title4 = loadImage("assets/title4.png");
  lock = loadImage("assets/lock.png");
  layer = loadImage("assets/layer.png");
  retry = loadImage("assets/retry.png");
  back = loadImage("assets/back.png");
  backover = loadImage("assets/backover.png");
  retryover = loadImage("assets/retryover.png");
  nextover = loadImage("assets/nextover.png");
  nextgameover = loadImage("assets/nextgameover.png");
  startover = loadImage("assets/startover.png");
  outroover = loadImage("assets/outroover.png");

  ////////////////인트로////////////
  missonImpossible = loadImage("assets/첫 표지(수정).png");
  intro1 = loadImage("assets/intro1.png");
  intro2 = loadImage("assets/intro2.png");
  intro3 = loadImage("assets/intro3.png");
  intro4 = loadImage("assets/intro4.png");
  intro5 = loadImage("assets/intro5.png");
  intro6 = loadImage("assets/intro6.png");
  intro7 = loadImage("assets/intro7.png");
  intro8 = loadImage("assets/intro8.png");
  intro9 = loadImage("assets/intro9.png");
  intro10 = loadImage("assets/intro10.png");
  intro11 = loadImage("assets/intro11.png");
  intro12 = loadImage("assets/intro12.png");
  intro13 = loadImage("assets/intro13.png");
  iphone = loadSound("music/iphone.mp3");
  scream = loadSound("music/scream.mp3");
  theme = loadSound("music/Mission_Impossible.mp3");

  startButton = loadImage("assets/시작버튼.png");

  ////////////////미션1 preload///////////////
  mission1_main = loadImage("assets/게임1표지.png");
  mission1_explain = loadImage("assets/게임1방법.png");
  mission1_setting = loadImage("assets/게임1내부.png");
  mission1_success = loadImage("assets/게임1성공.png");
  mission1_failure = loadImage("assets/게임1실패.png");
  heartbeat = loadSound("music/심장박동.mp3");

  ////////////////미션2 preload//////////////
  mission2_main = loadImage("assets/mission2_main.png");
  mission2_explain = loadImage("assets/mission2_explain.png");
  mission2_setting = loadImage("assets/mission2_setting.png");
  mission2_warning = loadImage("assets/mission2_warning.png");
  mission2_popup = loadImage("assets/mission2_popup.png");
  mission2_success = loadImage("assets/mission2_success.png");
  mission2_failure = loadImage("assets/mission2_failure.png");
  mission2_code = loadImage("assets/mission2_code.png");
  mission2_arrow = loadImage("assets/화살표.png");

  ////////////미션3///////////////
  ME3 = loadImage("assets/게임방법#3.png");
  ST3 = loadImage("assets/게임표지#3.png");
  SU3 = loadImage("assets/게임성공#3.png");
  FA3 = loadImage("assets/게임실패#3.png");
  BG3 = loadImage("assets/게임#3 내부.png"); //수정필
  SCD3 = loadFont("assets/NanumGothic.ttf");
  SCDream = loadFont("assets/SCDream3.otf");

  ///////////미션4////////////////
  mission4_main = loadImage("assets/게임4표지.png");
  mission4_explain = loadImage("assets/#게임방법4.png");
  mission4_setting = loadImage("assets/게임4내부.png");
  mission4_success = loadImage("assets/게임4성공.png");
  mission4_failure = loadImage("assets/게임4실패.png");
  reassign = loadImage("assets/reassign.png");
  reassignover = loadImage("assets/reassignover.png");

  /////////아웃트로////////////////////
  for (i = 0; i < 21; i++) {
    outro[i] = loadImage("assets/outro" + (i + 1) + ".png");
  }
  outroButton = loadImage("assets/outro.png");
  ending = loadImage("assets/엔딩 크레딧 (2).png");
  outcome = loadImage("assets/결과 화면.png");
}

function setup() {
  mouseClicked();
  createCanvas(4 * k, 3 * k);
  stroke(0);


  //////////미션2 셋업//////////

  ranNum = nf(int(random(100)), 2); // 숫자코드

  // input box 만들기(레퍼런스)
  myButton = createButton("확인");
  myButton.style("font-size", "36px");
  myButton.size((100 / 200) * k, (50 / 200) * k);
  myButton.position(width / 2 - (50 / 200) * k, height * 0.675);
  myButton.mousePressed(checking);
  myInput = createInput("");
  myInput.size((145 / 200) * k, (60 / 200) * k);
  myInput.position(width / 2 - (75 / 200) * k, height * 0.525);
  myInput.style("text-align", "center");
  myInput.style("font-size", "60px");
  myInput.attribute("maxlength", "2");
  myInput.input(typing);
  stuff = "";
  myButton.hide();
  myInput.hide();

  // 블루스크린
  rows = height / ps;
  cols = width / ps;
  for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < cols; j++) {
      arr[i][j] = int(random(200, 256));
    }
  }

  ///////미션4 셋업//////////
  //입력창(입력창 그림 필요함)
  inp = createInput("");
  inp.position((170 / 200) * k, (510 / 200) * k);
  inp.size(width / 2, (30 / 200) * k);
  inp.style("font-size", "24px");
  inp.input(typing2);

  //제출버튼
  Game4Button = createButton("submit");
  Game4Button.style("font-size", "24px");
  Game4Button.position((580 / 200) * k, (510 / 200) * k);
  Game4Button.size((60 / 200) * k, (35 / 200) * k);
  Game4Button.mousePressed(doSomething);

  inp.hide();
  Game4Button.hide();

  answer1 =
    "안녕하세요, 북한학개론 강좌를 신청하고자 했던 정보문화학과 오정문입니다";
  answer2 =
    "저번학기부터, 교수님의 북한학개론 강의를 수강하기를 희망해왔습니다";
  answer3 = "하지만, 이번학기에도 수강신청에 실패하게 되었습니다";
  answer4 = "정원 외 신청을 통해서라도, 교수님의 강의를 꼭 수강하고 싶습니다";
  answer5 = "부디 첫 수업 때 뵐 수 있기를 간절히 희망합니다";

  w1 = new Word(randomX(), randomY());
  w2 = new Word(randomX(), randomY());
  w3 = new Word(randomX(), randomY());
  w4 = new Word(randomX(), randomY());
  w5 = new Word(randomX(), randomY());
  w6 = new Word(randomX(), randomY());

  mytext = "";
  stuffGame4 = "";
}

function draw() {
  millis();
  switch (stage) {
    ///////////인트로 드로우///////////
    case 800:
      background(missonImpossible);
      mouseover();
      break;
    case 801:
      background(intro1);
      break;
    case 802:
      background(intro2);
      break;
    case 803:
      background(intro3);
      break;
    case 804:
      background(intro4);
      break;
    case 805:
      background(intro5);
      break;
    case 806:
      background(intro6);
      break;
    case 807:
      background(intro7);
      break;
    case 808:
      background(intro8);
      break;
    case 809:
      background(intro9);
      break;
    case 810:
      background(intro10);
      break;
    case 811:
      background(intro11);
      break;
    case 812:
      background(intro12);
      break;
    case 813:
      background(intro13);
      break;

    ///////////미션1 드로우/////////////
    case -1:
      if (s1 == 0) {
        background(main);
        image(layer, 825, 136, 500, 374);
        image(layer, 276, 606, 500, 374);
        image(layer, 825, 606, 500, 374);
        image(lock, 1020, 220, 130, 180);
        image(lock, 470, 710, 130, 180);
        image(lock, 1020, 695, 130, 180);
        stamping();
      }
      if (s1 == 1 || s1 == 2 || s1 == 3) {
        background(main);
        stamping();
        image(title2, 880, 235, 400, 130);
        image(retry, 700, 440, 60, 60);
        image(layer, 276, 606, 500, 374);
        image(layer, 825, 606, 500, 374);
        image(lock, 470, 710, 130, 180);
        image(lock, 1020, 695, 130, 180);
        imageMode(CENTER);
        if (s1 == 3) {
          image(
            stamp1,
            (210 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (265 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (320 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s1 == 2) {
          image(
            stamp1,
            (210 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (265 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s1 == 1)
          image(
            stamp1,
            (210 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        imageMode(CORNER);
      }
      if (s2 == 1 || s2 == 2 || s2 == 3) {
        background(main);
        image(title2, 880, 235, 400, 130);
        image(title3, 330, 720, 400, 130);
        image(retry, 700, 440, 60, 60);
        image(retry, 1250, 440, 60, 60);
        image(layer, 825, 606, 500, 374);
        image(lock, 1020, 695, 130, 180);
        stamping();
        imageMode(CENTER);
        if (s2 == 3) {
          image(
            stamp1,
            (480 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (535 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (590 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s2 == 2) {
          image(
            stamp1,
            (480 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (535 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s2 == 1)
          image(
            stamp1,
            (480 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );

        if (s1 == 3) {
          image(
            stamp1,
            (210 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (265 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (320 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s1 == 2) {
          image(
            stamp1,
            (210 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (265 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s1 == 1)
          image(
            stamp1,
            (210 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        imageMode(CORNER);
      }
      if (s3 == 1 || s3 == 2 || s3 == 3) {
        background(main);
        image(title2, 880, 235, 400, 130);
        image(title3, 330, 720, 400, 130);
        image(title4, 820, 720, 500, 130);
        image(retry, 700, 440, 60, 60);
        image(retry, 1250, 440, 60, 60);
        image(retry, 700, 910, 60, 60);
        stamping();
        imageMode(CENTER);
        if (s3 == 3) {
          image(
            stamp1,
            (210 / 200) * k,
            (495 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (265 / 200) * k,
            (495 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (320 / 200) * k,
            (495 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s3 == 2) {
          image(
            stamp1,
            (210 / 200) * k,
            (495 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (265 / 200) * k,
            (495 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s3 == 1)
          image(
            stamp1,
            (210 / 200) * k,
            (495 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );

        if (s1 == 3) {
          image(
            stamp1,
            (210 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (265 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (320 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s1 == 2) {
          image(
            stamp1,
            (210 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (265 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s1 == 1)
          image(
            stamp1,
            (210 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        if (s2 == 3) {
          image(
            stamp1,
            (480 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (535 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (590 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s2 == 2) {
          image(
            stamp1,
            (480 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (535 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s2 == 1)
          image(
            stamp1,
            (480 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        imageMode(CORNER);
      }
      if (s4 == 1 || s4 == 2 || s4 == 3) {
        background(main);
        image(title2, 880, 235, 400, 130);
        image(title3, 330, 720, 400, 130);
        image(title4, 820, 720, 500, 130);
        image(retry, 700, 440, 60, 60);
        image(retry, 1250, 440, 60, 60);
        image(retry, 700, 910, 60, 60);
        image(retry, 1250, 910, 60, 60);
        image(outroButton, 1370, 1000, 200, 70);
        stamping();
        imageMode(CENTER);
        if (s4 == 3) {
          image(
            stamp1,
            (480 / 200) * k,
            (495 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (535 / 200) * k,
            (495 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (590 / 200) * k,
            (495 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s4 == 2) {
          image(
            stamp1,
            (480 / 200) * k,
            (495 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (535 / 200) * k,
            (495 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s4 == 1)
          image(
            stamp1,
            (480 / 200) * k,
            (495 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );

        if (s1 == 3) {
          image(
            stamp1,
            (210 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (265 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (320 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s1 == 2) {
          image(
            stamp1,
            (210 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (265 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s1 == 1)
          image(
            stamp1,
            (210 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        if (s2 == 3) {
          image(
            stamp1,
            (480 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (535 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (590 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s2 == 2) {
          image(
            stamp1,
            (480 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (535 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s2 == 1)
          image(
            stamp1,
            (480 / 200) * k,
            (255 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        if (s3 == 3) {
          image(
            stamp1,
            (210 / 200) * k,
            (495 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (265 / 200) * k,
            (495 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (320 / 200) * k,
            (495 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s3 == 2) {
          image(
            stamp1,
            (210 / 200) * k,
            (495 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
          image(
            stamp1,
            (265 / 200) * k,
            (495 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        }
        if (s3 == 1)
          image(
            stamp1,
            (210 / 200) * k,
            (500 / 200) * k,
            (50 / 200) * k,
            (50 / 200) * k
          );
        imageMode(CORNER);
      }
      mouseover();
      break;

    //게임1 표지
    case 0:
      background(mission1_main);
      image(
        back,
        (25 / 200) * k,
        (25 / 200) * k,
        (100 / 200) * k,
        (50 / 200) * k
      );
      mouseover();
      break;

    //게임1
    case 1:
      background(mission1_explain);
      image(
        back,
        (25 / 200) * k,
        (25 / 200) * k,
        (100 / 200) * k,
        (50 / 200) * k
      );
      mouseover();
      break;

    //게임 화면
    case 2:
      background(mission1_setting);

      //버튼
      textSize((35 / 200) * k);

      textSize((100 / 200) * k);
      fill(255);
      textAlign(CENTER, CENTER);
      let time_sec = millis() / 1000 - stime;
      let time_sec_str = nf(int((time_sec + 55) % 60), 2);
      let time_min_str = nf(29 + int((time_sec + 55) / 60), 2);
      textFont(fontLab);
      text(
        "08 : " + time_min_str + " : " + time_sec_str,
        width / 2,
        height / 2 + (30 / 200) * k
      );

      textSize((20 / 200) * k);
      fill(0);
      text(n + "/" + m, (270 / 200) * k, (210 / 200) * k);
      fill(255);
      break;
    //성공
    case 3:
      background(mission1_success);
      imageMode(CENTER);
      olds1 = s1;
      textSize((25 / 200) * k);
      let timedelta = nf(ftime - stime - 5, 0, 5);
      textFont(fontScd);
      text(timedelta + " 초 걸렸습니다", (400 / 200) * k, (430 / 200) * k);

      if (ftime - stime - 5 <= 0.25) {
        s1 = 3;
        image(stamp, width / 2, (70 / 200) * k, (80 / 200) * k, (80 / 200) * k);
        image(
          stamp,
          width / 2 + (100 / 200) * k,
          (70 / 200) * k,
          (80 / 200) * k,
          (80 / 200) * k
        );
        image(
          stamp,
          width / 2 - (100 / 200) * k,
          (70 / 200) * k,
          (80 / 200) * k,
          (80 / 200) * k
        );
      } else if (0.25 <= ftime - stime - 5 && ftime - stime - 5 <= 0.4) {
        s1 = 2;
        image(
          stamp,
          width / 2 - (50 / 200) * k,
          (70 / 200) * k,
          (80 / 200) * k,
          (80 / 200) * k
        );
        image(
          stamp,
          width / 2 + (50 / 200) * k,
          (70 / 200) * k,
          (80 / 200) * k,
          (80 / 200) * k
        );
      } else if (0.4 <= ftime - stime - 5) {
        s1 = 1;
        image(stamp, width / 2, (70 / 200) * k, (80 / 200) * k, (80 / 200) * k);
      }
      news1 = s1;
      if (olds1 <= news1) {
        s1 = news1;
      } else s1 = olds1;
      imageMode(CORNER);
      mouseover();
      break;
    //수강신청 실패
    case 4:
      background(mission1_failure);
      textFont(fontScd, (20 / 200) * k);
      let timefail1 = nf(ftime - stime - 5, 0, 5);
      text(timefail1 + " 초 걸렸습니다.", (400 / 200) * k, (450 / 200) * k);
      textFont(fontScd, (30 / 200) * k);
      text("이미 꽉 찬 강좌입니다.", width / 2, (125 / 200) * k);
      mouseover();
      break;
    //너무 빨리 눌렀을 때
    case 5:
      background(mission1_failure);
      let timefail2 = nf(ftime - stime - 5, 0, 5);
      textFont(fontScd, (20 / 200) * k);
      text(
        -timefail2 + " 초 빨리 눌렀습니다",
        (400 / 200) * k,
        (450 / 200) * k
      );
      textFont(fontScd, (30 / 200) * k);
      text("너무 빨리 눌렀어요ㅠㅠ", width / 2, (125 / 200) * k);
      mouseover();
      break;

    /////////////미션2 드로우//////////////
    case 100: // 시작화면
      background(mission2_main);
      image(
        back,
        (25 / 200) * k,
        (25 / 200) * k,
        (100 / 200) * k,
        (50 / 200) * k
      );
      mouseover();
      selection = 0;
      break;

    case 101: // 설명문
      background(mission2_explain);
      image(
        back,
        (25 / 200) * k,
        (25 / 200) * k,
        (100 / 200) * k,
        (50 / 200) * k
      );
      mouseover();
      break;

    case 102: // 픽순을 따라 게임 시작
      setting();
      timeLimit();
      if (timerCount1 == ranTime1) stage = 150;
      if (timerCount1 == ranTime2) stage = 151;
      ranNum = nf(int(random(100)), 2);
      myInput.value("");
      break;

    case 110: // 번호 코드창 띄우기
      setting();
      timeLimit();
      if (timerCount1 == ranTime1) stage = 150;
      if (timerCount1 == ranTime2) stage = 151;
      fill(0);
      imageMode(CENTER);
      image(
        mission2_code,
        width * 0.51,
        height * 0.55,
        (280 / 200) * k,
        (350 / 200) * k
      );
      imageMode(CORNER);
      textAlign(CENTER, CENTER);
      textSize((55 / 200) * k);
      textFont(fontLab);
      fill(0);
      text(ranNum, width / 2, height * 0.45);
      myButton.show();
      myInput.show();
      break;

    case 112: // 번호 맞았는지
      if (stuff == ranNum) {
        myButton.hide();
        myInput.hide();
        if (selection == 6) {
          sucTimer = timerCount1;
          stage = 194;
        } else {
          stage = 102;
        }
      } else stage = 192;
      if (timerCount1 == ranTime1) stage = 150;
      if (timerCount1 == ranTime2) stage = 151;
      break;

    case 150: // 블루스크린 띄우기
      setting();
      timeLimit();
      myButton.hide();
      myInput.hide();
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
          noStroke();
          fill(0, 0, arr[i][j] + random(-30, 30), transparency);
          rect(j * ps, i * ps, ps, ps);
          stroke(0);
        }
      }
      image(
        mission2_warning,
        width / 2 - (190 / 200) * k,
        height / 2 - (125 / 200) * k,
        (380 / 200) * k,
        (250 / 200) * k
      );
      break;

    case 151: // 팝업 띄우기
      setting();
      timeLimit();
      myButton.hide();
      myInput.hide();
      for (let popup of popups) {
        popup.pDisplay();
      }
      break;

    case 191: // 순서대로 안 눌렀을 때
      timerSound.stop();
      background(mission2_failure);
      myButton.hide();
      myInput.hide();
      fill(255);
      textFont(fontScd);
      textSize((30 / 200) * k);
      text("잘못 누르셨습니다.", width / 2, height * 0.205);
      mouseover();
      break;

    case 192: // 숫자를 잘못 입력했을 때
      timerSound.stop();
      background(mission2_failure);
      myButton.hide();
      myInput.hide();
      fill(255);
      textFont(fontScd);
      textSize((30 / 200) * k);
      text("숫자를 잘못 입력하셨습니다.", width / 2, height * 0.205);
      mouseover();
      break;

    case 193: // 제한시간이 종료되었을 때
      timerSound.stop();
      background(mission2_failure);
      myButton.hide();
      myInput.hide();
      fill(255);
      textFont(fontScd);
      textSize((30 / 200) * k);
      text("타임오버입니다.", width / 2, height * 0.205);
      mouseover();
      break;

    case 194: // 성공했을 때
      timerSound.stop();
      background(mission2_success);
      myButton.hide();
      myInput.hide();
      fill(255);
      textFont(fontScd);
      textSize((30 / 200) * k);
      olds2 = s2;
      text(
        40 - sucTimer + "  초 만에 성공했습니다!",
        width * 0.55,
        height * 0.72
      );
      mouseover();
      imageMode(CENTER);
      if (sucTimer > 14) {
        s2 = 3;
        image(stamp, width / 2, (70 / 200) * k, (80 / 200) * k, (80 / 200) * k);
        image(
          stamp,
          width / 2 + (100 / 200) * k,
          (70 / 200) * k,
          (80 / 200) * k,
          (80 / 200) * k
        );
        image(
          stamp,
          width / 2 - (100 / 200) * k,
          (70 / 200) * k,
          (80 / 200) * k,
          (80 / 200) * k
        );
      }
      if (7 <= sucTimer && sucTimer <= 14) {
        s2 = 2;
        image(
          stamp,
          width / 2 - (50 / 200) * k,
          (70 / 200) * k,
          (80 / 200) * k,
          (80 / 200) * k
        );
        image(
          stamp,
          width / 2 + (50 / 200) * k,
          (70 / 200) * k,
          (80 / 200) * k,
          (80 / 200) * k
        );
      }
      if (sucTimer < 7) {
        s2 = 1;
        image(stamp, width / 2, (70 / 200) * k, (80 / 200) * k, (80 / 200) * k);
      }
      imageMode(CORNER);
      news2 = s2;
      if (olds2 <= news2) {
        s2 = news2;
      } else s2 = olds2;

      break;

    //////////미션3 드로우/////////
    case 200: //시작화면
      image(ST3, 0, 0, width, height);
      image(
        back,
        (25 / 200) * k,
        (25 / 200) * k,
        (100 / 200) * k,
        (50 / 200) * k
      );
      mouseover();
      break;
    ////////////////////////////////
    case 201: //심개
      textAlign(LEFT, CENTER);
      textSize(0.12 * k);
      image(BG3, 0, 0, width, height);
      timeCount();
      textFont(SCD3);
      for (let i = 0; i < 4; i++) {
        text(subject1Arr[i], (width * i) / 4 + 0.2 * k, k);
      }
      for (let i = 4; i < 8; i++) {
        text(
          subject1Arr[i],
          (width * (i - 4)) / 4 + 0.2 * k,
          k + 0.375 * k * 1
        );
      }
      for (let i = 8; i < 12; i++) {
        text(
          subject1Arr[i],
          (width * (i - 8)) / 4 + 0.2 * k,
          k + 0.375 * k * 2
        );
      }
      for (let i = 12; i < 16; i++) {
        text(
          subject1Arr[i],
          (width * (i - 12)) / 4 + 0.2 * k,
          k + 0.365 * k * 3
        );
      }
      for (let i = 16; i < 20; i++) {
        text(
          subject1Arr[i],
          (width * (i - 16)) / 4 + 0.2 * k,
          k + 0.365 * k * 4
        );
      }
      noStroke();
      fill(255);
      rect(
        (width * p1) / 4 + 0.05 * k,
        0.36 * k * q1 + k - 40,
        0.88 * k,
        0.23 * k
      );
      fill(0);
      text("심리학개론", (width * p1) / 4 + 0.2 * k, 0.36 * k * q1 + k);
      break;

    case 203: //심개 실패
      image(FA3, 0, 0, width, height);
      fill(255);
      textSize(0.12 * k);
      textFont(SCDream);
      text(
        "눈 크게 뜨고, 올바른 과목명을 찾아보세요!",
        (210 / 200) * k,
        (125 / 200) * k
      );
      mouseover();
      break;
    /////////////////////////////////
    case 211: //문법
      textAlign(LEFT, CENTER);
      textSize(0.12 * k);
      image(BG3, 0, 0, width, height);
      timeCount();
      textFont(SCD3);
      for (let i = 0; i < 4; i++) {
        text(subject2Arr[i], (width * i) / 4 + 0.12 * k, k);
      }
      for (let i = 4; i < 8; i++) {
        text(
          subject2Arr[i],
          (width * (i - 4)) / 4 + 0.12 * k,
          k + 0.375 * k * 1
        );
      }
      for (let i = 8; i < 12; i++) {
        text(
          subject2Arr[i],
          (width * (i - 8)) / 4 + 0.12 * k,
          k + 0.375 * k * 2
        );
      }
      for (let i = 12; i < 16; i++) {
        text(
          subject2Arr[i],
          (width * (i - 12)) / 4 + 0.12 * k,
          k + 0.365 * k * 3
        );
      }
      for (let i = 16; i < 20; i++) {
        text(
          subject2Arr[i],
          (width * (i - 16)) / 4 + 0.12 * k,
          k + 0.365 * k * 4
        );
      }
      noStroke();
      fill(255);
      rect(
        (width * p2) / 4 + 0.05 * k,
        0.36 * k * q2 + k - 40,
        0.88 * k,
        0.23 * k
      );
      fill(0);
      text("한국어문법론", (width * p2) / 4 + 0.12 * k, 0.36 * k * q2 + k);

      break;

    case 213: //실패
      image(FA3, 0, 0, width, height);
      fill(255);
      textSize(0.12 * k);
      textFont(SCDream);
      text(
        "눈 크게 뜨고, 올바른 과목명을 찾아보세요!",
        (210 / 200) * k,
        (125 / 200) * k
      );
      mouseover();
      break;
    ///////////////////////////////////
    case 221: //정문
      image(BG3, 0, 0, width, height);
      timeCount();
      textFont(SCD3);
      textAlign(LEFT, CENTER);
      textSize(0.1 * k);
      for (let i = 0; i < 4; i++) {
        text(subject3Arr[i], (width * i) / 4 + 0.1 * k, k);
      }
      for (let i = 4; i < 8; i++) {
        text(
          subject3Arr[i],
          (width * (i - 4)) / 4 + 0.1 * k,
          k + 0.375 * k * 1
        );
      }
      for (let i = 8; i < 12; i++) {
        text(
          subject3Arr[i],
          (width * (i - 8)) / 4 + 0.1 * k,
          k + 0.375 * k * 2
        );
      }
      for (let i = 12; i < 16; i++) {
        text(
          subject3Arr[i],
          (width * (i - 12)) / 4 + 0.1 * k,
          k + 0.365 * k * 3
        );
      }
      for (let i = 16; i < 20; i++) {
        text(
          subject3Arr[i],
          (width * (i - 16)) / 4 + 0.1 * k,
          k + 0.365 * k * 4
        );
      }
      noStroke();
      fill(255);
      rect(
        (width * p3) / 4 + 0.05 * k,
        0.36 * k * q3 + k - 40,
        0.88 * k,
        0.23 * k
      );
      fill(0);
      text("정보문화기술입문", (width * p3) / 4 + 0.1 * k, 0.36 * k * q3 + k);
      break;
    case 223: //실패
      image(FA3, 0, 0, width, height);
      fill(255);
      textSize(0.12 * k);
      textFont(SCDream);
      text(
        "눈 크게 뜨고, 올바른 과목명을 찾아보세요!",
        (210 / 200) * k,
        (125 / 200) * k
      );
      mouseover();
      break;

    ////////////////////////////////
    case 231: //조선
      image(BG3, 0, 0, width, height);
      timeCount();
      textFont(SCD3);
      textAlign(LEFT, CENTER);
      textSize(0.08 * k);

      for (let i = 0; i < 4; i++) {
        text(subject4Arr[i], (width * i) / 4 + 0.06 * k, k);
      }
      for (let i = 4; i < 8; i++) {
        text(
          subject4Arr[i],
          (width * (i - 4)) / 4 + 0.06 * k,
          k + 0.375 * k * 1
        );
      }
      for (let i = 8; i < 12; i++) {
        text(
          subject4Arr[i],
          (width * (i - 8)) / 4 + 0.06 * k,
          k + 0.375 * k * 2
        );
      }
      for (let i = 12; i < 16; i++) {
        text(
          subject4Arr[i],
          (width * (i - 12)) / 4 + 0.06 * k,
          k + 0.365 * k * 3
        );
      }
      for (let i = 16; i < 20; i++) {
        text(
          subject4Arr[i],
          (width * (i - 16)) / 4 + 0.06 * k,
          k + 0.365 * k * 4
        );
      }
      noStroke();
      fill(255);
      rect(
        (width * p4) / 4 + 0.05 * k,
        0.36 * k * q4 + k - 40,
        0.88 * k,
        0.23 * k
      );
      fill(0);
      text(
        "조선의역사적성취와유산",
        (width * p4) / 4 + 0.05 * k,
        0.36 * k * q4 + k
      );
      break;

    case 232: //성공
      timerSound.stop();
      image(SU3, 0, 0, width, height);
      mouseover();
      olds3 = s3;
      imageMode(CENTER);
      if (timerCount2 >= 10) {
        s3 = 3;
        image(stamp, width / 2, (70 / 200) * k, (80 / 200) * k, (80 / 200) * k);
        image(
          stamp,
          width / 2 + (100 / 200) * k,
          (70 / 200) * k,
          (80 / 200) * k,
          (80 / 200) * k
        );
        image(
          stamp,
          width / 2 - (100 / 200) * k,
          (70 / 200) * k,
          (80 / 200) * k,
          (80 / 200) * k
        );
      } else if (timerCount2 < 10 && timerCount2 >= 5) {
        s3 = 2;
        image(
          stamp,
          width / 2 - (50 / 200) * k,
          (70 / 200) * k,
          (80 / 200) * k,
          (80 / 200) * k
        );
        image(
          stamp,
          width / 2 + (50 / 200) * k,
          (70 / 200) * k,
          (80 / 200) * k,
          (80 / 200) * k
        );
      } else if (timerCount2 < 5) {
        s3 = 1;
        image(stamp, width / 2, (70 / 200) * k, (80 / 200) * k, (80 / 200) * k);
      }
      fill(255);
      textFont(SCDream);
      textSize((30 / 200) * k);
      text(
        45 - timerCount2 + "초 걸리셨습니다!",
        (280 / 200) * k,
        (435 / 200) * k
      );
      imageMode(CORNER);
      news3 = s3;
      if (olds3 <= news3) {
        s3 = news3;
      } else s3 = olds3;
      break;

    case 233: //실패
      image(FA3, 0, 0, width, height);
      fill(255);
      textSize(0.12 * k);
      textFont(SCDream);
      text(
        "눈 크게 뜨고, 올바른 과목명을 찾아보세요!",
        (210 / 200) * k,
        (125 / 200) * k
      );
      mouseover();
      break;

    case 240: //시간 실패
      image(FA3, 0, 0, width, height);
      fill(255);
      textFont(SCDream);
      textSize(0.12 * k);
      text("시간이 다 지났습니다!", (265 / 200) * k, (130 / 200) * k);
      mouseover();
      break;
    case 250: //게임 방법
      image(ME3, 0, 0, width, height);
      image(
        back,
        (25 / 200) * k,
        (25 / 200) * k,
        (100 / 200) * k,
        (50 / 200) * k
      );
      mouseover();
      break;

    ////////////미션4 드로우////////////
    case 300: // 시작화면
      background(mission4_main);
      image(
        back,
        (25 / 200) * k,
        (25 / 200) * k,
        (100 / 200) * k,
        (50 / 200) * k
      );
      timerCount3 = 100;
      mouseover();
      break;
    case 301: //게임4설명
      background(mission4_explain);
      image(
        back,
        (25 / 200) * k,
        (25 / 200) * k,
        (100 / 200) * k,
        (50 / 200) * k
      );
      mouseover();
      break;

    case 302: //게임4인터페이스
      Game4Button.show();
      inp.show();
      fill(0);
      background(mission4_setting);
      textFont(fontScd);
      textSize((20 / 200) * k);
      textAlign();
      w1.texts("안녕하세요,");
      w2.texts("북한학개론");
      w3.texts("강좌를");
      w4.texts("신청하고자 했던");
      w5.texts("정보문화학과");
      w6.texts("오정문입니다");
      // 타이머
      timeDecreasing();
      mouseover();
      break;

    case 303: //1번문제 확인
      if (stuffGame4 == answer1) {
        stage += 2;
        inp.value("");
      } else {
        stage += 1;
        inp.value("");
      }
      break;

    case 304: //1번 문제 실패
      background(mission4_failure);
      fill(255);
      textFont(fontScd);
      text("잘못 입력하셨습니다", (400 / 200) * k, (130 / 200) * k);
      inp.hide();
      Game4Button.hide();
      mouseover();
      break;

    case 305: // 2번 문제
      Game4Button.show();
      inp.show();
      fill(0);
      background(mission4_setting);
      textFont(fontScd);
      textSize((20 / 200) * k);
      textAlign();
      w1.texts("저번학기부터,");
      w2.texts("교수님의");
      w3.texts("북한학개론 ");
      w4.texts("강의를");
      w5.texts("수강하기를");
      w6.texts("희망해왔습니다");
      // 타이머
      timeDecreasing();
      mouseover();
      break;
    case 306: //2번 문제 확인
      if (stuffGame4 == answer2) {
        stage += 2;
        inp.value("");
      } else {
        stage += 1;
        inp.value("");
      }
      break;

    case 307: //2번 문제 실패
      background(mission4_failure);
      fill(255);
      textFont(fontScd);
      text("잘못 입력하셨습니다", (400 / 200) * k, (130 / 200) * k);
      inp.hide();
      Game4Button.hide();
      mouseover();
      break;
    case 308: //3번 문제
      Game4Button.show();
      inp.show();
      fill(0);
      background(mission4_setting);
      textFont(fontScd);
      textSize((20 / 200) * k);
      textAlign();
      w1.texts("하지만,");
      w2.texts("이번학기에도");
      w3.texts("수강신청에");
      w4.texts("실패하게");
      w5.texts("되었습니다");

      // 타이머
      timeDecreasing();
      mouseover();
      break;
    case 309: //'Easy'3번 문제 확인
      if (stuffGame4 == answer3) {
        stage += 2;
        inp.value("");
      } else {
        stage += 1;
        inp.value("");
      }
      break;

    case 310: //3번 문제 실패
      background(mission4_failure);
      fill(255);
      textFont(fontScd);
      text("잘못 입력하셨습니다", (400 / 200) * k, (130 / 200) * k);
      inp.hide();
      Game4Button.hide();
      mouseover();
      break;
    case 311: //4번 문제
      Game4Button.show();
      inp.show();
      fill(0);
      background(mission4_setting);
      textFont(fontScd);
      textSize((20 / 200) * k);
      textAlign();
      w1.texts("정원 외 신청을");
      w2.texts("통해서라도,");
      w3.texts("교수님의");
      w4.texts("강의를");
      w5.texts("꼭 수강하고");
      w6.texts("싶습니다");
      // 타이머
      timeDecreasing();
      mouseover();
      break;
    case 312:
      if (stuffGame4 == answer4) {
        stage += 2;
        inp.value("");
      } else {
        stage += 1;
        inp.value("");
      }
      break;

    case 313: //4번 문제 실패
      background(mission4_failure);
      fill(255);
      textFont(fontScd);
      text("잘못 입력하셨습니다", (400 / 200) * k, (130 / 200) * k);
      inp.hide();
      Game4Button.hide();
      mouseover();
      break;
    case 314: //5번 문제
      Game4Button.show();
      inp.show();
      fill(0);
      background(mission4_setting);
      textFont(fontScd);
      textSize((20 / 200) * k);
      textAlign();
      w1.texts("부디");
      w2.texts("첫 수업 때");
      w3.texts("뵐 수 있기를");
      w4.texts("간절히");
      w5.texts("희망합니다");

      timeDecreasing();
      mouseover();
      break;
    case 315: //5번문제 확인
      if (stuffGame4 == answer5) {
        stage += 2;
        inp.value("");
      } else {
        stage += 1;
        inp.value("");
      }
      break;
    case 316: //5번 문제 실패
      background(mission4_failure);
      fill(255);
      textFont(fontScd);
      text("잘못 입력하셨습니다", (400 / 200) * k, (130 / 200) * k);
      inp.hide();
      Game4Button.hide();
      mouseover();
      break;
    case 317: //5번 문제 성공
      timerSound.stop();
      background(mission4_success);
      inp.hide();
      Game4Button.hide();
      fill(255);
      textFont(fontScd);
      text(
        100 - timerCount3 + " 초 걸렸습니다!",
        (400 / 200) * k,
        (430 / 200) * k
      );
      fill(0);
      imageMode(CENTER);
      if (timerCount3 > 20) {
        s4 = 3;
        image(stamp, width / 2, (70 / 200) * k, (80 / 200) * k, (80 / 200) * k);
        image(
          stamp,
          width / 2 + (100 / 200) * k,
          (70 / 200) * k,
          (80 / 200) * k,
          (80 / 200) * k
        );
        image(
          stamp,
          width / 2 - (100 / 200) * k,
          (70 / 200) * k,
          (80 / 200) * k,
          (80 / 200) * k
        );
      } else if (10 < timerCount3 && timerCount3 <= 20) {
        s4 = 2;
        image(
          stamp,
          width / 2 - (50 / 200) * k,
          (70 / 200) * k,
          (80 / 200) * k,
          (80 / 200) * k
        );
        image(
          stamp,
          width / 2 + (50 / 200) * k,
          (70 / 200) * k,
          (80 / 200) * k,
          (80 / 200) * k
        );
      } else if (0 < timerCount3 && timerCount3 <= 10) {
        s4 = 1;
        image(stamp, width / 2, (70 / 200) * k, (80 / 200) * k, (80 / 200) * k);
      }
      imageMode(CORNER);
      break;

    case 398: //타임 오버
      timerSound.stop();
      background(mission4_failure);
      fill(255);
      textFont(fontScd);
      text("제한시간이 끝났습니다", (400 / 200) * k, (130 / 200) * k);
      inp.hide();
      Game4Button.hide();
      mouseover();
      break;

    //////////////아웃트로 드로우///////////
    case 900:
      background(outro[0]);
      break;
    case 901:
      background(outro[1]);
      break;
    case 902:
      background(outro[2]);
      break;
    case 903:
      background(outro[3]);
      break;
    case 904:
      background(outro[4]);
      break;
    case 905:
      background(outro[5]);
      break;
    case 906:
      background(outro[6]);
      break;
    case 907:
      background(outro[7]);
      break;
    case 908:
      background(outro[8]);
      break;
    case 909:
      background(outro[9]);
      break;
    case 910:
      background(outro[10]);
      break;
    case 911:
      background(outro[11]);
      break;
    case 912:
      background(outro[12]);
      break;
    case 913:
      background(outro[13]);
      break;
    case 914:
      background(outro[14]);
      break;
    case 915:
      background(outro[15]);
      break;
    case 916:
      background(outro[16]);
      break;
    case 917:
      background(outro[17]);
      break;
    case 918:
      background(outro[18]);
      break;
    case 919:
      background(outro[19]);
      break;
    case 920:
      background(outro[20]);
      break;

    case 921:
      background(255);
      image(outcome, 0, 0, width, height);
      stamps = s1 + s2 + s3 + s4;
      fill(255);
      textSize((30 / 200) * k);
      textFont(fontDung);
      textAlign(CENTER, CENTER);
      text("당신이 모은 도장의 개수는? " + stamps, width / 2, (30 / 200) * k);
      textSize((40 / 200) * k);
      if (4 <= stamps && stamps <= 5)
        text("초과학기 예정자", width / 2, (105 / 200) * k);
      if (6 <= stamps && stamps <= 10)
        text("수련 필요", width / 2, (105 / 200) * k);
      if (11 <= stamps && stamps <= 12)
        text("프로올클러", width / 2, (105 / 200) * k);

      break;
    case 922:
      background(ending);
      break;
  }
}

function mouseClicked() {
  switch (stage) {
    //////////////인트로 마우스클릭//////////
    case 800:
      theme.play();
      if (
        (290 / 200) * k <= mouseX &&
        mouseX <= (510 / 200) * k &&
        (455 / 200) * k <= mouseY &&
        mouseY <= (515 / 200) * k
      ) {
        theme.stop();
        stage = 801;
      }

      break;
    case 801:
      iphone.play();
      stage = 802;
      break;
    case 802:
      stage = 803;
      break;
    case 803:
      stage = 804;
      break;
    case 804:
      stage = 805;
      break;
    case 805:
      stage = 806;
      break;
    case 806:
      stage = 807;
      break;
    case 807:
      stage = 808;
      break;
    case 808:
      iphone.stop();
      scream.play();
      stage = 809;
      break;
    case 809:
      scream.stop();
      stage = 810;
      break;
    case 810:
      stage = 811;
      break;
    case 811:
      stage = 812;
      break;
    case 812:
      stage = 813;
      break;
    case 813:
      s1 = 0;
      s2 = 0;
      s3 = 0;
      s4 = 0;
      stage = -1;
      break;

    //////////////미션1 마우스클릭//////////
    case -1:
      if (
        mouseX >= (137 / 200) * k && //->game1
        mouseX <= (137 / 200) * k + (250 / 200) * k &&
        mouseY >= (67 / 200) * k &&
        mouseY <= (67 / 200) * k + (185 / 200) * k
      )
        stage = 0;

      if (
        (s1 == 1 || s1 == 2 || s1 == 3) &&
        mouseX >= (410 / 200) * k && //->game2
        mouseX <= (1410 / 200) * k + (250 / 200) * k &&
        mouseY >= (67 / 200) * k &&
        mouseY <= (67 / 200) * k + (185 / 200) * k
      )
        stage = 100;

      if (
        (s2 == 1 || s2 == 2 || s2 == 3) &&
        mouseX >= (137 / 200) * k && //->game3
        mouseX <= (137 / 200) * k + (250 / 200) * k &&
        mouseY >= (310 / 200) * k &&
        mouseY <= (310 / 200) * k + (185 / 200) * k
      )
        stage = 200;

      if (
        (s3 == 1 || s3 == 2 || s3 == 3) &&
        mouseX >= (410 / 200) * k && //->game4
        mouseX <= (410 / 200) * k + (250 / 200) * k &&
        mouseY >= (310 / 200) * k &&
        mouseY <= (310 / 200) * k + (185 / 200) * k
      )
        stage = 300;

      if (
        (s4 == 1 || s4 == 2 || s4 == 3) &&
        (685 / 200) * k <= mouseX &&
        mouseX <= (785 / 200) * k &&
        (500 / 200) * k <= mouseY &&
        mouseY <= (535 / 200) * k
      )
        stage = 900;

      if (1540 <= mouseX && mouseX <= 1600 * k && 0 <= mouseY && mouseY <= 60) {
        stage = 800;
      }
      break;
    case 0:
      m = int(random(100, 50));
      n = int(random(100, 150));
      time = (150 - n) / m;
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (420 / 200) * k <= mouseY &&
        (480 / 200) * k >= mouseY
      ) {
        stage = 1;
      } else if (
        (25 / 200) * k <= mouseX &&
        (120 / 200) * k >= mouseX &&
        (25 / 200) * k <= mouseY &&
        (70 / 200) * k >= mouseY
      ) {
        stage = -1;
      }
      //설명서로 넘어감
      break;
    case 1:
      if (
        (290 / 200) * k <= mouseX &&
        (510 / 200) * k >= mouseX &&
        (485 / 200) * k <= mouseY &&
        (545 / 200) * k >= mouseY
      ) {
        stage = 2;
        heartbeat.play();
      } else if (
        (25 / 200) * k <= mouseX &&
        (120 / 200) * k >= mouseX &&
        (25 / 200) * k <= mouseY &&
        (70 / 200) * k >= mouseY
      ) {
        stage = 0;
      }
      stime = millis() / 1000;
      break;
    case 2:
      heartbeat.stop();
      if (
        (330 / 200) * k <= mouseX &&
        (470 / 200) * k >= mouseX &&
        (470 / 200) * k <= mouseY &&
        mouseY <= (510 / 200) * k
      ) {
        ftime = millis() / 1000;
        if (5 <= ftime - stime && ftime - stime <= 5.6 + time) {
          stage = 3;
        } else if (ftime - stime > 5.6 + time) {
          stage = 4;
        } else if (ftime - stime < 5) {
          stage = 5;
        }
      }
      break;
    case 3:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (486 / 200) * k <= mouseY &&
        mouseY <= (545 / 200) * k
      ) {
        stage = -1;
        x = 54;
        y = 29;
      }

      //4컷화면
      break;
    case 4:
      if (
        (290 / 200) * k <= mouseX &&
        (510 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        (540 / 200) * k >= mouseY
      ) {
        stage = 0;
        x = 54;
        y = 29;
      }
      break;
    case 5:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        mouseY <= (540 / 200) * k
      ) {
        stage = 0;
        x = 54;
        y = 29;
      }
      break;
    ////////////미션2 마우스클릭////////////
    case 100:
      if (
        width / 2 - (110 / 200) * k < mouseX &&
        mouseX < width / 2 + (110 / 200) * k &&
        height * 0.75 - (30 / 200) * k < mouseY &&
        mouseY < height * 0.75 + (30 / 200) * k
      )
        stage = 101;
      // 설명문으로
      else if (
        (25 / 200) * k <= mouseX &&
        (120 / 200) * k >= mouseX &&
        (25 / 200) * k <= mouseY &&
        (70 / 200) * k >= mouseY
      )
        stage = -1;

      break;
    case 101:
      newColors = [];
      shuffling();
      timerCount1 = 40;
      transparency = 255;
      if (
        width / 2 - (110 / 200) * k < mouseX &&
        mouseX < width / 2 + (110 / 200) * k &&
        (height * 51) / 60 - (30 / 200) * k < mouseY &&
        mouseY < (height * 51) / 60 + (30 / 200) * k
      ) {
        ranTime1 = int(random(32, 34));
        ranTime2 = int(random(20, 23));
        for (let i = 0; i < 6; i++) {
          popups[i] = new Popup(random(width * 0.9), random(height * 0.9));
        }
        timerSound.play();
        stage = 102; // 게임시작
      } else if (
        (25 / 200) * k <= mouseX &&
        (120 / 200) * k >= mouseX &&
        (25 / 200) * k <= mouseY &&
        (70 / 200) * k >= mouseY
      ) {
        stage = 100;
      }
      break;
    case 102:
      if (250 <= mouseX && mouseX <= 390 && 270 <= mouseY && mouseY <= 1060) {
        pickSoon();
      }
      if (1540 <= mouseX && mouseX <= 1600 * k && 0 <= mouseY && mouseY <= 60) {
        timerSound.stop();
        stage = 800;
      }
      break;
    case 111:
      stage = 112;
      selection += 1;
      break;
    case 151:
      for (let i = popups.length - 1; i >= 0; i--) {
        if (popups[i].check1()) {
          popoups = popups.splice(i, 1);
          break;
        } else if (popups[i].check2()) {
          break;
        }
      }
      if (popups.length == 0) stage = 102;
      break;
    case 191:
      if (
        (290 / 200) * k < mouseX &&
        mouseX < (505 / 200) * k &&
        (480 / 200) * k < mouseY &&
        mouseY < (540 / 200) * k
      ) {
        stage = 100;
      }
      break;
    case 192:
      if (
        (290 / 200) * k < mouseX &&
        mouseX < (505 / 200) * k &&
        (480 / 200) * k < mouseY &&
        mouseY < (540 / 200) * k
      ) {
        stage = 100;
      }
      break;
    case 193:
      if (
        (290 / 200) * k < mouseX &&
        mouseX < (505 / 200) * k &&
        (480 / 200) * k < mouseY &&
        mouseY < (540 / 200) * k
      ) {
        stage = 100;
      }
      break;
    case 194:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (486 / 200) * k <= mouseY &&
        mouseY <= (545 / 200) * k
      ) {
        stage = -1;
      }
      break;

    ///////////미션3 마우스클릭/////////
    case 200:
      M3_shuffle_1();
      if (
        (297 / 200) * k < mouseX &&
        mouseX < (297 / 200) * k + k &&
        (425 / 200) * k < mouseY &&
        mouseY < (425 / 200) * k + (55 / 200) * k
      )
        stage = 250;
      else if (
        (25 / 200) * k <= mouseX &&
        (120 / 200) * k >= mouseX &&
        (25 / 200) * k <= mouseY &&
        (70 / 200) * k >= mouseY
      ) {
        stage = -1;
      }
      break;

    case 250:
      if (
        width / 2 - (110 / 200) * k < mouseX &&
        mouseX < width / 2 + (110 / 200) * k &&
        (height * 51) / 60 - (30 / 200) * k < mouseY &&
        mouseY < (height * 51) / 60 + (30 / 200) * k
      ) {
        timerCount2 = 45;
        timerSound.play();
        stage = 201;
      } else if (
        (25 / 200) * k <= mouseX &&
        (120 / 200) * k >= mouseX &&
        (25 / 200) * k <= mouseY &&
        (70 / 200) * k >= mouseY
      ) {
        stage = 200;
      }
      break;

    ////////////////////////////////
    case 201: //심개
      M3_shuffle_2();
      if (
        mouseX >= (width * p1) / 4 + 0.05 * k &&
        mouseX <= (width * p1) / 4 + 0.05 * k + 0.9 * k &&
        mouseY >= 0.36 * k * q1 + k - 23 &&
        mouseY <= 0.36 * k * q1 + k - 23 + 0.25 * k
      ) {
        stage = 211;
      } else {
        stage = 203;
      }
      if (1540 <= mouseX && mouseX <= 1600 * k && 0 <= mouseY && mouseY <= 60) {
        timerSound.stop();
        stage = 800;
      }
      break;

    case 203: //심개실패
      if (
        (290 / 200) * k < mouseX &&
        mouseX < (505 / 200) * k &&
        (480 / 200) * k < mouseY &&
        mouseY < (540 / 200) * k
      ) {
        M3_shuffle_1();
        stage = 201;
      }
      break;

    ////////////////////////////////
    case 211: //문법
      M3_shuffle_3();
      if (
        mouseX >= (width * p2) / 4 + 0.05 * k &&
        mouseX <= (width * p2) / 4 + 0.05 * k + 0.9 * k &&
        mouseY >= 0.36 * k * q2 + k - 23 &&
        mouseY <= 0.36 * k * q2 + k - 23 + 0.25 * k
      ) {
        stage = 221;
      } else {
        stage = 213;
      }
      if (1540 <= mouseX && mouseX <= 1600 * k && 0 <= mouseY && mouseY <= 60) {
        timerSound.stop();
        stage = 800;
      }
      break;

    case 213: //정문실패
      if (
        (290 / 200) * k < mouseX &&
        mouseX < (505 / 200) * k &&
        (480 / 200) * k < mouseY &&
        mouseY < (540 / 200) * k
      ) {
        M3_shuffle_1();
        stage = 211;
      }
      break;
    ///////////////////////////////////
    case 221: //정문
      M3_shuffle_4();
      if (
        mouseX >= (width * p3) / 4 + 0.05 * k &&
        mouseX <= (width * p3) / 4 + 0.05 * k + 0.9 * k &&
        mouseY >= 0.36 * k * q3 + k - 23 &&
        mouseY <= 0.36 * k * q3 + k - 23 + 0.25 * k
      ) {
        stage = 231;
      } else {
        stage = 223;
      }
      if (1540 <= mouseX && mouseX <= 1600 * k && 0 <= mouseY && mouseY <= 60) {
        timerSound.stop();
        stage = 800;
      }
      break;

    case 223: //정문실패
      if (
        (290 / 200) * k < mouseX &&
        mouseX < (505 / 200) * k &&
        (480 / 200) * k < mouseY &&
        mouseY < (540 / 200) * k
      ) {
        M3_shuffle_1();
        stage = 221;
      }
      break;

    ///////////////////////////////////
    case 231: //조선
      if (
        mouseX >= (width * p4) / 4 + 0.05 * k &&
        mouseX <= (width * p4) / 4 + 0.05 * k + 0.9 * k &&
        mouseY >= 0.36 * k * q4 + k - 23 &&
        mouseY <= 0.36 * k * q4 + k - 23 + 0.25 * k
      ) {
        stage = 232;
      } else {
        stage = 233;
      }
      if (1540 <= mouseX && mouseX <= 1600 * k && 0 <= mouseY && mouseY <= 60) {
        timerSound.stop();
        stage = 800;
      }
      break;

    case 232: //조선성공
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (486 / 200) * k <= mouseY &&
        mouseY <= (545 / 200) * k
      ) {
        stage = -1;
      }
      break;

    case 233: //조선실패
      if (
        (290 / 200) * k < mouseX &&
        mouseX < (505 / 200) * k &&
        (480 / 200) * k < mouseY &&
        mouseY < (540 / 200) * k
      ) {
        M3_shuffle_1();
        stage = 231;
      }
      break;

    case 240: //시간실패
      if (
        (290 / 200) * k < mouseX &&
        mouseX < (505 / 200) * k &&
        (480 / 200) * k < mouseY &&
        mouseY < (540 / 200) * k
      ) {
        stage = 200;
        timerCount2 = 45;
      }
      break;

    ///////////미션4 마우스클릭////////////
    case 300:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (420 / 200) * k <= mouseY &&
        (480 / 200) * k >= mouseY
      ) {
        stage = 301;
      } else if (
        (25 / 200) * k <= mouseX &&
        (120 / 200) * k >= mouseX &&
        (25 / 200) * k <= mouseY &&
        (70 / 200) * k >= mouseY
      ) {
        stage = -1;
      }
      break;
    case 301:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (485 / 200) * k <= mouseY &&
        (545 / 200) * k >= mouseY
      ) {
        timerSound.play();
        stage = 302;
      } else if (
        (25 / 200) * k <= mouseX &&
        (120 / 200) * k >= mouseX &&
        (25 / 200) * k <= mouseY &&
        (70 / 200) * k >= mouseY
      ) {
        stage = 300;
      }
      break;
    case 302: //1번 문제
      if (
        (50 / 200) * k <= mouseX &&
        mouseX <= (125 / 200) * k &&
        (100 / 200) * k <= mouseY &&
        mouseY <= (130 / 200) * k
      ) {
        mixing();
        stage = 302;
      }
      if (1540 <= mouseX && mouseX <= 1600 * k && 0 <= mouseY && mouseY <= 60) {
        timerSound.stop();
        stage = 800;
        inp.hide();
        Game4Button.hide();
      }
      break;

    case 304: //1번문제 실패
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        (540 / 200) * k >= mouseY
      ) {
        mixing();
        stage = 302;
      }
      break;
    case 305: //2번 문제
      if (
        (50 / 200) * k <= mouseX &&
        mouseX <= (125 / 200) * k &&
        (100 / 200) * k <= mouseY &&
        mouseY <= (130 / 200) * k
      ) {
        mixing();
        stage = 305;
        inp.hide();
        Game4Button.hide();
      }
      if (1540 <= mouseX && mouseX <= 1600 * k && 0 <= mouseY && mouseY <= 60) {
        timerSound.stop();
        stage = 800;
      }
      break;

    case 307: //2번문제 실패
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        (540 / 200) * k >= mouseY
      ) {
        mixing();
        stage = 305;
      }
      break;
    case 308: //3번문제
      if (
        (50 / 200) * k <= mouseX &&
        mouseX <= (125 / 200) * k &&
        (100 / 200) * k <= mouseY &&
        mouseY <= (130 / 200) * k
      ) {
        mixing();
        stage = 308;
      }
      if (1540 <= mouseX && mouseX <= 1600 * k && 0 <= mouseY && mouseY <= 60) {
        timerSound.stop();
        stage = 800;
        inp.hide();
        Game4Button.hide();
      }
      break;

    case 310: //3번문제 실패
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        (540 / 200) * k >= mouseY
      ) {
        mixing();
        stage = 308;
      }
      break;
    case 311: //4번문제
      if (
        (50 / 200) * k <= mouseX &&
        mouseX <= (125 / 200) * k &&
        (100 / 200) * k <= mouseY &&
        mouseY <= (130 / 200) * k
      ) {
        mixing();
        stage = 311;
      }
      if (1540 <= mouseX && mouseX <= 1600 * k && 0 <= mouseY && mouseY <= 60) {
        timerSound.stop();
        stage = 800;
        inp.hide();
        Game4Button.hide();
      }
      break;

    case 313: //4번문제 실패
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        (540 / 200) * k >= mouseY
      ) {
        mixing();
        stage = 311;
      }
      break;
    case 314: //5번문제
      if (
        (50 / 200) * k <= mouseX &&
        mouseX <= (125 / 200) * k &&
        (100 / 200) * k <= mouseY &&
        mouseY <= (130 / 200) * k
      ) {
        mixing();
        stage = 314;
      }
      if (1540 <= mouseX && mouseX <= 1600 * k && 0 <= mouseY && mouseY <= 60) {
        timerSound.stop();
        stage = 800;
        inp.hide();
        Game4Button.hide();
      }
      break;

    case 316: //5번문제 실패
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        (540 / 200) * k >= mouseY
      ) {
        mixing();
        stage = 314;
      }
      break;

    case 317:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        (540 / 200) * k >= mouseY
      )
        stage = -1;

      break;

    case 398: //타임 오버
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        (540 / 200) * k >= mouseY
      ) {
        mixing();
        inp.value = "";
        stage = 300;
      }
      break;

    ///////아웃트로 마우스클릭/////////
    case 900:
      stage = 901;
      break;
    case 901:
      stage = 902;
      break;
    case 902:
      stage = 903;
      break;
    case 903:
      stage = 904;
      break;
    case 904:
      stage = 905;
      break;
    case 905:
      stage = 906;
      break;
    case 906:
      stage = 907;
      break;
    case 907:
      stage = 908;
      break;
    case 908:
      stage = 909;
      break;
    case 909:
      stage = 910;
      break;
    case 910:
      stage = 911;
      break;
    case 911:
      iphone.play();
      stage = 912;
      break;
    case 912:
      stage = 913;
      break;
    case 913:
      stage = 914;
      break;
    case 914:
      iphone.stop();
      stage = 915;
      break;
    case 915:
      stage = 916;
      break;
    case 916:
      scream.play();
      stage = 917;
      break;
    case 917:
      scream.stop();
      stage = 918;
      break;
    case 918:
      stage = 919;
      break;
    case 919:
      stage = 920;
      break;
    case 920:
      stage = 921;
      break;
    case 921:
      theme.play();
      stage = 922;
      break;
    case 922:
      theme.stop();
      stage = 800;
      break;
  }
}

function keyPressed() {
  switch (stage) {
    case 0:
      stage = 100;
      break;
    case 100:
      stage = 200;
      break;
    case 150:
      transparency -= 40;
      if (transparency < 0) {
        stage = 102;
      }
      break;
    case 200:
      stage = 300;
      break;

    case 302:
      if (keyCode === ENTER) {
        stage = 303;
      }
      break;
    case 305:
      if (keyCode === ENTER) {
        stage = 306;
      }
      break;
    case 308:
      if (keyCode === ENTER) {
        stage = 309;
      }
      break;
    case 311:
      if (keyCode === ENTER) {
        stage = 312;
      }
      break;
    case 314:
      if (keyCode === ENTER) {
        stage = 315;
      }
      break;
  }
}

function stamping() {
  imageMode(CENTER);
  image(
    stamp2,
    (480 / 200) * k,
    (495 / 200) * k,
    (50 / 200) * k,
    (50 / 200) * k
  );
  image(
    stamp2,
    (535 / 200) * k,
    (495 / 200) * k,
    (50 / 200) * k,
    (50 / 200) * k
  );
  image(
    stamp2,
    (590 / 200) * k,
    (495 / 200) * k,
    (50 / 200) * k,
    (50 / 200) * k
  );
  image(
    stamp2,
    (210 / 200) * k,
    (255 / 200) * k,
    (50 / 200) * k,
    (50 / 200) * k
  );
  image(
    stamp2,
    (265 / 200) * k,
    (255 / 200) * k,
    (50 / 200) * k,
    (50 / 200) * k
  );
  image(
    stamp2,
    (320 / 200) * k,
    (255 / 200) * k,
    (50 / 200) * k,
    (50 / 200) * k
  );
  image(
    stamp2,
    (480 / 200) * k,
    (255 / 200) * k,
    (50 / 200) * k,
    (50 / 200) * k
  );
  image(
    stamp2,
    (535 / 200) * k,
    (255 / 200) * k,
    (50 / 200) * k,
    (50 / 200) * k
  );
  image(
    stamp2,
    (590 / 200) * k,
    (255 / 200) * k,
    (50 / 200) * k,
    (50 / 200) * k
  );
  image(
    stamp2,
    (210 / 200) * k,
    (495 / 200) * k,
    (50 / 200) * k,
    (50 / 200) * k
  );
  image(
    stamp2,
    (265 / 200) * k,
    (495 / 200) * k,
    (50 / 200) * k,
    (50 / 200) * k
  );
  image(
    stamp2,
    (320 / 200) * k,
    (495 / 200) * k,
    (50 / 200) * k,
    (50 / 200) * k
  );
  imageMode(CORNER);
}

/////////미션1 함수///////////
function seconds() {
  if (millis() - prevMillis > 1000) {
    //  x++ ;
    prevMillis = millis();
    return true;
  } else {
    return false;
  }
}

////////미션2 함수////////////
function shuffling() {
  colors = shuffle(colors); // 색 셔플
  for (let i = 0; i < 6; i++) {
    newColors.push(nameColors[colors[i]]);
  }
}

// 픽순대로 선택하기
function pickSoon() {
  switch (colors[selection]) {
    case 0:
      if (dist(mouseX, mouseY, circleX, circleY) < circleR) {
        stage = 110;
      } else stage = 191;
      break;
    case 1:
      if (
        dist(mouseX, mouseY, circleX, circleY + (65 / 200) * k * 1) < circleR
      ) {
        stage = 110;
      } else stage = 191;
      break;
    case 2:
      if (
        dist(mouseX, mouseY, circleX, circleY + (65 / 200) * k * 2) < circleR
      ) {
        stage = 110;
      } else stage = 191;
      break;
    case 3:
      if (
        dist(mouseX, mouseY, circleX, circleY + (65 / 200) * k * 3) < circleR
      ) {
        stage = 110;
      } else stage = 191;
      break;
    case 4:
      if (
        dist(mouseX, mouseY, circleX, circleY + (65 / 200) * k * 4) < circleR
      ) {
        stage = 110;
      } else stage = 191;
      break;
    case 5:
      if (
        dist(mouseX, mouseY, circleX, circleY + (65 / 200) * k * 5) < circleR
      ) {
        stage = 110;
      } else stage = 191;
      break;
  }
}

function setting() {
  image(mission2_setting, -3, 0, width + 3, height);
  textSize((35 / 200) * k);
  textFont(fontDung);
  fill(0);
  text(newColors, width * 0.54, height * 0.185);
  for (i = 0; i < 5; i++) {
    fill(255);
    noStroke();
    ellipse(585 + 140 * i, 250, 30, 30);
    stroke(0);
    imageMode(CENTER);
    image(mission2_arrow, 600 + 140 * i, 235);
    imageMode(CORNER);
  }
}

function timeLimit() {
  textAlign(CENTER, CENTER);
  textSize((35 / 200) * k);
  textFont(fontLab);
  fill(255);
  noStroke();
  rect(width * 0.825, height * 0.17, 300, 120);
  fill(0);
  text(timerCount1, width * 0.905, height * 0.21);
  if (millis() - timerStart1 > timerLength1) {
    timerCount1--;
    timerStart1 = millis();
  }
  if (timerCount1 == 0) stage = 193;
}

function checking() {
  stage = 111;
}

function typing() {
  stuff = this.value();
}

///////미션3 함수////////////
function timeCount() {
  textSize(0.2 * k);
  textFont(fontLab);
  fill(255);
  rect((620 / 200) * k, (105 / 200) * k, (170 / 200) * k, (60 / 200) * k);
  fill(0);
  text(timerCount2, width * 0.85, height * 0.22);
  if (millis() - timerStart2 > timerLength2) {
    timerCount2--;
    timerStart2 = millis();
  }
  if (timerCount2 == 0) {
    timerSound.stop();
    stage = 240;
  }
  textSize(0.12 * k);
}

function M3_shuffle_1() {
  subject1Arr = shuffle(subject1Arr);
  p1 = int(random(0, 4));
  q1 = int(random(0, 5));
}
function M3_shuffle_2() {
  subject2Arr = shuffle(subject2Arr);
  p2 = int(random(0, 4));
  q2 = int(random(0, 5));
}
function M3_shuffle_3() {
  subject3Arr = shuffle(subject3Arr);
  p3 = int(random(0, 4));
  q3 = int(random(0, 5));
}
function M3_shuffle_4() {
  subject4Arr = shuffle(subject4Arr);
  p4 = int(random(0, 4));
  q4 = int(random(0, 5));
}

///////////////미션4 함수////////////
function timeDecreasing() {
  textFont(fontLab);
  textAlign(CENTER, CENTER);
  textSize((30 / 200) * k);
  fill(255);
  noStroke();
  rect((640 / 200) * k, (80 / 200) * k, (150 / 200) * k, (60 / 200) * k);
  fill(0);
  text(timerCount3, (715 / 200) * k, (105 / 200) * k);
  if (millis() - timerStart3 > timerLength3) {
    timerCount3--;
    timerStart3 = millis();
  }
  if (timerCount3 == 0) stage = 398;
}

function doSomething() {
  inp.value("");
  stage += 1;
}
function typing2() {
  stuffGame4 = this.value();
}

function next() {
  stage += 2;
}

function randomX() {
  let n = random((100 / 200) * k, (700 / 200) * k);
  return n;
}

function randomY() {
  let n = random((250 / 200) * k, (400 / 200) * k);
  return n;
}

function mixing() {
  w1 = new Word(randomX(), randomY());
  w2 = new Word(randomX(), randomY());
  w3 = new Word(randomX(), randomY());
  w4 = new Word(randomX(), randomY());
  w5 = new Word(randomX(), randomY());
  w6 = new Word(randomX(), randomY());
}

function mouseover() {
  switch (stage) {
    case 800:
      if (580 <= mouseX && mouseX <= 1015 && 910 <= mouseY && mouseY <= 1040) {
        image(
          startover,
          (292 / 200) * k,
          (460 / 200) * k,
          (223 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case -1:
      if (s4 == 1 || s4 == 2 || s4 == 3) {
        if (
          1370 <= mouseX &&
          mouseX <= 1570 &&
          1000 <= mouseY &&
          mouseY <= 1070
        ) {
          image(outroover, 1370, 1000, 200, 70);
        }
      }
      break;
    case 0:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (420 / 200) * k <= mouseY &&
        (480 / 200) * k >= mouseY
      ) {
        image(
          nextover,
          (291 / 200) * k,
          (421 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      } else if (
        (25 / 200) * k <= mouseX &&
        (120 / 200) * k >= mouseX &&
        (25 / 200) * k <= mouseY &&
        (70 / 200) * k >= mouseY
      ) {
        image(
          backover,
          (25 / 200) * k,
          (25 / 200) * k,
          (100 / 200) * k,
          (50 / 200) * k
        );
      }
      break;
    case 1:
      if (
        (290 / 200) * k <= mouseX &&
        (510 / 200) * k >= mouseX &&
        (485 / 200) * k <= mouseY &&
        (545 / 200) * k >= mouseY
      ) {
        image(
          startover,
          (292 / 200) * k,
          (485 / 200) * k,
          (223 / 200) * k,
          (70 / 200) * k
        );
      } else if (
        (25 / 200) * k <= mouseX &&
        (120 / 200) * k >= mouseX &&
        (25 / 200) * k <= mouseY &&
        (70 / 200) * k >= mouseY
      ) {
        image(
          backover,
          (25 / 200) * k,
          (25 / 200) * k,
          (100 / 200) * k,
          (50 / 200) * k
        );
      }
      break;
    case 3:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        mouseY <= (540 / 200) * k
      ) {
        image(
          nextgameover,
          (291 / 200) * k,
          (485 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case 4:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        mouseY <= (540 / 200) * k
      ) {
        image(
          retryover,
          (291 / 200) * k,
          (480 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case 5:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        mouseY <= (540 / 200) * k
      ) {
        image(
          retryover,
          (291 / 200) * k,
          (480 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case 100:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (420 / 200) * k <= mouseY &&
        (480 / 200) * k >= mouseY
      ) {
        image(
          nextover,
          (291 / 200) * k,
          (421 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      } else if (
        (25 / 200) * k <= mouseX &&
        (120 / 200) * k >= mouseX &&
        (25 / 200) * k <= mouseY &&
        (70 / 200) * k >= mouseY
      ) {
        image(
          backover,
          (25 / 200) * k,
          (25 / 200) * k,
          (100 / 200) * k,
          (50 / 200) * k
        );
      }
      break;
    case 101:
      if (
        (290 / 200) * k <= mouseX &&
        (510 / 200) * k >= mouseX &&
        (485 / 200) * k <= mouseY &&
        (545 / 200) * k >= mouseY
      ) {
        image(
          startover,
          (292 / 200) * k,
          (485 / 200) * k,
          (223 / 200) * k,
          (70 / 200) * k
        );
      } else if (
        (25 / 200) * k <= mouseX &&
        (120 / 200) * k >= mouseX &&
        (25 / 200) * k <= mouseY &&
        (70 / 200) * k >= mouseY
      ) {
        image(
          backover,
          (25 / 200) * k,
          (25 / 200) * k,
          (100 / 200) * k,
          (50 / 200) * k
        );
      }
      break;
    case 191:
      if (
        (290 / 200) * k < mouseX &&
        mouseX < (505 / 200) * k &&
        (480 / 200) * k < mouseY &&
        mouseY < (540 / 200) * k
      ) {
        image(
          retryover,
          (291 / 200) * k,
          (480 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case 192:
      if (
        (290 / 200) * k < mouseX &&
        mouseX < (505 / 200) * k &&
        (480 / 200) * k < mouseY &&
        mouseY < (540 / 200) * k
      ) {
        image(
          retryover,
          (291 / 200) * k,
          (480 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case 193:
      if (
        (290 / 200) * k < mouseX &&
        mouseX < (505 / 200) * k &&
        (480 / 200) * k < mouseY &&
        mouseY < (540 / 200) * k
      ) {
        image(
          retryover,
          (291 / 200) * k,
          (480 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case 194:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (486 / 200) * k <= mouseY &&
        mouseY <= (545 / 200) * k
      ) {
        image(
          nextgameover,
          (291 / 200) * k,
          (485 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case 200:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (420 / 200) * k <= mouseY &&
        (480 / 200) * k >= mouseY
      ) {
        image(
          nextover,
          (291 / 200) * k,
          (421 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      } else if (
        (25 / 200) * k <= mouseX &&
        (120 / 200) * k >= mouseX &&
        (25 / 200) * k <= mouseY &&
        (70 / 200) * k >= mouseY
      ) {
        image(
          backover,
          (25 / 200) * k,
          (25 / 200) * k,
          (100 / 200) * k,
          (50 / 200) * k
        );
      }
      break;
    case 250:
      if (
        (290 / 200) * k <= mouseX &&
        (510 / 200) * k >= mouseX &&
        (485 / 200) * k <= mouseY &&
        (545 / 200) * k >= mouseY
      ) {
        image(
          startover,
          (292 / 200) * k,
          (485 / 200) * k,
          (223 / 200) * k,
          (70 / 200) * k
        );
      } else if (
        (25 / 200) * k <= mouseX &&
        (120 / 200) * k >= mouseX &&
        (25 / 200) * k <= mouseY &&
        (70 / 200) * k >= mouseY
      ) {
        image(
          backover,
          (25 / 200) * k,
          (25 / 200) * k,
          (100 / 200) * k,
          (50 / 200) * k
        );
      }
      break;
    case 203:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        mouseY <= (540 / 200) * k
      ) {
        image(
          retryover,
          (291 / 200) * k,
          (480 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case 213:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        mouseY <= (540 / 200) * k
      ) {
        image(
          retryover,
          (291 / 200) * k,
          (480 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case 223:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        mouseY <= (540 / 200) * k
      ) {
        image(
          retryover,
          (291 / 200) * k,
          (480 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case 232:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        mouseY <= (540 / 200) * k
      ) {
        image(
          nextgameover,
          (291 / 200) * k,
          (485 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case 233:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        mouseY <= (540 / 200) * k
      ) {
        image(
          retryover,
          (291 / 200) * k,
          (480 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;

    case 240:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        mouseY <= (540 / 200) * k
      ) {
        image(
          retryover,
          (291 / 200) * k,
          (480 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case 300:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (420 / 200) * k <= mouseY &&
        (480 / 200) * k >= mouseY
      ) {
        image(
          nextover,
          (291 / 200) * k,
          (421 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      } else if (
        (25 / 200) * k <= mouseX &&
        (120 / 200) * k >= mouseX &&
        (25 / 200) * k <= mouseY &&
        (70 / 200) * k >= mouseY
      ) {
        image(
          backover,
          (25 / 200) * k,
          (25 / 200) * k,
          (100 / 200) * k,
          (50 / 200) * k
        );
      }
      break;
    case 301:
      if (
        (290 / 200) * k <= mouseX &&
        (510 / 200) * k >= mouseX &&
        (485 / 200) * k <= mouseY &&
        (545 / 200) * k >= mouseY
      ) {
        image(
          startover,
          (292 / 200) * k,
          (485 / 200) * k,
          (223 / 200) * k,
          (70 / 200) * k
        );
      } else if (
        (25 / 200) * k <= mouseX &&
        (120 / 200) * k >= mouseX &&
        (25 / 200) * k <= mouseY &&
        (70 / 200) * k >= mouseY
      ) {
        image(
          backover,
          (25 / 200) * k,
          (25 / 200) * k,
          (100 / 200) * k,
          (50 / 200) * k
        );
      }
      break;
    case 302:
      if (
        (50 / 200) * k <= mouseX &&
        mouseX <= (125 / 200) * k &&
        (100 / 200) * k <= mouseY &&
        mouseY <= (130 / 200) * k
      ) {
        image(
          reassignover,
          (50 / 200) * k,
          (100 / 200) * k,
          (80 / 200) * k,
          (37 / 200) * k
        );
      }
      break;
    case 304: //1번문제 실패
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        (540 / 200) * k >= mouseY
      ) {
        image(
          retryover,
          (291 / 200) * k,
          (480 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case 305: //2번문제
      if (
        (50 / 200) * k <= mouseX &&
        mouseX <= (125 / 200) * k &&
        (100 / 200) * k <= mouseY &&
        mouseY <= (130 / 200) * k
      ) {
        image(
          reassignover,
          (50 / 200) * k,
          (100 / 200) * k,
          (80 / 200) * k,
          (37 / 200) * k
        );
      }
      break;
    case 307: //2번문제 실패
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        (540 / 200) * k >= mouseY
      ) {
        image(
          retryover,
          (291 / 200) * k,
          (480 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case 308: //3번 문제
      if (
        (50 / 200) * k <= mouseX &&
        mouseX <= (125 / 200) * k &&
        (100 / 200) * k <= mouseY &&
        mouseY <= (130 / 200) * k
      ) {
        image(
          reassignover,
          (50 / 200) * k,
          (100 / 200) * k,
          (80 / 200) * k,
          (37 / 200) * k
        );
      }
      break;
    case 310: //3번문제 실패
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        (540 / 200) * k >= mouseY
      ) {
        image(
          retryover,
          (291 / 200) * k,
          (480 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case 311: //4번 문제
      if (
        (50 / 200) * k <= mouseX &&
        mouseX <= (125 / 200) * k &&
        (100 / 200) * k <= mouseY &&
        mouseY <= (130 / 200) * k
      ) {
        image(
          reassignover,
          (50 / 200) * k,
          (100 / 200) * k,
          (80 / 200) * k,
          (37 / 200) * k
        );
      }
      break;
    case 313: //4번문제 실패
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        (540 / 200) * k >= mouseY
      ) {
        image(
          retryover,
          (291 / 200) * k,
          (480 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case 314: //5번 문제
      if (
        (50 / 200) * k <= mouseX &&
        mouseX <= (125 / 200) * k &&
        (100 / 200) * k <= mouseY &&
        mouseY <= (130 / 200) * k
      ) {
        image(
          reassignover,
          (50 / 200) * k,
          (100 / 200) * k,
          (80 / 200) * k,
          (37 / 200) * k
        );
      }
      break;
    case 316: //5번문제 실패
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        (540 / 200) * k >= mouseY
      ) {
        image(
          retryover,
          (291 / 200) * k,
          (480 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;

    case 317:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        mouseY <= (540 / 200) * k
      ) {
        image(
          nextgameover,
          (291 / 200) * k,
          (485 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
    case 398:
      if (
        (290 / 200) * k <= mouseX &&
        (507 / 200) * k >= mouseX &&
        (480 / 200) * k <= mouseY &&
        mouseY <= (540 / 200) * k
      ) {
        image(
          retryover,
          (291 / 200) * k,
          (480 / 200) * k,
          (225 / 200) * k,
          (70 / 200) * k
        );
      }
      break;
  }
}
