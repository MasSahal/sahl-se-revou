function hitungLuasJG() {
  // Mendapatkan nilai input dari form
  var alasJG = document.getElementById("alasJG").value;
  var tinggiJG = document.getElementById("tinggiJG").value;

  // Validasi input untuk memastikan nilai yang dimasukkan adalah angka
  var errorAlas = document.getElementById("errorAlasJG");
  var errorTinggi = document.getElementById("errorTinggiJG");

  if (isNaN(alasJG)) {
    errorAlas.innerHTML = "Mohon masukkan angka pada field Alas!";
    document.getElementById("hasilJG").innerHTML = "";
  } else {
    errorAlas.innerHTML = "";
  }

  if (isNaN(tinggiJG)) {
    errorTinggi.innerHTML = "Mohon masukkan angka pada field Tinggi!";
    document.getElementById("hasilJG").innerHTML = "";
  } else {
    errorTinggi.innerHTML = "";
  }

  // Menghitung luas jajargenjang jika ketiga input valid
  if (!isNaN(alasJG) && !isNaN(tinggiJG)) {
    var luas = alasJG * tinggiJG;
    document.getElementById("hasilJG").innerHTML = "Luas Jajargenjang: " + luas;
  }
}

function hitungLuasP() {
  // Mendapatkan nilai input dari form
  var alasP = document.getElementById("alasP").value;
  var tinggiP = document.getElementById("tinggiP").value;

  // Validasi input untuk memastikan nilai yang dimasukkan adalah angka
  var errorAlas = document.getElementById("errorAlasP");
  var errorTinggi = document.getElementById("errorTinggiP");

  if (isNaN(alasP)) {
    errorAlas.innerHTML = "Mohon masukkan angka pada field Alas!";
    document.getElementById("hasilP").innerHTML = "";
  } else {
    errorAlas.innerHTML = "";
  }

  if (isNaN(tinggiP)) {
    errorTinggi.innerHTML = "Mohon masukkan angka pada field Tinggi!";
    document.getElementById("hasilP").innerHTML = "";
  } else {
    errorTinggi.innerHTML = "";
  }

  // Menghitung luas segitiga jika kedua input valid
  if (!isNaN(alasP) && !isNaN(tinggiP)) {
    var luas = 0.5 * alasP * tinggiP;
    document.getElementById("hasilP").innerHTML = "Luas Segitiga: " + luas;
  }
}
