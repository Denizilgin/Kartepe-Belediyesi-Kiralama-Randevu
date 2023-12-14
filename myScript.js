document.getElementById("myButton").addEventListener("click", function() {
    const fifthPart = document.getElementById("fifthPart");
    fifthPart.scrollIntoView({ behavior: "smooth" });
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection, query , where, updateDoc,arrayUnion, arrayRemove, setDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

const firebaseConfig = {
 apiKey: "AIzaSyDenol5uVp5yDBBnUCNTonO9cQUU-trWF8",
 authDomain: "kartepebelediye.firebaseapp.com",
 projectId: "kartepebelediye",
 storageBucket: "kartepebelediye.appspot.com",
 messagingSenderId: "993270259189",
 appId: "1:993270259189:web:9f2c893c694f1d768b14bc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);




async function updateAdetValue() {
 const sayi_ = doc(db, "bilgi", "adet");

 const docSnap2 = await getDoc(sayi_); 
 if (docSnap2.exists()) {
     const masa = docSnap2.data().masa;
     const sandalye = docSnap2.data().sandalye;
     const masa_fiyat = docSnap2.data().masa_fiyat
     const sandalye_fiyat = docSnap2.data().sandalye_fiyat


     const sandalyefiyat = document.getElementById("sandalyePlaceholder");
     sandalyefiyat.textContent = sandalye_fiyat + " TL";
     const masafiyat = document.getElementById("masaPlaceholder");
     masafiyat.textContent = masa_fiyat + " TL";
     
     const adetValueElement = document.getElementById("adetValue");
     adetValueElement.textContent = `Depodaki Mevcut Sayı: ${masa}`;

     const adetValueElement2 = document.getElementById("adetValue2");
     adetValueElement2.textContent = `Depodaki Mevcut Sayı: ${sandalye}`;
 } else {
     console.log("No such document!");
 }
}
updateAdetValue();

const paymentButton = document.getElementById("odeme-buton");
paymentButton.addEventListener("click", async function(event) {
event.preventDefault();
const toplamUcretElement = document.getElementById("toplam-ucret");
const toplamUcret = toplamUcretElement.textContent;
const tckimlikInput = document.getElementById("tckimlik");
const tckimlikValue = tckimlikInput.value;
const isimInput = document.getElementById("firstName");
const isimValue = isimInput.value;
const soyisimInput = document.getElementById("lastName");
const soyisimValue = soyisimInput.value;
const mailInput = document.getElementById("email");
const mailValue = mailInput.value;
const adresInput = document.getElementById("address");
const adresValue = adresInput.value;
const adres2Input = document.getElementById("address2");
const adres2Value = adres2Input.value;
const mahalleInput = document.getElementById("country");
const mahalleValue = mahalleInput.value;
const masaInput = document.getElementById("masaInput");
const masaValue = masaInput.value;
const sandalyeInput = document.getElementById("sandalyeInput");
const sandalyeValue = sandalyeInput.value;
const odemeCheck = document.getElementById("odeme-check");

if(odemeCheck.checked){
await setDoc(doc(db, "kullanicilar", tckimlikValue), {
isim: isimValue,
soyisim: soyisimValue,
mail: mailValue,
tc: tckimlikValue,
adres: adresValue + " " + " " + mahalleValue,
telefon: adres2Value,
alinanmasa: masaValue,
alinansandalye: sandalyeValue,
toplamucret: toplamUcret,
odeme: true,
});
location.reload();
}else{
await setDoc(doc(db, "kullanicilar-odemesiz", tckimlikValue), {
isim: isimValue,
soyisim: soyisimValue,
mail: mailValue,
tc: tckimlikValue,
adres: adresValue + " " + " " + mahalleValue,
telefon: adres2Value,
alinanmasa: masaValue,
alinansandalye: sandalyeValue,
toplamucret: toplamUcret,
odeme: false,
});
location.reload();
}


async function updateAdetValue() {
    const sayi_ = doc(db, "bilgi", "adet");
   
    const docSnap2 = await getDoc(sayi_); 
    if (docSnap2.exists()) {
        const masa = docSnap2.data().masa;
        const sandalye = docSnap2.data().sandalye;
        const masa_fiyat = docSnap2.data().masa_fiyat
        const sandalye_fiyat = docSnap2.data().sandalye_fiyat
   
   
        const sandalyefiyat = document.getElementById("sandalyePlaceholder");
        sandalyefiyat.textContent = sandalye_fiyat + " TL";
        const masafiyat = document.getElementById("masaPlaceholder");
        masafiyat.textContent = masa_fiyat + " TL";
        
        const adetValueElement = document.getElementById("adetValue");
        adetValueElement.textContent = `Depodaki Mevcut Sayı: ${masa}`;
   
        const adetValueElement2 = document.getElementById("adetValue2");
        adetValueElement2.textContent = `Depodaki Mevcut Sayı: ${sandalye}`;
    } else {
        console.log("No such document!");
    }
   }
   updateAdetValue();
   
   const paymentButton = document.getElementById("odeme-buton");
   paymentButton.addEventListener("click", async function(event) {
   event.preventDefault();
   const toplamUcretElement = document.getElementById("toplam-ucret");
   const toplamUcret = toplamUcretElement.textContent;
   const tckimlikInput = document.getElementById("tckimlik");
   const tckimlikValue = tckimlikInput.value;
   const isimInput = document.getElementById("firstName");
   const isimValue = isimInput.value;
   const soyisimInput = document.getElementById("lastName");
   const soyisimValue = soyisimInput.value;
   const mailInput = document.getElementById("email");
   const mailValue = mailInput.value;
   const adresInput = document.getElementById("address");
   const adresValue = adresInput.value;
   const adres2Input = document.getElementById("address2");
   const adres2Value = adres2Input.value;
   const mahalleInput = document.getElementById("country");
   const mahalleValue = mahalleInput.value;
   const masaInput = document.getElementById("masaInput");
   const masaValue = masaInput.value;
   const sandalyeInput = document.getElementById("sandalyeInput");
   const sandalyeValue = sandalyeInput.value;
   const odemeCheck = document.getElementById("odeme-check");
   
   if(odemeCheck.checked){
   await setDoc(doc(db, "kullanicilar", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: true,
   });
   location.reload();
   }else{
   await setDoc(doc(db, "kullanicilar-odemesiz", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: false,
   });
   location.reload();
   }
   
async function updateAdetValue() {
    const sayi_ = doc(db, "bilgi", "adet");
   
    const docSnap2 = await getDoc(sayi_); 
    if (docSnap2.exists()) {
        const masa = docSnap2.data().masa;
        const sandalye = docSnap2.data().sandalye;
        const masa_fiyat = docSnap2.data().masa_fiyat
        const sandalye_fiyat = docSnap2.data().sandalye_fiyat
   
   
        const sandalyefiyat = document.getElementById("sandalyePlaceholder");
        sandalyefiyat.textContent = sandalye_fiyat + " TL";
        const masafiyat = document.getElementById("masaPlaceholder");
        masafiyat.textContent = masa_fiyat + " TL";
        
        const adetValueElement = document.getElementById("adetValue");
        adetValueElement.textContent = `Depodaki Mevcut Sayı: ${masa}`;
   
        const adetValueElement2 = document.getElementById("adetValue2");
        adetValueElement2.textContent = `Depodaki Mevcut Sayı: ${sandalye}`;
    } else {
        console.log("No such document!");
    }
   }
   updateAdetValue();
   
   const paymentButton = document.getElementById("odeme-buton");
   paymentButton.addEventListener("click", async function(event) {
   event.preventDefault();
   const toplamUcretElement = document.getElementById("toplam-ucret");
   const toplamUcret = toplamUcretElement.textContent;
   const tckimlikInput = document.getElementById("tckimlik");
   const tckimlikValue = tckimlikInput.value;
   const isimInput = document.getElementById("firstName");
   const isimValue = isimInput.value;
   const soyisimInput = document.getElementById("lastName");
   const soyisimValue = soyisimInput.value;
   const mailInput = document.getElementById("email");
   const mailValue = mailInput.value;
   const adresInput = document.getElementById("address");
   const adresValue = adresInput.value;
   const adres2Input = document.getElementById("address2");
   const adres2Value = adres2Input.value;
   const mahalleInput = document.getElementById("country");
   const mahalleValue = mahalleInput.value;
   const masaInput = document.getElementById("masaInput");
   const masaValue = masaInput.value;
   const sandalyeInput = document.getElementById("sandalyeInput");
   const sandalyeValue = sandalyeInput.value;
   const odemeCheck = document.getElementById("odeme-check");
   
   if(odemeCheck.checked){
   await setDoc(doc(db, "kullanicilar", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: true,
   });
   location.reload();
   }else{
   await setDoc(doc(db, "kullanicilar-odemesiz", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: false,
   });
   location.reload();
   }
   
async function updateAdetValue() {
    const sayi_ = doc(db, "bilgi", "adet");
   
    const docSnap2 = await getDoc(sayi_); 
    if (docSnap2.exists()) {
        const masa = docSnap2.data().masa;
        const sandalye = docSnap2.data().sandalye;
        const masa_fiyat = docSnap2.data().masa_fiyat
        const sandalye_fiyat = docSnap2.data().sandalye_fiyat
   
   
        const sandalyefiyat = document.getElementById("sandalyePlaceholder");
        sandalyefiyat.textContent = sandalye_fiyat + " TL";
        const masafiyat = document.getElementById("masaPlaceholder");
        masafiyat.textContent = masa_fiyat + " TL";
        
        const adetValueElement = document.getElementById("adetValue");
        adetValueElement.textContent = `Depodaki Mevcut Sayı: ${masa}`;
   
        const adetValueElement2 = document.getElementById("adetValue2");
        adetValueElement2.textContent = `Depodaki Mevcut Sayı: ${sandalye}`;
    } else {
        console.log("No such document!");
    }
   }
   updateAdetValue();
   
   const paymentButton = document.getElementById("odeme-buton");
   paymentButton.addEventListener("click", async function(event) {
   event.preventDefault();
   const toplamUcretElement = document.getElementById("toplam-ucret");
   const toplamUcret = toplamUcretElement.textContent;
   const tckimlikInput = document.getElementById("tckimlik");
   const tckimlikValue = tckimlikInput.value;
   const isimInput = document.getElementById("firstName");
   const isimValue = isimInput.value;
   const soyisimInput = document.getElementById("lastName");
   const soyisimValue = soyisimInput.value;
   const mailInput = document.getElementById("email");
   const mailValue = mailInput.value;
   const adresInput = document.getElementById("address");
   const adresValue = adresInput.value;
   const adres2Input = document.getElementById("address2");
   const adres2Value = adres2Input.value;
   const mahalleInput = document.getElementById("country");
   const mahalleValue = mahalleInput.value;
   const masaInput = document.getElementById("masaInput");
   const masaValue = masaInput.value;
   const sandalyeInput = document.getElementById("sandalyeInput");
   const sandalyeValue = sandalyeInput.value;
   const odemeCheck = document.getElementById("odeme-check");
   
   if(odemeCheck.checked){
   await setDoc(doc(db, "kullanicilar", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: true,
   });
   location.reload();
   }else{
   await setDoc(doc(db, "kullanicilar-odemesiz", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: false,
   });
   location.reload();
   }
   
async function updateAdetValue() {
    const sayi_ = doc(db, "bilgi", "adet");
   
    const docSnap2 = await getDoc(sayi_); 
    if (docSnap2.exists()) {
        const masa = docSnap2.data().masa;
        const sandalye = docSnap2.data().sandalye;
        const masa_fiyat = docSnap2.data().masa_fiyat
        const sandalye_fiyat = docSnap2.data().sandalye_fiyat
   
   
        const sandalyefiyat = document.getElementById("sandalyePlaceholder");
        sandalyefiyat.textContent = sandalye_fiyat + " TL";
        const masafiyat = document.getElementById("masaPlaceholder");
        masafiyat.textContent = masa_fiyat + " TL";
        
        const adetValueElement = document.getElementById("adetValue");
        adetValueElement.textContent = `Depodaki Mevcut Sayı: ${masa}`;
   
        const adetValueElement2 = document.getElementById("adetValue2");
        adetValueElement2.textContent = `Depodaki Mevcut Sayı: ${sandalye}`;
    } else {
        console.log("No such document!");
    }
   }
   updateAdetValue();
   
   const paymentButton = document.getElementById("odeme-buton");
   paymentButton.addEventListener("click", async function(event) {
   event.preventDefault();
   const toplamUcretElement = document.getElementById("toplam-ucret");
   const toplamUcret = toplamUcretElement.textContent;
   const tckimlikInput = document.getElementById("tckimlik");
   const tckimlikValue = tckimlikInput.value;
   const isimInput = document.getElementById("firstName");
   const isimValue = isimInput.value;
   const soyisimInput = document.getElementById("lastName");
   const soyisimValue = soyisimInput.value;
   const mailInput = document.getElementById("email");
   const mailValue = mailInput.value;
   const adresInput = document.getElementById("address");
   const adresValue = adresInput.value;
   const adres2Input = document.getElementById("address2");
   const adres2Value = adres2Input.value;
   const mahalleInput = document.getElementById("country");
   const mahalleValue = mahalleInput.value;
   const masaInput = document.getElementById("masaInput");
   const masaValue = masaInput.value;
   const sandalyeInput = document.getElementById("sandalyeInput");
   const sandalyeValue = sandalyeInput.value;
   const odemeCheck = document.getElementById("odeme-check");
   
   if(odemeCheck.checked){
   await setDoc(doc(db, "kullanicilar", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: true,
   });
   location.reload();
   }else{
   await setDoc(doc(db, "kullanicilar-odemesiz", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: false,
   });
   location.reload();
   }
   
async function updateAdetValue() {
    const sayi_ = doc(db, "bilgi", "adet");
   
    const docSnap2 = await getDoc(sayi_); 
    if (docSnap2.exists()) {
        const masa = docSnap2.data().masa;
        const sandalye = docSnap2.data().sandalye;
        const masa_fiyat = docSnap2.data().masa_fiyat
        const sandalye_fiyat = docSnap2.data().sandalye_fiyat
   
   
        const sandalyefiyat = document.getElementById("sandalyePlaceholder");
        sandalyefiyat.textContent = sandalye_fiyat + " TL";
        const masafiyat = document.getElementById("masaPlaceholder");
        masafiyat.textContent = masa_fiyat + " TL";
        
        const adetValueElement = document.getElementById("adetValue");
        adetValueElement.textContent = `Depodaki Mevcut Sayı: ${masa}`;
   
        const adetValueElement2 = document.getElementById("adetValue2");
        adetValueElement2.textContent = `Depodaki Mevcut Sayı: ${sandalye}`;
    } else {
        console.log("No such document!");
    }
   }
   updateAdetValue();
   
   const paymentButton = document.getElementById("odeme-buton");
   paymentButton.addEventListener("click", async function(event) {
   event.preventDefault();
   const toplamUcretElement = document.getElementById("toplam-ucret");
   const toplamUcret = toplamUcretElement.textContent;
   const tckimlikInput = document.getElementById("tckimlik");
   const tckimlikValue = tckimlikInput.value;
   const isimInput = document.getElementById("firstName");
   const isimValue = isimInput.value;
   const soyisimInput = document.getElementById("lastName");
   const soyisimValue = soyisimInput.value;
   const mailInput = document.getElementById("email");
   const mailValue = mailInput.value;
   const adresInput = document.getElementById("address");
   const adresValue = adresInput.value;
   const adres2Input = document.getElementById("address2");
   const adres2Value = adres2Input.value;
   const mahalleInput = document.getElementById("country");
   const mahalleValue = mahalleInput.value;
   const masaInput = document.getElementById("masaInput");
   const masaValue = masaInput.value;
   const sandalyeInput = document.getElementById("sandalyeInput");
   const sandalyeValue = sandalyeInput.value;
   const odemeCheck = document.getElementById("odeme-check");
   
   if(odemeCheck.checked){
   await setDoc(doc(db, "kullanicilar", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: true,
   });
   location.reload();
   }else{
   await setDoc(doc(db, "kullanicilar-odemesiz", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: false,
   });
   location.reload();
   }
   
async function updateAdetValue() {
    const sayi_ = doc(db, "bilgi", "adet");
   
    const docSnap2 = await getDoc(sayi_); 
    if (docSnap2.exists()) {
        const masa = docSnap2.data().masa;
        const sandalye = docSnap2.data().sandalye;
        const masa_fiyat = docSnap2.data().masa_fiyat
        const sandalye_fiyat = docSnap2.data().sandalye_fiyat
   
   
        const sandalyefiyat = document.getElementById("sandalyePlaceholder");
        sandalyefiyat.textContent = sandalye_fiyat + " TL";
        const masafiyat = document.getElementById("masaPlaceholder");
        masafiyat.textContent = masa_fiyat + " TL";
        
        const adetValueElement = document.getElementById("adetValue");
        adetValueElement.textContent = `Depodaki Mevcut Sayı: ${masa}`;
   
        const adetValueElement2 = document.getElementById("adetValue2");
        adetValueElement2.textContent = `Depodaki Mevcut Sayı: ${sandalye}`;
    } else {
        console.log("No such document!");
    }
   }
   updateAdetValue();
   
   const paymentButton = document.getElementById("odeme-buton");
   paymentButton.addEventListener("click", async function(event) {
   event.preventDefault();
   const toplamUcretElement = document.getElementById("toplam-ucret");
   const toplamUcret = toplamUcretElement.textContent;
   const tckimlikInput = document.getElementById("tckimlik");
   const tckimlikValue = tckimlikInput.value;
   const isimInput = document.getElementById("firstName");
   const isimValue = isimInput.value;
   const soyisimInput = document.getElementById("lastName");
   const soyisimValue = soyisimInput.value;
   const mailInput = document.getElementById("email");
   const mailValue = mailInput.value;
   const adresInput = document.getElementById("address");
   const adresValue = adresInput.value;
   const adres2Input = document.getElementById("address2");
   const adres2Value = adres2Input.value;
   const mahalleInput = document.getElementById("country");
   const mahalleValue = mahalleInput.value;
   const masaInput = document.getElementById("masaInput");
   const masaValue = masaInput.value;
   const sandalyeInput = document.getElementById("sandalyeInput");
   const sandalyeValue = sandalyeInput.value;
   const odemeCheck = document.getElementById("odeme-check");
   
   if(odemeCheck.checked){
   await setDoc(doc(db, "kullanicilar", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: true,
   });
   location.reload();
   }else{
   await setDoc(doc(db, "kullanicilar-odemesiz", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: false,
   });
   location.reload();
   }
   
async function updateAdetValue() {
    const sayi_ = doc(db, "bilgi", "adet");
   
    const docSnap2 = await getDoc(sayi_); 
    if (docSnap2.exists()) {
        const masa = docSnap2.data().masa;
        const sandalye = docSnap2.data().sandalye;
        const masa_fiyat = docSnap2.data().masa_fiyat
        const sandalye_fiyat = docSnap2.data().sandalye_fiyat
   
   
        const sandalyefiyat = document.getElementById("sandalyePlaceholder");
        sandalyefiyat.textContent = sandalye_fiyat + " TL";
        const masafiyat = document.getElementById("masaPlaceholder");
        masafiyat.textContent = masa_fiyat + " TL";
        
        const adetValueElement = document.getElementById("adetValue");
        adetValueElement.textContent = `Depodaki Mevcut Sayı: ${masa}`;
   
        const adetValueElement2 = document.getElementById("adetValue2");
        adetValueElement2.textContent = `Depodaki Mevcut Sayı: ${sandalye}`;
    } else {
        console.log("No such document!");
    }
   }
   updateAdetValue();
   
   const paymentButton = document.getElementById("odeme-buton");
   paymentButton.addEventListener("click", async function(event) {
   event.preventDefault();
   const toplamUcretElement = document.getElementById("toplam-ucret");
   const toplamUcret = toplamUcretElement.textContent;
   const tckimlikInput = document.getElementById("tckimlik");
   const tckimlikValue = tckimlikInput.value;
   const isimInput = document.getElementById("firstName");
   const isimValue = isimInput.value;
   const soyisimInput = document.getElementById("lastName");
   const soyisimValue = soyisimInput.value;
   const mailInput = document.getElementById("email");
   const mailValue = mailInput.value;
   const adresInput = document.getElementById("address");
   const adresValue = adresInput.value;
   const adres2Input = document.getElementById("address2");
   const adres2Value = adres2Input.value;
   const mahalleInput = document.getElementById("country");
   const mahalleValue = mahalleInput.value;
   const masaInput = document.getElementById("masaInput");
   const masaValue = masaInput.value;
   const sandalyeInput = document.getElementById("sandalyeInput");
   const sandalyeValue = sandalyeInput.value;
   const odemeCheck = document.getElementById("odeme-check");
   
   if(odemeCheck.checked){
   await setDoc(doc(db, "kullanicilar", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: true,
   });
   location.reload();
   }else{
   await setDoc(doc(db, "kullanicilar-odemesiz", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: false,
   });
   location.reload();
   }
   
async function updateAdetValue() {
    const sayi_ = doc(db, "bilgi", "adet");
   
    const docSnap2 = await getDoc(sayi_); 
    if (docSnap2.exists()) {
        const masa = docSnap2.data().masa;
        const sandalye = docSnap2.data().sandalye;
        const masa_fiyat = docSnap2.data().masa_fiyat
        const sandalye_fiyat = docSnap2.data().sandalye_fiyat
   
   
        const sandalyefiyat = document.getElementById("sandalyePlaceholder");
        sandalyefiyat.textContent = sandalye_fiyat + " TL";
        const masafiyat = document.getElementById("masaPlaceholder");
        masafiyat.textContent = masa_fiyat + " TL";
        
        const adetValueElement = document.getElementById("adetValue");
        adetValueElement.textContent = `Depodaki Mevcut Sayı: ${masa}`;
   
        const adetValueElement2 = document.getElementById("adetValue2");
        adetValueElement2.textContent = `Depodaki Mevcut Sayı: ${sandalye}`;
    } else {
        console.log("No such document!");
    }
   }
   updateAdetValue();
   
   const paymentButton = document.getElementById("odeme-buton");
   paymentButton.addEventListener("click", async function(event) {
   event.preventDefault();
   const toplamUcretElement = document.getElementById("toplam-ucret");
   const toplamUcret = toplamUcretElement.textContent;
   const tckimlikInput = document.getElementById("tckimlik");
   const tckimlikValue = tckimlikInput.value;
   const isimInput = document.getElementById("firstName");
   const isimValue = isimInput.value;
   const soyisimInput = document.getElementById("lastName");
   const soyisimValue = soyisimInput.value;
   const mailInput = document.getElementById("email");
   const mailValue = mailInput.value;
   const adresInput = document.getElementById("address");
   const adresValue = adresInput.value;
   const adres2Input = document.getElementById("address2");
   const adres2Value = adres2Input.value;
   const mahalleInput = document.getElementById("country");
   const mahalleValue = mahalleInput.value;
   const masaInput = document.getElementById("masaInput");
   const masaValue = masaInput.value;
   const sandalyeInput = document.getElementById("sandalyeInput");
   const sandalyeValue = sandalyeInput.value;
   const odemeCheck = document.getElementById("odeme-check");
   
   if(odemeCheck.checked){
   await setDoc(doc(db, "kullanicilar", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: true,
   });
   location.reload();
   }else{
   await setDoc(doc(db, "kullanicilar-odemesiz", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: false,
   });
   location.reload();
   }
   
async function updateAdetValue() {
    const sayi_ = doc(db, "bilgi", "adet");
   
    const docSnap2 = await getDoc(sayi_); 
    if (docSnap2.exists()) {
        const masa = docSnap2.data().masa;
        const sandalye = docSnap2.data().sandalye;
        const masa_fiyat = docSnap2.data().masa_fiyat
        const sandalye_fiyat = docSnap2.data().sandalye_fiyat
   
   
        const sandalyefiyat = document.getElementById("sandalyePlaceholder");
        sandalyefiyat.textContent = sandalye_fiyat + " TL";
        const masafiyat = document.getElementById("masaPlaceholder");
        masafiyat.textContent = masa_fiyat + " TL";
        
        const adetValueElement = document.getElementById("adetValue");
        adetValueElement.textContent = `Depodaki Mevcut Sayı: ${masa}`;
   
        const adetValueElement2 = document.getElementById("adetValue2");
        adetValueElement2.textContent = `Depodaki Mevcut Sayı: ${sandalye}`;
    } else {
        console.log("No such document!");
    }
   }
   updateAdetValue();
   
   const paymentButton = document.getElementById("odeme-buton");
   paymentButton.addEventListener("click", async function(event) {
   event.preventDefault();
   const toplamUcretElement = document.getElementById("toplam-ucret");
   const toplamUcret = toplamUcretElement.textContent;
   const tckimlikInput = document.getElementById("tckimlik");
   const tckimlikValue = tckimlikInput.value;
   const isimInput = document.getElementById("firstName");
   const isimValue = isimInput.value;
   const soyisimInput = document.getElementById("lastName");
   const soyisimValue = soyisimInput.value;
   const mailInput = document.getElementById("email");
   const mailValue = mailInput.value;
   const adresInput = document.getElementById("address");
   const adresValue = adresInput.value;
   const adres2Input = document.getElementById("address2");
   const adres2Value = adres2Input.value;
   const mahalleInput = document.getElementById("country");
   const mahalleValue = mahalleInput.value;
   const masaInput = document.getElementById("masaInput");
   const masaValue = masaInput.value;
   const sandalyeInput = document.getElementById("sandalyeInput");
   const sandalyeValue = sandalyeInput.value;
   const odemeCheck = document.getElementById("odeme-check");
   
   if(odemeCheck.checked){
   await setDoc(doc(db, "kullanicilar", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: true,
   });
   location.reload();
   }else{
   await setDoc(doc(db, "kullanicilar-odemesiz", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: false,
   });
   location.reload();
   }
   
async function updateAdetValue() {
    const sayi_ = doc(db, "bilgi", "adet");
   
    const docSnap2 = await getDoc(sayi_); 
    if (docSnap2.exists()) {
        const masa = docSnap2.data().masa;
        const sandalye = docSnap2.data().sandalye;
        const masa_fiyat = docSnap2.data().masa_fiyat
        const sandalye_fiyat = docSnap2.data().sandalye_fiyat
   
   
        const sandalyefiyat = document.getElementById("sandalyePlaceholder");
        sandalyefiyat.textContent = sandalye_fiyat + " TL";
        const masafiyat = document.getElementById("masaPlaceholder");
        masafiyat.textContent = masa_fiyat + " TL";
        
        const adetValueElement = document.getElementById("adetValue");
        adetValueElement.textContent = `Depodaki Mevcut Sayı: ${masa}`;
   
        const adetValueElement2 = document.getElementById("adetValue2");
        adetValueElement2.textContent = `Depodaki Mevcut Sayı: ${sandalye}`;
    } else {
        console.log("No such document!");
    }
   }
   updateAdetValue();
   
   const paymentButton = document.getElementById("odeme-buton");
   paymentButton.addEventListener("click", async function(event) {
   event.preventDefault();
   const toplamUcretElement = document.getElementById("toplam-ucret");
   const toplamUcret = toplamUcretElement.textContent;
   const tckimlikInput = document.getElementById("tckimlik");
   const tckimlikValue = tckimlikInput.value;
   const isimInput = document.getElementById("firstName");
   const isimValue = isimInput.value;
   const soyisimInput = document.getElementById("lastName");
   const soyisimValue = soyisimInput.value;
   const mailInput = document.getElementById("email");
   const mailValue = mailInput.value;
   const adresInput = document.getElementById("address");
   const adresValue = adresInput.value;
   const adres2Input = document.getElementById("address2");
   const adres2Value = adres2Input.value;
   const mahalleInput = document.getElementById("country");
   const mahalleValue = mahalleInput.value;
   const masaInput = document.getElementById("masaInput");
   const masaValue = masaInput.value;
   const sandalyeInput = document.getElementById("sandalyeInput");
   const sandalyeValue = sandalyeInput.value;
   const odemeCheck = document.getElementById("odeme-check");
   
   if(odemeCheck.checked){
   await setDoc(doc(db, "kullanicilar", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: true,
   });
   location.reload();
   }else{
   await setDoc(doc(db, "kullanicilar-odemesiz", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: false,
   });
   location.reload();
   }
   
async function updateAdetValue() {
    const sayi_ = doc(db, "bilgi", "adet");
   
    const docSnap2 = await getDoc(sayi_); 
    if (docSnap2.exists()) {
        const masa = docSnap2.data().masa;
        const sandalye = docSnap2.data().sandalye;
        const masa_fiyat = docSnap2.data().masa_fiyat
        const sandalye_fiyat = docSnap2.data().sandalye_fiyat
   
   
        const sandalyefiyat = document.getElementById("sandalyePlaceholder");
        sandalyefiyat.textContent = sandalye_fiyat + " TL";
        const masafiyat = document.getElementById("masaPlaceholder");
        masafiyat.textContent = masa_fiyat + " TL";
        
        const adetValueElement = document.getElementById("adetValue");
        adetValueElement.textContent = `Depodaki Mevcut Sayı: ${masa}`;
   
        const adetValueElement2 = document.getElementById("adetValue2");
        adetValueElement2.textContent = `Depodaki Mevcut Sayı: ${sandalye}`;
    } else {
        console.log("No such document!");
    }
   }
   updateAdetValue();
   
   const paymentButton = document.getElementById("odeme-buton");
   paymentButton.addEventListener("click", async function(event) {
   event.preventDefault();
   const toplamUcretElement = document.getElementById("toplam-ucret");
   const toplamUcret = toplamUcretElement.textContent;
   const tckimlikInput = document.getElementById("tckimlik");
   const tckimlikValue = tckimlikInput.value;
   const isimInput = document.getElementById("firstName");
   const isimValue = isimInput.value;
   const soyisimInput = document.getElementById("lastName");
   const soyisimValue = soyisimInput.value;
   const mailInput = document.getElementById("email");
   const mailValue = mailInput.value;
   const adresInput = document.getElementById("address");
   const adresValue = adresInput.value;
   const adres2Input = document.getElementById("address2");
   const adres2Value = adres2Input.value;
   const mahalleInput = document.getElementById("country");
   const mahalleValue = mahalleInput.value;
   const masaInput = document.getElementById("masaInput");
   const masaValue = masaInput.value;
   const sandalyeInput = document.getElementById("sandalyeInput");
   const sandalyeValue = sandalyeInput.value;
   const odemeCheck = document.getElementById("odeme-check");
   
   if(odemeCheck.checked){
   await setDoc(doc(db, "kullanicilar", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: true,
   });
   location.reload();
   }else{
   await setDoc(doc(db, "kullanicilar-odemesiz", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: false,
   });
   location.reload();
   }
   
async function updateAdetValue() {
    const sayi_ = doc(db, "bilgi", "adet");
   
    const docSnap2 = await getDoc(sayi_); 
    if (docSnap2.exists()) {
        const masa = docSnap2.data().masa;
        const sandalye = docSnap2.data().sandalye;
        const masa_fiyat = docSnap2.data().masa_fiyat
        const sandalye_fiyat = docSnap2.data().sandalye_fiyat
   
   
        const sandalyefiyat = document.getElementById("sandalyePlaceholder");
        sandalyefiyat.textContent = sandalye_fiyat + " TL";
        const masafiyat = document.getElementById("masaPlaceholder");
        masafiyat.textContent = masa_fiyat + " TL";
        
        const adetValueElement = document.getElementById("adetValue");
        adetValueElement.textContent = `Depodaki Mevcut Sayı: ${masa}`;
   
        const adetValueElement2 = document.getElementById("adetValue2");
        adetValueElement2.textContent = `Depodaki Mevcut Sayı: ${sandalye}`;
    } else {
        console.log("No such document!");
    }
   }
   updateAdetValue();
   
   const paymentButton = document.getElementById("odeme-buton");
   paymentButton.addEventListener("click", async function(event) {
   event.preventDefault();
   const toplamUcretElement = document.getElementById("toplam-ucret");
   const toplamUcret = toplamUcretElement.textContent;
   const tckimlikInput = document.getElementById("tckimlik");
   const tckimlikValue = tckimlikInput.value;
   const isimInput = document.getElementById("firstName");
   const isimValue = isimInput.value;
   const soyisimInput = document.getElementById("lastName");
   const soyisimValue = soyisimInput.value;
   const mailInput = document.getElementById("email");
   const mailValue = mailInput.value;
   const adresInput = document.getElementById("address");
   const adresValue = adresInput.value;
   const adres2Input = document.getElementById("address2");
   const adres2Value = adres2Input.value;
   const mahalleInput = document.getElementById("country");
   const mahalleValue = mahalleInput.value;
   const masaInput = document.getElementById("masaInput");
   const masaValue = masaInput.value;
   const sandalyeInput = document.getElementById("sandalyeInput");
   const sandalyeValue = sandalyeInput.value;
   const odemeCheck = document.getElementById("odeme-check");
   
   if(odemeCheck.checked){
   await setDoc(doc(db, "kullanicilar", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: true,
   });
   location.reload();
   }else{
   await setDoc(doc(db, "kullanicilar-odemesiz", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: false,
   });
   location.reload();
   }
   
async function updateAdetValue() {
    const sayi_ = doc(db, "bilgi", "adet");
   
    const docSnap2 = await getDoc(sayi_); 
    if (docSnap2.exists()) {
        const masa = docSnap2.data().masa;
        const sandalye = docSnap2.data().sandalye;
        const masa_fiyat = docSnap2.data().masa_fiyat
        const sandalye_fiyat = docSnap2.data().sandalye_fiyat
   
   
        const sandalyefiyat = document.getElementById("sandalyePlaceholder");
        sandalyefiyat.textContent = sandalye_fiyat + " TL";
        const masafiyat = document.getElementById("masaPlaceholder");
        masafiyat.textContent = masa_fiyat + " TL";
        
        const adetValueElement = document.getElementById("adetValue");
        adetValueElement.textContent = `Depodaki Mevcut Sayı: ${masa}`;
   
        const adetValueElement2 = document.getElementById("adetValue2");
        adetValueElement2.textContent = `Depodaki Mevcut Sayı: ${sandalye}`;
    } else {
        console.log("No such document!");
    }
   }
   updateAdetValue();
   
   const paymentButton = document.getElementById("odeme-buton");
   paymentButton.addEventListener("click", async function(event) {
   event.preventDefault();
   const toplamUcretElement = document.getElementById("toplam-ucret");
   const toplamUcret = toplamUcretElement.textContent;
   const tckimlikInput = document.getElementById("tckimlik");
   const tckimlikValue = tckimlikInput.value;
   const isimInput = document.getElementById("firstName");
   const isimValue = isimInput.value;
   const soyisimInput = document.getElementById("lastName");
   const soyisimValue = soyisimInput.value;
   const mailInput = document.getElementById("email");
   const mailValue = mailInput.value;
   const adresInput = document.getElementById("address");
   const adresValue = adresInput.value;
   const adres2Input = document.getElementById("address2");
   const adres2Value = adres2Input.value;
   const mahalleInput = document.getElementById("country");
   const mahalleValue = mahalleInput.value;
   const masaInput = document.getElementById("masaInput");
   const masaValue = masaInput.value;
   const sandalyeInput = document.getElementById("sandalyeInput");
   const sandalyeValue = sandalyeInput.value;
   const odemeCheck = document.getElementById("odeme-check");
   
   if(odemeCheck.checked){
   await setDoc(doc(db, "kullanicilar", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: true,
   });
   location.reload();
   }else{
   await setDoc(doc(db, "kullanicilar-odemesiz", tckimlikValue), {
   isim: isimValue,
   soyisim: soyisimValue,
   mail: mailValue,
   tc: tckimlikValue,
   adres: adresValue + " " + " " + mahalleValue,
   telefon: adres2Value,
   alinanmasa: masaValue,
   alinansandalye: sandalyeValue,
   toplamucret: toplamUcret,
   odeme: false,
   });
   location.reload();
   }




const adetler = doc(db, "bilgi", "adet");
const docSnap2 = await getDoc(adetler);
 if (docSnap2.exists()) {
     const masa = docSnap2.data().masa;
     const sandalye = docSnap2.data().sandalye;

     const yeniMasaAdet = masa - masaValue;
     const yeniSandalyeAdet = sandalye - sandalyeValue;

     // Veritabanına güncellenmiş değeri kaydedin
     await updateDoc(adetler, {
         masa: yeniMasaAdet,
         sandalye: yeniSandalyeAdet,
     });
};
});

//Buton ile sayı arttırma
document.getElementById("myButton").onclick = async function() {
const sayi_ = doc(db, "bilgi", "adet");
const azaltAdetInput = document.getElementById("azaltAdetInput");
const azaltAdet = parseInt(azaltAdetInput.value, 10);
 if (isNaN(azaltAdet) || azaltAdet < 1) {
     alert("Hatalı değer girdiniz! Lütfen 1 veya daha büyük bir sayı girin.");
     return;
 }

// Veritabanından "adet" alanını alın
 const docSnap2 = await getDoc(sayi_);
 if (docSnap2.exists()) {
     const masa = docSnap2.data().masa;

     const yeniAdet = masa - azaltAdet;

     if (yeniAdet < 0) {
         alert("Lütfen geçerli bir sayı giriniz.!");
         return;
     }

     await updateDoc(sayi_, {
         masa: yeniAdet
     });


     var veriListesi = document.getElementById("veriListesi");
     var li = document.createElement("li");
     li.textContent = `Güncellenmiş Veri: ${yeniAdet} (Azaltılan Adet: ${azaltAdet})`;
     veriListesi.appendChild(li);
 } else {
     console.log("No such document!");
 }
};

auth.onAuthStateChanged(function (user) {
if (user) {
console.log(user);
} else {
window.location.href = 'login.html';
}
});

const firebaseConfig = {
    apiKey: "AIzaSyDenol5uVp5yDBBnUCNTonO9cQUU-trWF8",
    authDomain: "kartepebelediye.firebaseapp.com",
    projectId: "kartepebelediye",
    storageBucket: "kartepebelediye.appspot.com",
    messagingSenderId: "993270259189",
    appId: "1:993270259189:web:9f2c893c694f1d768b14bc",
 };
 
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 
 const buton = document.getElementById("logButton");
 
 
     buton.addEventListener("click", function(event) {
     event.preventDefault();
     const emailInput = document.getElementById("emailInput");
     const emailValue = emailInput.value;
     const passwordInput = document.getElementById("passwordInput");
     const passwordValue = passwordInput.value;
 
     signInWithEmailAndPassword(auth, emailValue, passwordValue)
   .then((userCredential) => {
 
     const user = userCredential.user;
     window.location.href = 'menu.html';
 
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     
   });  
 });
