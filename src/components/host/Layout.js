import * as React from "react";

export default function Layout({ question, children }) {
    return (
        <div className="grid max-h-screen min-h-screen grid-cols-2">
            <div className="flex flex-col bg-gradient-to-t from-indigo-900 via-purple-900 to-pink-800 place-content-center">
                <div className="text-5xl font-semibold leading-[3.5rem] text-white pl-11 pr-60">
                    {question}
                </div>
            </div>
            <div className="flex flex-col place-content-center">{children}</div>
        </div>
    );
}
