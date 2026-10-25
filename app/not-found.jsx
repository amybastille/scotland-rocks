import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container empty">
        <h1>This stone has rolled away</h1>
        <p>We couldn&apos;t find that page.</p>
        <Link href="/" className="btn btn-primary">
          Back to the home page
        </Link>
      </div>
    </section>
  );
}
