import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-script text-3xl text-brand">This page took a wrong turn.</p>
        <h1 className="mt-4 font-display text-6xl text-wine">404</h1>
        <Link href="/" className="mt-8 inline-block rounded-full bg-maroon px-8 py-4 font-semibold text-cream transition hover:bg-brand">
          Back to the party
        </Link>
      </div>
    </main>
  );
}
