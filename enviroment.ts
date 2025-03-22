import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCyKIU40hEoGPjQuD8Z8ofPUAKVr6HAfBg",
  authDomain: "visualizador-tiempo.firebaseapp.com",
  projectId: "visualizador-tiempo",
  storageBucket: "visualizador-tiempo.firebasestorage.app",
  messagingSenderId: "235302795774",
  appId: "1:235302795774:web:c23fadd6ebc762eb04a8af",
  measurementId: "G-W6BD1EHH5W"
};

export const environment = {
  production: false,
  firebase: firebaseConfig
};


const app = initializeApp(firebaseConfig);