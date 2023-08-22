

               import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
               import { getFirestore, doc, getDoc, getDocs, collection, query , where } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

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

            const docRef = doc(db, "test1", "test2");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const q = query(collection(db, "test1"), where("capital", "==", true));

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    var veriListesi = document.getElementById("veriListesi");
                    var li = document.createElement("li");
                    li.textContent = "Veri: " + JSON.stringify(doc.id);
                    veriListesi.appendChild(li);
                    console.log(doc.id, " => ", doc.data());
                 });
                console.log("Document data:", docSnap.data());

                

                } else {
  // docSnap.data() will be undefined in this case
            console.log("No such document!");
            }

            
