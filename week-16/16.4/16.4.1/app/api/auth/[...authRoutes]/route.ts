import { NextRequest, NextResponse } from "next/server";

// export function GET(req: NextRequest, arg: any) {
//     console.log(arg.params.authRoutes)
//     return NextResponse.json({
//         message: "asd"
//     })
// }

export function GET(req: NextRequest, { params: { authRoutes } }: {
    params: {
        authRoutes: string[]
    }
}) {
    console.log(authRoutes)
    return NextResponse.json({
        message: "asd"
    })
}

export function POST() {
    return NextResponse.json({
        message: "asd"
    })
}