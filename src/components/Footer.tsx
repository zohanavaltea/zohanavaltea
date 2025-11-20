import logo from "@/assets/zohanaval-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Zohanaval Tea" className="h-12 mb-4" />
            <p className="text-background/80">
              Premium Nigerian tea and coffee from the Mambilla Highlands. 
              Crafting excellence since 2020.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#about" className="hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-background transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-background transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Company</h4>
            <p className="text-background/80 mb-4">
              Brooks Mambilla Limited
              <br />
              Abuja, Nigeria
            </p>
            <p className="text-background/80 text-sm">
              www.zohanavaltea.com.ng
              <br />
              info@zohanavaltea.com.ng
            </p>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Brooks Mambilla Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
