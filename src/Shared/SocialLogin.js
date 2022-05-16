import { faFacebookF, faGoogle } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    // const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);

    return (
        <div>
            <div className="divider">OR</div>
            <div>
                <button className='border w-full py-2 tracking-wide flex justify-center items-center'
                    onClick={() => signInWithGoogle()}>
                    <FontAwesomeIcon icon={faGoogle} className='text-orange-500 pr-2 
                basis-[20%]'></FontAwesomeIcon>
                    <p>Sign in With Google</p>

                </button>
                {/* <button className='border w-full py-2 mt-2 tracking-wide flex justify-center items-center'
                    onClick={() => signInWithFacebook()}>
                    <FontAwesomeIcon icon={faFacebookF} className='text-blue-500 pr-2 basis-[20%] 
                '></FontAwesomeIcon>
                    <p>Sign in With Facebook</p>
                </button> */}
            </div>
        </div>
    );
};

export default SocialLogin;