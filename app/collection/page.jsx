import Collection from "@/components/Collection";

export const metadata = {
  title: "My collection",
  description: "Tick off every Scottish stone you find and earn collector ranks.",
};

export default function CollectionPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">My collection</span>
          <h1>Your rock collection</h1>
          <p>
            Tap a stone when you find one to add it to your collection. It&apos;s
            saved on this device, so there&apos;s no need to sign up.
          </p>
        </div>
        <Collection />
      </div>
    </section>
  );
}
