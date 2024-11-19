import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/Auth/AuthProvider';

const MyProfile = () => {
    const { user } = useContext( AuthContext )
    // console.log(user.providerData);
    // const { displayName, email, photoURL } = user
    // console.log(displayName, email, photoURL );
    return (
        <div className='flex flex-col gap-5 justify-end items-center text-center my-14'>
            <p className='text-4xl font-bold text-teal-700 mb-16'>Wellcome {user.displayName} on your profile</p>
            <div>
                <img className='h-[200px] w-[200px] object-cover rounded-full border-2' src={user.photoURL} alt="" />
            </div>
            <p className='text-2xl font-bold'>Name: {user.displayName}</p>
            <p className='text-xl font-semibold'>Email: {user.email}</p>
            <Link className='btn btn-outline btn-success' to="/updateprofile">Update Your Profile</Link>
        </div>
    );
};

export default MyProfile;


// {
//     "uid": "ymiICBAegaNRHyq9ARGOubWr50r2",
//     "email": "sabujpaul05@gmail.com",
//     "emailVerified": true,
//     "displayName": "Sabuj Paul",
//     "isAnonymous": false,
//     "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocLwUFb2xqs5eAH_JZ2DihO6pWIZTfd4vWcYJhh_lC8kbXcyu9zg=s96-c",
//     "providerData": [
//         {
//             "providerId": "google.com",
//             "uid": "116139165741166466740",
//             "displayName": "Sabuj Paul",
//             "email": "sabujpaul05@gmail.com",
//             "phoneNumber": null,
//             "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocLwUFb2xqs5eAH_JZ2DihO6pWIZTfd4vWcYJhh_lC8kbXcyu9zg=s96-c"
//         }
//     ],
//     "stsTokenManager": {
//         "refreshToken": "AMf-vByyYATDPyC3T9SBoT4bwGJXQE6PFB1WgG_rJeiP2hYmPLQD_h8AdHQCdZzQBLw2zvCnwrh8cpO0s3_nnCGP78gNisW5kWZMyat6uTjwLQ_a0VzYITM18cL01fErY5lVjelpprvMI9uVuz_p_ax5JWuA5yyrEgK_KbcRPQk8ObCkW99XjLgUE9gdkoWXg7pPsqAoPmKzq2XHMlommPggYIJQb6YRwQenyqRVsBf3l3GSgEYemG4WfZ0dmOou9tfvus6KFe4KtHJ9UFByQijIDSHK1OKIaxdVhDYVhIvZwvagq2S5FgYybSckBQ7I0jQcQWZJN-CHKCY2-xKUtDoXja9xjRkgOIUNYPAXBUk_rlGThNiITQKdBe92E_jGHO4n2Em2F0sPp-2o489F_34t4i3b1S_AgWFDNXsTaez1uPSd5sjR6FdYtBsj0HzmlYr910ziLoQu",
//         "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlNTIxYmY1ZjdhNDAwOGMzYmQ3MjFmMzk2OTcwOWI1MzY0MzA5NjEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU2FidWogUGF1bCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NMd1VGYjJ4cXM1ZUFIX0paMkRpaE82cFdJWlRmZDR2V2NZSmhoX2xDOGtiWGN5dTl6Zz1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9lY28tYWR2ZW50dXJlLTY2NTZjIiwiYXVkIjoiZWNvLWFkdmVudHVyZS02NjU2YyIsImF1dGhfdGltZSI6MTczMjA0MTMyNiwidXNlcl9pZCI6InltaUlDQkFlZ2FOUkh5cTlBUkdPdWJXcjUwcjIiLCJzdWIiOiJ5bWlJQ0JBZWdhTlJIeXE5QVJHT3ViV3I1MHIyIiwiaWF0IjoxNzMyMDQxMzI2LCJleHAiOjE3MzIwNDQ5MjYsImVtYWlsIjoic2FidWpwYXVsMDVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTYxMzkxNjU3NDExNjY0NjY3NDAiXSwiZW1haWwiOlsic2FidWpwYXVsMDVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.gxlL1rRelTolCyt9ULWqU-iAGoX6Mz7B8qaeyLt9kZu_WRYwkMMZPCCLlM39UDiZ-AwKZ79fA_xxZwgyKUhK23s3Rp064VS4dyRWWNicmocAfbfW3yA3xDYTbpFLaC9ot5ZT_HHaaAZH-ifouPWPOO24UQaVJLumkvCttkZut1u3oHkAP_A-iW_mI2j1PjHuH9aBT2DRzqpyAu-OeFeRi9R2v_UCoIkudKHy5FFLOPI93AVQz2jScH-BWQSjCok-2uk1PNTQnQjgxZSSoCtP7rbhp_H55s7xkWfv4zGrwNmRMZsCwAp_WldEPVHsydABX-dnzyvhM_WcQcrhAuESKQ",
//         "expirationTime": 1732044925596
//     },
//     "createdAt": "1732040722155",
//     "lastLoginAt": "1732041326318",
//     "apiKey": "AIzaSyC4MSm7KpLN15YE8Ig2WJQa-2z8s18xH04",
//     "appName": "[DEFAULT]"
// }