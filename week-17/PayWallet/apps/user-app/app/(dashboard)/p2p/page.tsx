import { getServerSession } from "next-auth";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { SendCard } from "../../../components/SendCard";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";

async function getP2pTranstions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.timestamp,
        amount: t.amount,
        status: "",
        provider: ""
    }))
}

export default async function () {
    const transactions = await getP2pTranstions();

    return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            Peer To Peer Transfer
        </div>
        <div className="w-full">
            <SendCard />
            <div className="flex justify-center">
                <OnRampTransactions transactions={transactions} />
            </div>
        </div>
    </div>
}