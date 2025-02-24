function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220,220,220); //escolha um código para a cor
    
  // Desenhando a linha superior
    circle(50, 50, 100); // Primeiro circulo
    circle(150, 50, 100); // Segundo circulo
    circle(250, 50, 100); // Terceiro circulo
    circle(350, 50, 100); // Quarto circulo
    
    // Desenhando a linha inferior
    circle(50, 350,100); // Primeiro circulo
    circle(150, 350, 100); // Segundo circulo
    circle(250, 350, 100); // Terceiro circulo
    circle(350, 350, 100); // Quarto circulo
    
  }