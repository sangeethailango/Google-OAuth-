import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function App() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
			<div>
					<h2>Login with your google</h2>
					<br />
					<br />
					<GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
			</div>
    )
}
export default App;