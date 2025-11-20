import aboutImage from "@/assets/about-tea-culture.jpg";
import productBoxes from "@/assets/product-boxes-stacked.jpg";
import { Factory, Award, Leaf } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          About Zohanaval Tea
        </h2>
        <p className="text-center text-primary font-semibold text-xl mb-16">
          By Brooks Mambilla Limited
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Brooks Mambilla Limited, owners of Zohanaval Tea, was incorporated as a private limited 
              liability company on November 10th, 2020. We are dedicated to growing, manufacturing, 
              processing, and marketing premium tea, coffee, cocoa, and other forms of beverages.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Our state-of-the-art factory is located on the beautiful Mambilla Plateau at KM 16, 
              Gembu/Kakara Road, Sardauna Local Government Area, Taraba State, with our corporate 
              headquarters in Abuja.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              The factory comprises a 260-hectare tea plantation estate with an installed capacity 
              of 800,000 kg of premium tea per annum. We maintain marketing offices across major 
              Nigerian cities including Abuja, Jalingo, Yola, Kaduna, Ibadan, Port Harcourt, Lagos, 
              Enugu, and Onitsha, with plans to expand throughout Africa, Europe, America, and beyond.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-elegant">
            <img
              src={aboutImage}
              alt="Traditional tea ceremony setup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-brand-cream rounded-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
              <Leaf className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              100% Nigerian Grown
            </h3>
            <p className="text-muted-foreground">
              Tea and coffee from Mambilla Highlands, cocoa from South-Western Nigeria
            </p>
          </div>
          <div className="text-center p-6 bg-brand-cream rounded-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
              <Factory className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              Modern Production
            </h3>
            <p className="text-muted-foreground">
              800,000 kg annual capacity with cutting-edge processing technology
            </p>
          </div>
          <div className="text-center p-6 bg-brand-cream rounded-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
              <Award className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              Premium Quality
            </h3>
            <p className="text-muted-foreground">
              Rigorous quality control ensuring excellence in every cup
            </p>
          </div>
        </div>

        {/* <div className="relative h-[500px] rounded-lg overflow-hidden shadow-elegant">
          <img
            src={productBoxes}
            alt="Zohanaval Tea products"
            className="w-full h-full object-cover"
          />
        </div> */}
      </div>
    </section>
  );
};

export default About;
