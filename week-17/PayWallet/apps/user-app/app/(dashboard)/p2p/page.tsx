import { P2PTransfer } from "../../../components/P2PTransfer";
import { SendCard } from "../../../components/SendCard";
import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

// async function getP2PTransfer() {
//     const session = await getServerSession(authOptions);
//     const txns = await prisma.p2pTransfer.findMany({
//         where: {
//             fromUserId: Number(session?.user?.id),
//             toUserId: Number(session?.user?.id)
//         }
//     });
//     return txns.map(t => ({
//         id: t.id,
//         time: t.timestamp,
//         amount: t.amount, 
//     }))
// }

export default async function P2PTransferPage() {
    // const transactions = await getP2PTransfer();
    return (
        <div className="w-full">
            <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
                P2P Transfer
            </div>
            <div className="flex flex-col">
                <div>
                    <SendCard />
                </div>
                <div className="flex justify-center">
                    {/* <P2PTransfer transactions={transactions} /> */}
                </div>
            </div>
        </div>
    );
}
