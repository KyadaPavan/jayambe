import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoAndForm } from "@/components/contact/ContactInfoAndForm";
import { ContactMap } from "@/components/contact/ContactMap";

export const metadata = {
  title: "Contact Jai Shree Radha Plywood | Forbesganj, Araria, Bihar",
  description: "Get a plywood quote or become a dealer. Call +91 70911 61465 or visit us at Sahwajpur, Forbesganj, Araria, Bihar 854316."
};

export default function ContactPage() {
  return (
    <main className="bg-[var(--color-cream)] min-h-screen selection:bg-[var(--color-amber)] selection:text-white">
      <ContactHero />
      <ContactInfoAndForm />
      <ContactMap />
    </main>
  );
}
