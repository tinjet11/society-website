"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'
import { Client, Account } from "appwrite";
import Button from '@/components/ui/button';
import { Loader } from 'lucide-react';


const Verification = () => {
    const params = useSearchParams();
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const verify = ()=>{
        const userId = params.get('userId');
        const secret = params.get('secret');
        setLoading(true);
        
        console.log("userId: " + userId)
        console.log("secret: " + secret)
        const client = new Client();

        const account = new Account(client);

        client
            .setEndpoint(`${process.env.APPWRITE_ENDPOINT}`)
            .setProject(`${process.env.APPWRITE_ID}`);
        ;

        const promise = account.updateVerification(userId!, secret!);

        promise.then(function (response) {
            console.log(response); // Success
            setLoading(false);
            setSuccess(true);
        }, function (error) {
            console.log(error); // Failure
            setLoading(true);
        });
    } 

 

    return (
        <div className="flex flex-col items-center justify-center p-16">
            <h1 className="text-2xl font-bold text-center">
                Nott A Student Account Verification
            </h1>
            {!success && (
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 mt-4 rounded" onClick={verify}>
                  {loading ? <Loader/> : 'Verify Your Nott A Student Account' } 
                </button>
            )}
            {success && !loading && (
                <div className="text-green-600 text-lg mt-4">
                    Verification success.<br />
                    Thank you for signing up for Nott A Student.
                </div>
            )}
        </div>

    )
}

export default Verification