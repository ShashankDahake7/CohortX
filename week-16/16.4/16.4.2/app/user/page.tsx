import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth"
import { signIn, signOut } from "next-auth/react";
// getServerSession = for server side component

async function getUser() {
    const session = await getServerSession(NEXT_AUTH);
    return session;
}

export default async function () {
    const session = await getUser();
    return <div>
        <div>
            {JSON.stringify(session)}
        </div>
    </div>
}