import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAvSy9KTlio8srM2785T-MfPNTPrZntdFs',
	authDomain: 'pawsgo-7d6e0.firebaseapp.com',
	projectId: 'pawsgo-7d6e0',
	storageBucket: 'pawsgo-7d6e0.appspot.com',
	messagingSenderId: '1041060909041',
	appId: '1:1041060909041:web:26b040917e8fabd3ab7e50',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
