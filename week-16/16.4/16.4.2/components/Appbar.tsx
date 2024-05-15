"use client";
import { signIn, signOut, useSession } from "next-auth/react";
// useSession = for client side component

export const Appbar = () => {
    const session = useSession();
    return <div>
        <div>
            <button onClick={() => signIn()}>Signin</button>
        </div>
        <div>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
        <div>
            {JSON.stringify(session.data?.user)}
        </div>
    </div>
}