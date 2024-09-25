// Import các thư viện cần thiết từ Firebase và AsyncStorage
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, signInWithEmailAndPassword } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore'; // Nếu bạn dùng Firestore

// Cấu hình Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD5he1vqUFNsFnc-o3glYz-y7qfKBgsRjo",
    authDomain: "fir-authexpo-da0cd.firebaseapp.com",
    databaseURL: "https://fir-authexpo-da0cd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-authexpo-da0cd",
    storageBucket: "fir-authexpo-da0cd.appspot.com",
    messagingSenderId: "606213271389",
    appId: "1:606213271389:web:1246cc5da96d483c20c2b4",
    measurementId: "G-V635KKNNJK"
};

// Khởi tạo Firebase App
const app = initializeApp(firebaseConfig);

// Khởi tạo Firebase Auth với AsyncStorage để lưu trạng thái đăng nhập giữa các phiên
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Khởi tạo Firestore
const db = getFirestore(app);

// Xuất các đối tượng auth và db để sử dụng trong các phần khác của ứng dụng
export { auth, signInWithEmailAndPassword, db };
