export type Office = {
  country: string;
  city: string;
  isHQ?: boolean;
  address: string[];
  phone: string;
  email: string;
};

export const offices: Office[] = [
  {
    country: "Kenya",
    city: "Nairobi",
    isHQ: true,
    address: ["1st Ngong Avenue, ACK Garden House, Ground Floor", "P.O. Box 1208 - 00606"],
    phone: "+254 746 437 978",
    email: "sales.ke@coseke.com",
  },
  {
    country: "Uganda",
    city: "Kampala",
    address: [
      "Jinja Road, Social Security House, Plot 4, Northern Wing, 3rd Floor",
      "P.O. Box 37849",
    ],
    phone: "+256 41 434 0282",
    email: "sales.ug@coseke.com",
  },
  {
    country: "Tanzania",
    city: "Dar es Salaam",
    address: ["Azikiwe / Jamhuri Street, Benjamin Mkapa Tower, 6th Floor", "P.O. Box 76413"],
    phone: "+255 22 220 0048",
    email: "sales.tz@coseke.com",
  },
  {
    country: "Rwanda",
    city: "Kigali",
    address: [
      "National Amahoro Stadium Road, KG 11 Av, Nobiscum House, 4th Floor",
      "P.O. Box 5755",
    ],
    phone: "+250 252 571 690",
    email: "sales.rw@coseke.com",
  },
];
