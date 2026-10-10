export const WHATSAPP = "2348160811575";
export const CALL = "2349017390183";
export const EMAIL = "amalusamuel315@gmail.com";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amalu-surprise-hub-nu.vercel.app";

export const services = [
  { name: "Birthday calls", line: "Start their day with a smile.", local: 2000, foreign: 6000 },
  { name: "Special packages", line: "Gifts and calls, wrapped together.", local: 2000, foreign: 5000 },
  { name: "Apology calls", line: "Sorry sounds better out loud.", local: 2500, foreign: 5000 },
  { name: "Shoot your shot", line: "Courage, delivered by phone.", local: 3000, foreign: 6000 },
  { name: "Congratulatory calls", line: "Cheers to the big win.", local: 2000, foreign: 5000 },
  { name: "Appreciation calls", line: "Thank you, said properly.", local: 2000, foreign: 5000 },
  { name: "Reconciliation calls", line: "Let's fix this, gently.", local: 2000, foreign: 5000 },
  { name: "Encouragement calls", line: "A voice that says you've got this.", local: 2500, foreign: 6000 },
  { name: "Wedding anniversary calls", line: "Still choosing each other.", local: 2500, foreign: 6000 },
];

export const reviews = [
  { quote: "Your messages scream intentionality and are very heartfelt.", who: "Customer, via WhatsApp" },
  { quote: "This is the second time I'm booking a call with you and you've not disappointed.", who: "Returning customer, via WhatsApp" },
  { quote: "It sounded like I actually wrote the stuff. You just read my mind.", who: "Customer, via WhatsApp" },
];

const p = (file: string, alt: string) => ({ src: `/photos/${file}.jpg`, alt });
export const photos = {
  curls: p("curls", "A woman with curly hair laughing out loud on a phone call"),
  surprised: p("surprised", "A woman looking at her phone with a surprised face"),
  turtleneck: p("turtleneck", "A smiling woman in a maroon top on a phone call"),
  blazer: p("blazer", "A woman in a blazer smiling happily on a phone call"),
  grandmother: p("grandmother", "An older woman laughing on a phone call in her bedroom"),
  orange: p("orange", "A woman in an orange top smiling at her phone"),
  stripes: p("stripes", "A woman laughing on a phone call outside a shop"),
  blueman: p("blueman", "A man in glasses laughing on a phone call"),
  gift: p("gift", "A mother hugging her smiling son as he holds a wrapped gift"),
};
