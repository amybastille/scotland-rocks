import Identifier from "@/components/Identifier";

export const metadata = {
  title: "Identify a find",
  description: "Answer four quick questions to find out what stone you might have found.",
};

export default function IdentifyPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Identify a find</span>
          <h1>What have I found?</h1>
          <p>
            Answer four quick questions about your stone and we&apos;ll suggest
            what it might be. Tip: wet your stone first so its true colours show.
          </p>
        </div>
        <Identifier />
      </div>
    </section>
  );
}
