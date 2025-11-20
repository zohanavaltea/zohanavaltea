import { useState } from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Contact us for wholesale inquiries, distribution opportunities, or
          general questions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4 text-center md:text-left">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Headquarters</p>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    Abuja, Nigeria
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">
                    Factory Address
                  </p>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    KM 16, Gembu/Kakara Road
                    <br />
                    Sardauna LGA, Taraba State
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    08069466056,
                    08028064953
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    zohanavaltea@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Website</p>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    www.zohanavaltea.com.ng
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="bg-gradient-to-br from-primary to-accent text-white px-8 py-16 rounded-lg shadow-lg">
            <h4 className="font-serif text-xl font-bold mb-3 text-center md:text-left">
              Business Opportunities
            </h4>
            <p className="text-base font-medium opacity-95 mb-4 leading-relaxed">
              We welcome wholesale inquiries, distribution partnerships, and
              cafe vending machine opportunities. Contact us to discuss how we
              can work together to bring premium Nigerian tea to your market.
            </p>
            <ul className="space-y-2 text-base font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Wholesale Distribution
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Vending Machine Placement
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Cafe Partnerships
              </li>
            </ul>
          </aside>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Contact;
