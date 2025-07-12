<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyB1eBF5ev-pWUuALGlIMitGrYhhQ8GvnsM",
    authDomain: "career-guidance-a3bc4.firebaseapp.com",
    projectId: "career-guidance-a3bc4",
    storageBucket: "career-guidance-a3bc4.appspot.com",
    messagingSenderId: "574933015228",
    appId: "1:574933015228:web:eac8ec063efa8f3df34eb9",
    measurementId: "G-4W2B5FDNXP"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
</script>
