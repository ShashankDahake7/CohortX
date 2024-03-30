// NextJS expects you to identify all your components as either client or server
// As the name suggests
// Server components are rendered on the server
// Client components are pushed to the client to be rendered
// By default, all components are server components.
// If you want to mark a component as a client component, you need to add the following to the top of the component - 
// "use client"

"use client"

export default function Button() {
    return <div>
        <button onClick={() => {
            console.log("User clicked on signin")
        }} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
    </div>
}