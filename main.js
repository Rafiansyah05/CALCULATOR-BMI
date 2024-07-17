let inputNama = document.getElementById('inputNama');
let inputUsia = document.getElementById('inputUsia');
let inputTinggi = document.getElementById('inputTinggi');
let inputBerat = document.getElementById('inputBerat');

let form = document.forms['myfom'];
let menu = form.opsi;
let option = form.opsi.option;

form.onsubmit = function (e) {
  e.preventDefault();

  let tg = inputTinggi.value;

  let nama = inputNama.value;
  let usia = parseInt(inputUsia.value);
  let tinggi = parseInt(inputTinggi.value) / 100;
  let berat = inputBerat.value;
  let bmi = berat / (tinggi * tinggi);
  let pushBMI = document.getElementById('kategori');
  let opsiValue = this.opsi.value;
  let valid = true;

  document.getElementById('tampilanAwal').style.display = 'none';
  document.getElementById('tampilanUtama').style.display = 'block';

  if (nama === '') {
    valid = false;
    inputNama.style.borderColor = 'red';
  }

  if (usia === '') {
    valid = false;
    inputUsia.style.borderColor = 'red';
  }

  if (tg === '') {
    valid = false;
    inputTinggi.style.borderColor = 'red';
  }

  if (berat === '') {
    valid = false;
    inputBerat.style.borderColor = 'red';
  }

  if (opsiValue === '') {
    valid = false;
    document.getElementById('opsi').style.borderColor = 'red';
  }

  if (valid) {
    if (usia < 16) {
      alert('USIA KAMU BELU CUCKUP DEK');
    }
    document.getElementById('pushNama').innerHTML = 'NAMA: ' + nama;
    document.getElementById('pushUsia').innerHTML = 'USIA KAMU: ' + usia;
    document.getElementById('pushTinggi').innerHTML = 'TINGGI BADAN: ' + tg;
    document.getElementById('pushBerat').innerHTML = 'BERAT BADAN: ' + berat;
    document.getElementById('pushBMI').innerHTML = 'BMI: ' + bmi.toFixed(1);

    if (bmi < 18.5) {
      pushBMI.innerHTML = 'KAMU KEKURANGAN BERAT BADAN SOBAT';
    } else if (bmi > 18.5 && bmi <= 24.9) {
      pushBMI.innerHTML = 'BERAT BADAN KAMU NORMAL SOBAT';
    } else if (bmi >= 25 && bmi <= 29.9) {
      pushBMI.innerHTML = 'BERAT BADAN KAMU KELEBIHAN CUII';
    } else {
      pushBMI.innerHTML = 'KAMU OBESITAS CUYYY ';
    }
  }
};
