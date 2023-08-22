import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
               import { getFirestore, doc, getDoc, getDocs, collection, query , where, updateDoc,arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

            const firebaseConfig = {
                apiKey: "AIzaSyDenol5uVp5yDBBnUCNTonO9cQUU-trWF8",
                authDomain: "kartepebelediye.firebaseapp.com",
                projectId: "kartepebelediye",
                storageBucket: "kartepebelediye.appspot.com",
                messagingSenderId: "993270259189",
                appId: "1:993270259189:web:9f2c893c694f1d768b14bc",
            };

            const app = initializeApp(firebaseConfig);

            const db = getFirestore(app);

            document.addEventListener("DOMContentLoaded", async function (){async function updateAdetValue() {
              const sayi_ = doc(db, "bilgi", "adet");

              const docSnap2 = await getDoc(sayi_); 
              if (docSnap2.exists()) {
                  const masa = docSnap2.data().masa;

                  
                  const adetValueElement = document.getElementById("adetValue");
                  adetValueElement.textContent = `Adet Sayısı: ${masa}`;
              } else {
                  console.log("No such document!");
              }
          }
          updateAdetValue(); 
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
     
                         // Veritabanına güncellenmiş değeri kaydedin
                         await updateDoc(sayi_, {
                             masa: yeniAdet
                         });
     
                         // Veriyi ekrana yazdırın
                         var veriListesi = document.getElementById("veriListesi");
                         var li = document.createElement("li");
                         li.textContent = `Güncellenmiş Veri: ${yeniAdet} (Azaltılan Adet: ${azaltAdet})`;
                         veriListesi.appendChild(li);
                     } else {
                         console.log("No such document!");
                     }
                 };
        }
            );
            



            //Buton ile sayı arttırma
            
          
        