import LocationIcon from "../../assets/icons/location.svg";
import PhoneIcon from "../../assets/icons/call.svg";
import MailIcon from "../../assets/icons/message.svg";

const villaCategories = ["4 Bedroom Villa", "2 Bedroom Villa", "Joglo House", "Bamboo Studio", "Bamboo House"];
const quickLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Facility",
    href: "#facility",
  },
  {
    name: "Gallery",
    href: "#gallery",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFB] py-10 text-black">
      <div className="max-w-[1110px] mx-auto px-5 flex md:grid md:grid-cols-3 justify-between gap-4 md:gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-base lg:text-[28px] font-medium leading-tight md:leading-9 tracking-[-0.011em] md:tracking-[-0.021em] mb-12">Quick Links</h3>
          <ul className="space-y-2 md:space-y-4 lg:space-y-6">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="text-sm lg:text-xl font-normal leading-5 md:leading-none tracking-[-0.006em] md:tracking-[-0.012em] hover:text-[#106A64]">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Villa Categories */}
        <div>
          <h3 className="text-base lg:text-[28px] font-medium leading-tight md:leading-9 tracking-[-0.011em] md:tracking-[-0.021em] mb-12">Villa Categories</h3>
          <ul className="space-y-2 md:space-y-4 lg:space-y-6">
            {villaCategories.map((category, i) => (
              <li key={i}>
                <a href="#" className="text-sm lg:text-xl font-normal leading-5 md:leading-none tracking-[-0.006em] md:tracking-[-0.012em] hover:text-[#106A64]">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="md:text-[28px] font-medium leading-tight md:leading-9 tracking-[-0.011em] md:tracking-[-0.021em] mb-12">Contact Us</h3>
          <ul className="flex flex-row lg:flex-col gap-2 md:gap-4 lg:gap-6">
            <li>
              <a href="https://maps.app.goo.gl/5uBaLw8gFzTSgWURA" target="_blank" className="flex items-start gap-4">
                <img src={LocationIcon} alt="location" className="w-5 h-5" />
                <span className="hidden lg:block text-xl font-normal leading-none tracking-[-0.012em] hover:text-[#106A64]">Jl. Bukit Pelangi, Gunung Geulis, Sukaraja, Kab. Bogor, Jawa Barat</span>
              </a>
            </li>
            <li>
              <a href="tel:+62812345678" target="_blank" className="flex items-start gap-4">
                <img src={PhoneIcon} alt="phone" className="w-5 h-5" />
                <span className="hidden lg:block text-xl font-normal leading-none tracking-[-0.012em] hover:text-[#106A64]">+62812345678</span>
              </a>
            </li>
            <li>
              <a href="mailto:example@gmail.com" target="_blank" className="flex items-start gap-4">
                <img src={MailIcon} alt="email" className="w-5 h-5" />
                <span className="hidden lg:block text-xl font-normal leading-none tracking-[-0.012em] hover:text-[#106A64]">example@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
