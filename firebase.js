import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  collection,
  addDoc,
  getDocs,
  serverTimestamp
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAYY-JALpqdp0e7Y4mbA-E-W1IIqUpwHzk",
  authDomain: "world-geography-quiz-843b8.firebaseapp.com",
  projectId: "world-geography-quiz-843b8",
  storageBucket: "world-geography-quiz-843b8.firebasestorage.app",
  messagingSenderId: "934733229268",
  appId: "1:934733229268:web:cfcb67e38edcae55015f41",
  measurementId: "G-BQL266BPKD"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);

const stars = document.querySelectorAll(".star");

const averageRatingElement =
document.getElementById("averageRating");

const totalRatingsElement =
document.getElementById("totalRatings");


console.log("Firebase Connected Successfully");

export { db };

const visitorElement =
  document.getElementById("visitorCount");

if (visitorElement) {

  const visitorRef =
    doc(db, "visitors", "counter");

  const alreadyCounted =
    sessionStorage.getItem("visitCounted");

  getDoc(visitorRef).then(async (snapshot) => {

    if (snapshot.exists()) {

      let currentCount =
        parseInt(snapshot.data().count) || 0;

      if (!alreadyCounted) {

        currentCount++;

        await updateDoc(visitorRef, {
          count: currentCount.toString()
        });

        sessionStorage.setItem(
          "visitCounted",
          "true"
        );

      }

      visitorElement.textContent =
        currentCount;

    }

  });

}

async function loadRatings() {

  const ratingsRef =
  collection(db, "ratings");

  const snapshot =
  await getDocs(ratingsRef);

  let total = 0;
  let count = 0;

  snapshot.forEach((doc) => {

    const rating =
    parseInt(doc.data().rating);

    if (!isNaN(rating)) {

      total += rating;
      count++;

    }

  });

  const average =
  count > 0
  ? (total / count).toFixed(1)
  : 0;

  averageRatingElement.textContent =
  `Average Rating: ${average} / 5`;

  totalRatingsElement.textContent =
  `Total Ratings: ${count}`;

}

if (stars.length > 0) {

  stars.forEach((star) => {

    star.addEventListener("click", async () => {

      const today =
      new Date().toDateString();

      const lastRatedDate =
      localStorage.getItem("lastRatedDate");

      if (lastRatedDate === today) {

        alert("You already rated today.");

        return;

      }

      const rating =
      star.dataset.rating;

      await addDoc(
        collection(db, "ratings"),
        {
          rating: rating,
          createdAt:
          new Date().toISOString()
        }
      );

      localStorage.setItem(
        "lastRatedDate",
        today
      );

      alert("Thank you for rating!");

      loadRatings();

    });

  });

  loadRatings();

}

const feedbackBtn =
document.getElementById("submitFeedback");

if (feedbackBtn) {

  feedbackBtn.addEventListener("click", async () => {

    const name =
      document.getElementById("feedbackName").value.trim();

    const message =
      document.getElementById("feedbackMessage").value.trim();

    if (!name || !message) {

      alert("Please fill in all fields.");
      return;

    }

    await addDoc(collection(db, "feedback"), {

      name: name,
      message: message,
      createdAt: serverTimestamp()

    });

    alert("Thank you for your feedback!");

    document.getElementById("feedbackName").value = "";
    document.getElementById("feedbackMessage").value = "";

  });

}