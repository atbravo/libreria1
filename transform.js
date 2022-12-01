 function rotar(id, theta, eje) {
    let out = [];
    mat4.rotate(out, id, theta, eje);
    return out;
  }

  function trasladar(id, v) {
    let out = [];
    mat4.translate(out, id, v);
    return out;
  }

  function escalar(id, v) {
    let out = [];
    mat4.scale(out, id, v);
    return out;
  }

  function rotTras(id, theta, eje, v) {
    let out = [];
    let out2 = [];
    mat4.translate(out, mat4.create(), v);
    mat4.rotate(out2, mat4.create(), theta, eje);
    mat4.multiply(out, out, out2);
    mat4.multiply(out, id, out);
    return out;
  }


  function trasEsc(id, v, s) {
    let out = [];
    mat4.translate(out, id, v);
    mat4.scale(out, out, s);
    return out;
  }



  function rotTrasEsc(id, theta, eje, v, s) {
    let out = [];

    mat4.translate(out, id, v);
    mat4.rotate(out, out, theta, eje);
    mat4.scale(out, out, s);

    return out;
  }
