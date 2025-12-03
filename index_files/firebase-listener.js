import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  doc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Tu config:
const firebaseConfig = {
  apiKey: "AIzaSyBJ5YnGxQuNdVEzEJ8NBvE3OYjBKoHFtDY",
  authDomain: "panelxa-40050.firebaseapp.com",
  projectId: "panelxa-40050",
  storageBucket: "panelxa-40050.firebasestorage.app",
  messagingSenderId: "87093755032",
  appId: "1:87093755032:web:a093210b3b94243dfbe4ed",
  measurementId: "G-BTTFC9GTFS",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Suscribe en tiempo real al documento del usuario
 * @param {string} userId - ID del documento en Firestore
 * @param {function} callback - Función que recibe los datos actualizados
 */
export function subscribeUserDocument(userId, callback) {
  const ref = doc(db, "panel", userId);

  console.log("👂 Escuchando cambios del usuario:", userId);

  const unsubscribe = onSnapshot(
    ref,
    (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        console.log("🔥 Documento actualizado:", data);
        callback(data);
      } else {
        console.warn("⚠ Documento no existe.");
      }
    },
    (error) => {
      console.error("❌ Error escuchando documento:", error);
    }
  );

  return unsubscribe; // Permite cancelar la escucha cuando quieras
}
