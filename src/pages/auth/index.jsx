import {auth, provider} from "../..config/firebase-config" 
export const Auth =() => {
    const signInWithGoogle = () =>{

    }
    return(
    <div className="login-page">
        <p>Sign In With Google to Continue</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
            {""}
            Sign in with Google
        </button>
        </div>
    )
}