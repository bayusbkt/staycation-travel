import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    {
      title: "For Beginners",
      links: ["New Account", "Start Booking a Room", "Use Payment"],
    },
    {
      title: "Explore Us",
      links: ["Our Careers", "Privacy", "Terms & Conditions"],
    },
    {
      title: "Connect Us",
      links: [
        "support@staycation.travel",
        "+62 8123 3124 243",
        "Staycation, Melawai, Jakarta",
      ],
    },
  ];

  return (
    <footer className="max-w-[1640px] mx-auto mt-20 pt-10 md:pt-16 px-6 md:px-16 lg:px-20 border-t-2">
      <div className="flex flex-col gap-10 font-poppins lg:flex-row lg:justify-between">
        <section className="flex flex-col gap-4">
          <Link
            to="/"
            className="font-poppins font-semibold text-lg lg:text-xl text-primary"
          >
            <span className="text-secondary">Stay</span>Cation.
          </Link>
          <p className="text-[#B0B0B0]">
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </section>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {footerLinks.map((section, idx) => (
            <section key={idx} className="flex flex-col gap-4">
              <h1 className="text-primary text-xl font-semibold">
                {section.title}
              </h1>
              <ul className="text-[#B0B0B0] flex flex-col gap-2 text-sm">
                {section.links.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <div className="font-poppins flex justify-center items-center h-[100px]">
        <p className="text-[#B0B0B0] text-sm">
          Copyright 2019 • All rights reserved • Staycation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
