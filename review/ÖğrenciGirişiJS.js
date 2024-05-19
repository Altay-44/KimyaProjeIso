function ogrenciGirisi() {
    var isim = document.getElementById("isim").value;
    if (isim.trim() === "") {
        alert("Lütfen isminizi girin.");
    } else {
        // Öğrenci girişini işle
        // Örneğin, öğrenci ismini sakla veya işle
        console.log("Öğrenci girişi yapıldı: " + isim);
    }
}
