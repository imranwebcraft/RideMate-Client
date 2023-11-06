import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import auth from '../Config/firebase.config';
// Auth context
export const AuthContext = createContext();

// PRovider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

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

	// Observer
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setLoading(true);
			setUser(currentUser);
			setLoading(false);
			console.log('Observer', currentUser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	// Provider value
	const authInfo = { user, loading, createUser, googleSignIn, logIn, logOut };

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
