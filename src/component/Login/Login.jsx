import React, { useEffect, useState } from 'react';


const link = "https://dev.rackoot.com/api/v1/authorize?response_type=code&client_id=ab9b924fdeceaf56d826cfcd8b5579da74528435eacc937e48404758c5995f26&scope=profile+rackoots+tiles&redirect_uri=https://chat.rackoot.com/oauth2/callback/app0554213m"



const Login = () => {
    const [url, setUrl] = useState('');

    useEffect(() => {
      const captureUrl = () => {
        const url = window.location.href;
        setUrl(url);
        console.log(url);
      };
  
      captureUrl();
    }, []);

    return (
        <div>
            {/* <iframe src= {link} frameborder="0"></iframe> */}
            <a href={link} target='_self' >Login</a>
            <p>{url}</p>
        </div>
    );
};

export default Login;