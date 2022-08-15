import '../styles/globals.css'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth, db} from '../firebase'
import Login  from './login'
import Loading from '../components/Loading'
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useEffect } from 'react'
function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth)
  useEffect(() => {
    if(user) {
     async ()=>{

       const collectionRef = collection(db, 'user')
       const docRef = doc(collectionRef,user.id)
       await setDoc(docRef,{
        email: user.email,
         lastSeem: serverTimestamp(),
         photoURL: user.photoURL
       }, {merge:true})
      }
      
    }
  }, [user])

  if (loading) return <Loading/>
  if(!user) return <Login/>
  return <Component {...pageProps} />
}

export default MyApp
