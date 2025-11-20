import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Locations = () => {
  const regions = [
    {
      region: "South-West",
      cities: ["Lagos", "Ibadan"],
      color: "bg-brand-red",
    },
    {
      region: "South-South",
      cities: ["Port-Harcourt", "Calabar"],
      color: "bg-brand-orange",
    },
    {
      region: "South-East",
      cities: ["Enugu", "Owerri"],
      color: "bg-brand-yellow",
    },
    {
      region: "North-Central",
      cities: ["Abuja", "Minna"],
      color: "bg-primary",
    },
    {
      region: "North-West",
      cities: ["Kaduna", "Kano"],
      color: "bg-accent",
    },
    {
      region: "North-East",
      cities: ["Yola", "Bauchi"],
      color: "bg-secondary",
    },
  ];

  return (
    <section id="locations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Our Locations
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
          Zohanaval Tea maintains marketing offices and distribution centers across Nigeria, 
          with plans to expand to major towns throughout Africa, Europe, America, and beyond.
        </p>

        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
                Headquarters & Factory
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground text-lg">Corporate Headquarters</p>
                    <p className="text-foreground">Abuja, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground text-lg">Manufacturing Facility</p>
                    <p className="text-foreground">
                      KM 16, Gembu/Kakara Road, Segen Toungwa Dam
                      <br />
                      P.O. Box 66, Gembu
                      <br />
                      Sardauna Local Government Area
                      <br />
                      Taraba State, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h4 className="font-serif text-xl font-bold text-foreground mb-4">
                Estate Details
              </h4>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  260 hectares of tea plantation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  800,000 kg annual production capacity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Located in pristine Mambilla Highlands
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  State-of-the-art processing facility
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
          Distribution Network
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 group border-2 hover:border-primary"
            >
              <div className={`${region.color} h-2`} />
              <CardContent className="p-6">
                <h4 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {region.region}
                </h4>
                <div className="space-y-2">
                  {region.cities.map((city, cityIndex) => (
                    <div key={cityIndex} className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-foreground font-medium">{city}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            Visit our offices or contact us to find the nearest Zohanaval Tea distributor in your area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Locations;
