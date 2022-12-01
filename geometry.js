 //Calcula los vertices de un cilindro con base en el origen de altura y radio 1
  function verticesCilindro(triangs) {

    const pi = Math.PI

    const vertices = [0, 0, 0];
    for (let i = 1; i <= triangs; i++) {
      let theta = i * 2 * pi / triangs;
      vertices.push(Math.cos(theta), 0, Math.sin(theta));
    }

    vertices.push(0, 1, 0)

    for (let i = 1; i <= triangs; i++) {
      let theta = i * 2 * pi / triangs;
      vertices.push(Math.cos(theta), 1, Math.sin(theta));
    }
    return vertices;
  }

  //Calcula los indices de "la tapa" de un cilindro segun el numero de triangulos que se usen en la base
  function indicesTapaCilindro(t, triangs) {
    const indicesC = []
    for (let i = t; i <= t + triangs; i++) {
      indicesC.push(i);
    }
    indicesC.push(t + 1);

    return indicesC;
  }
  //Calcula los indices para la pared de un cilindro segun el numero de triangulos que se usen en la base
  function indicesParedCilindro(triangs) {
    let indicesP = []
    for (let i = 1; i <= triangs; i++) {
      indicesP.push(i, i + triangs + 1);
    }
    indicesP.push(1, triangs + 2);
    return indicesP;
  }

  //Retorona los vertices de un cubo centrado en el origen de lado 1
  function verticesCaja() {
    const vertices = [];
    /* 
            for (let i = 0; i < 2; i++) {
                let j = Math.pow(-1, i % 2);
                vertices.push(j * 0.5, -0.5, j * 0.5);
                vertices.push(j * 0.5, 0.5, j * 0.5);
                vertices.push(j * 0.5, -0.5, -j * 0.5);
                vertices.push(j * 0.5, 0.5, -j * 0.5);
            } */
    return [ // Front face
      -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
      // Back face
      -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,
      // Top face
      -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,
      // Bottom face
      -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,
      // Right face
      1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,
      // Left face
      -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0,
    ];
  }

  //Retorna los indices para dibujar una caja segun los vertices de la función verticesCaja()
  function indicesCaja() {
    /*         let indices = [];
            for (let i = 0; i <= 7; i++) {
                indices.push(i, (i + 1) % 8, (i + 2) % 8)
            }
            
            indices.push(0, 2, 6);
            indices.push(2, 6, 4);
            indices.push(1, 3, 7);
            indices.push(3, 7, 5); 
             */
    return [0, 1, 2, 0, 2, 3, // front
      4, 5, 6, 4, 6, 7, // back
      8, 9, 10, 8, 10, 11, // top
      12, 13, 14, 12, 14, 15, // bottom
      16, 17, 18, 16, 18, 19, // right
      20, 21, 22, 20, 22, 23, // left 
    ];
  }

  //Retorna un arreglo con los vertices de una piramide con punta arriba centrada en 0,0,0 
  function verticesPiramide() {
    const vertices = [];

    for (let i = 0; i < 2; i++) {
      let j = Math.pow(-1, i % 2);
      vertices.push(j / 2, -0.5, j / 2);
      vertices.push(j / 2, -0.5, -j / 2);
    }
    vertices.push(0, 0, 0);
    return vertices;
  }

  //Retorna los indices necesarios para dibujar una piramide con vertices obtenidos con la funcion verticesPiramide() 
  function indicesPiramide() {
    let indices = [];
    indices.push(0, 1, 2);
    indices.push(2, 3, 0);
    for (let i = 0; i < 4; i++) {
      indices.push(i, (i + 1) % 4, 4);
    }
    return indices;
  }

  //EL NUMERO DE NIVELES DEBE SER PAR
  function verticesEsfera(triangs, niveles) {
    const dY = 2 / niveles;

    let vertices = [0, -1, 0];
    let nivelY = [];
    let radios = [];


    for (let i = 1; i < niveles; i++) {
      let nivel = -1 + dY * i
      nivelY.push(nivel);
      radios.push(Math.sqrt(1 - (nivel * nivel)));
    }

    for (let j = 0; j < radios.length; j++) {
      for (let i = 1; i <= triangs; i++) {
        let theta = i * 2 * pi / triangs;
        vertices.push(radios[j] * Math.cos(theta), nivelY[j], radios[j] * Math.sin(theta));
      }
    }

    vertices.push(0, 1, 0);

    return vertices;
  }

  function indicesPuntaEsfera(triangs, niveles) {
    let t = triangs * (niveles - 1) + 1;
    let indicesC = [t];
    for (let i = t - triangs; i < t; i++) {
      indicesC.push(i);
    }
    indicesC.push(t - triangs);
    return indicesC;
  }

  function indicesBaseEsfera(triangs) {
    const indicesC = []
    for (let i = 0; i <= triangs; i++) {
      indicesC.push(i);
    }
    indicesC.push(1);

    return indicesC;
  }

  function indicesParedEsfera(triangs, nivel) {
    let indicesP = []
    let t = 1 + triangs * (nivel - 1);
    for (let i = t; i <= t + triangs - 1; i++) {
      indicesP.push(i, i + triangs);
    }
    indicesP.push(t, t + triangs);
    return indicesP;
  }
