function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background('#9FD173');
  
    // 배경 꽃
    for (let x = 20; x < width; x += 50) {
      for (let y = 20; y < height; y += 50) {
        fill('#FFD700');
        noStroke();
        ellipse(x, y - 5, 10, 15);
        ellipse(x, y + 5, 10, 15);
        ellipse(x - 5, y, 15, 10);
        ellipse(x + 5, y, 15, 10);
        fill('#FF8080');
        circle(x, y, 8);
      }
    }
  
    // 캐리커처
    drawCharacter();
  
    // 꽃 인터랙션
    drawFlower(130, 125);
    drawFlower(270, 125);
  }
  
  // 꽃 함수 정의
  function drawFlower(x, y) {
    let isHovered = dist(mouseX, mouseY, x, y) < 20;
    let petalColor = isHovered ? '#FFD700' : '#FF6666';
    let centerColor = isHovered ? '#FF6666' : '#FFD700';
  
    fill(petalColor);
    noStroke();
    ellipse(x, y - 20, 25, 30);
    ellipse(x + 20, y, 30, 25);
    ellipse(x, y + 20, 25, 30);
    ellipse(x - 20, y, 30, 25);
  
    fill(centerColor);
    circle(x, y, 20);
  }
  
  
  function drawCharacter() {
    
    // 옆머리
    fill('#663300');
    noStroke();
    ellipse(200, 220, 280, 350); 
  
    // 머리 아래쪽 웨이브
    noStroke();
    fill('#663300');
    ellipse(100, 320, 100, 100); // 왼쪽1
    ellipse(80, 380, 100, 100); // 왼쪽2
    ellipse(300, 320, 100, 100); // 오른쪽1
    ellipse(320, 380, 100, 100); // 오른쪽2
  
    // 얼굴
    fill('#FFEBE5');
    noStroke();
    ellipse(200, 180, 180, 210);
  
    // 목
    fill('#FFEBE5');
    rect(200, 290, 60, 40); 
  
    // 어깨 & 몸통
    fill('#FFD966');
    noStroke();
    arc(200, 360, 200, 120, PI, TWO_PI); // 어깨
    rectMode(CENTER);
    rect(200, 380, 200, 50); // 몸통
    
    // 목 부분
    fill('#FFEBE5');
    arc(200, 300, 60, 40, 0, PI, CHORD); 
  
    // 카라
    fill('#9FD173');
    triangle(165, 305, 200, 320, 180, 340); // 왼쪽
    triangle(235, 305, 200, 320, 220, 340); // 오른쪽
    
    // 단추
    circle(200, 340, 10);
    circle(200, 355, 10);
    circle(200, 370, 10);
  
    // 앞머리
    fill('#663300');
    arc(175, 75, 100, 100, 0, PI, CHORD); // 왼쪽
    arc(225, 75, 100, 100, 0, PI, CHORD); // 오른쪽
    
    // 눈썹
    stroke(80, 50, 20);
    strokeWeight(3);
    noFill();
    arc(160, 150, 45, 20, PI, TWO_PI); // 왼쪽
    arc(240, 150, 45, 20, PI, TWO_PI); // 오른쪽
  
    // 눈
    stroke(0);
    strokeWeight(3);
    arc(162, 170, 30, 20, PI, TWO_PI);
    arc(238, 170, 30, 20, PI, TWO_PI);
    
    // 아이라인
    strokeWeight(3);
    line(146, 170, 140, 168);
    line(255, 170, 260, 168);
  
    // 눈동자
    fill('#402000');
    circle(163, 169, 12);
    circle(237, 169, 12);
  
    // 코
    stroke('#663300');
    strokeWeight(3);
    noFill();
    arc(200, 190, 15, 20, HALF_PI, PI+HALF_PI); 
    
    // 귀
    fill('#FFEBE5');
    noStroke();
    ellipse(110, 185, 30, 40); // 왼쪽 귀
    ellipse(290, 185, 30, 40); // 오른쪽 귀
    
    // 입
    noStroke();
    fill('#FF9999');
    arc(200, 215, 70, 60, 0, PI);
    
    // 왼쪽 인디언 보조개 
    stroke('#FF6666');
    strokeWeight(2);
    line(150, 192, 130, 188); // 위쪽 선
    line(150, 200, 130, 200); // 가운데 선
    line(150, 208, 130, 212); // 아래쪽 선
  
    // 오른쪽 인디언 보조개
    line(250, 192, 270, 188); // 위쪽 선
    line(250, 200, 270, 200); // 가운데 선
    line(250, 208, 270, 212); // 아래쪽 선
    
  }
  