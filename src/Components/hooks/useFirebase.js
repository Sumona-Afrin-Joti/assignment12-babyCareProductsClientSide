import authInitialization from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import swal from 'sweetalert';


authInitialization()
const useFirebase = () => {

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError('')
        const user = {
          email, displayName: name
        }
        setUser(user);

        swal("Good job!", "successfully signed up!", "success");

        //updating profile
        profileUpdate(name);
        // calling saveUserToDb
        saveUserToDb(email, name, 'POST');

        history.push('/')

      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false))

  }

  const profileUpdate = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
      .then(() => {

      })
      .catch(error => {
        setError(error.message);

      })
  }

  const loginUser = (email, password, location, history) => {
    setIsLoading(true)

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError('');
        swal("Good job!", "successfully loged in!", "success");

        const destination = location?.state?.from || '/';
        history.push(destination);

      })
      .catch((error) => {
        setError(error.message);

      })
      .finally(() => setIsLoading(false))

  }

  const signInUsingGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
        saveUserToDb(user.email, user.displayName, 'PUT');
        const destination = location?.state?.from || '/';
        history.push(destination)
        setError('');
      })
      .catch((error) => {
        setError(error.message);

      })
      .finally(() => setIsLoading(false));

  }


  useEffect(() => {
    setIsLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }

      setIsLoading(false);

    });

    return () => unsubscribe;

  }, []);



  const logOut = () => {
    setIsLoading(true)

    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      setError(error.message);
    })
      .finally(() => setIsLoading(false))

  };

  const saveUserToDb = (email, displayName, method) => {
    const user = { email, displayName };

    fetch('https://floating-river-34453.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {

      })

  }

  useEffect(() => {
    fetch(`https://floating-river-34453.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setIsAdmin(data.admin))
  }, [user.email])

  return {
    registerUser,
    error,
    setError,
    loginUser,
    signInUsingGoogle,
    user,
    logOut,
    isLoading,
    setIsLoading,
    isAdmin
  }

}


export default useFirebase;
