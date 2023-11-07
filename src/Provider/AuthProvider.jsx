import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import auth from '../Config/firebase.config';
import useAxios from '../Hook/useAxios';
// Auth context
export const AuthContext = createContext();

// PRovider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	// Auth State
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Hook
	const axios = useAxios();

	// Create User
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Login
	const logIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// LogOut
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	// Google sign in
	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	// Update user profile
	const profileUpdate = (name, photo) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	// Observer
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			const userEmail = currentUser?.email || user?.email;
			const email = { email: userEmail };

			setLoading(true);
			setUser(currentUser);
			setLoading(false);
			console.log('Observer', currentUser);

			// Access Token
			if (currentUser) {
				axios.post('/auth/access-token', email);
			} else {
				axios.post('/auth/logout', email).then(res => console.log(res.data));
			}
		});

		return () => {
			unsubscribe();
		};
	}, [axios, user?.email]);

	// Provider value
	const authInfo = {
		user,
		loading,
		createUser,
		googleSignIn,
		logIn,
		logOut,
		profileUpdate,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
