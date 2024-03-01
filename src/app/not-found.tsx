import Image from "next/image";
import NavBar from "./components/NavBar";

import Link from "next/link";
import Button from "./components/Button";

export default function ErrorPage() {
    return (
        <>
            <NavBar />
            <main className="flex min-h-screen flex-col gap-10 items-center justify-center">
                <h1 className="text-9xl">404</h1>
                <p className="text-2xl">Something went wrong</p>
                <Link href="/">
                    <Button text="Back To Home" />
                </Link>
            </main>
        </>
    );
}
