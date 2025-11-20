import { Card, CardContent } from "@/components/ui/card";
import productImage from "@/assets/product-boxes-reflection.jpg";

const Products = () => {
  const flavors = [
    {
      name: "Blueberry Tea",
      description: "Rich antioxidant blend with natural blueberry essence",
      color: "from-purple-500 to-blue-600",
    },
    {
      name: "Chocolate Tea",
      description: "Indulgent cocoa-infused premium tea blend",
      color: "from-amber-700 to-orange-800",
    },
    {
      name: "Green Apple Tea",
      description: "Crisp and refreshing with natural apple notes",
      color: "from-green-400 to-emerald-600",
    },
    {
      name: "Honeydew Tea",
      description: "Subtle sweetness with smooth melon undertones",
      color: "from-lime-300 to-green-500",
    },
    {
      name: "Taro Tea",
      description: "Creamy, nutty flavor with traditional essence",
      color: "from-purple-400 to-indigo-600",
    },
    {
      name: "Passion Fruit Tea",
      description: "Tropical and tangy with vibrant citrus notes",
      color: "from-orange-400 to-red-500",
    },
    {
      name: "Raspberry Tea",
      description: "Bold berry flavor with natural sweetness",
      color: "from-pink-500 to-rose-600",
    },
    {
      name: "Strawberry Tea",
      description: "Classic fruity taste with aromatic depth",
      color: "from-red-400 to-pink-600",
    },
    {
      name: "Vanilla Tea",
      description: "Smooth, comforting vanilla-infused blend",
      color: "from-amber-300 to-yellow-600",
    },
    {
      name: "Mango Tea",
      description: "Tropical mango sweetness in every sip",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Our Product Range
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
          Zohanaval Tea & Coffee offers a unique consumer-centric philosophy with premium products 
          that fit different tastes. Each variety is carefully crafted using the finest ingredients 
          from Nigerian sources.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-elegant">
            <img
              src={productImage}
              alt="Zohanaval Tea products"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-bold text-foreground">
              Quality Excellence
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              Quality control is the cornerstone of our success. We have rigorously tested every 
              single one of our products to ensure we deliver the best experience to our customers. 
              We source only from the finest tea plantations in the Mambilla Highlands.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Our product development focuses on innovation and variety. We launched with 10 original 
              flavors to serve a wide range of consumer preferences, from traditional tea lovers to 
              those seeking unique and exotic taste experiences.
            </p>
            <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
              <p className="text-foreground font-semibold">
                Capacity: 800,000 kg of premium tea annually
              </p>
            </div>
          </div>
        </div>

        <h3 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
          Available Flavors
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {flavors.map((flavor, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-elegant group"
            >
              <div className={`h-3 bg-gradient-to-r ${flavor.color}`} />
              <CardContent className="p-6">
                <h4 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {flavor.name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {flavor.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-brand-red to-brand-orange text-white rounded-lg p-8 shadow-elegant">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-3xl font-bold mb-4">
              Operational Excellence
            </h3>
            <p className="text-lg mb-6 opacity-95">
              Our business focuses on innovation and technology, operational excellence, regulatory 
              compliance, and staff learning and growth. We maintain the highest standards in tea 
              production while fostering a performance-based culture that ensures quality in every cup.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="bg-white/10 rounded p-4">
                <p className="font-semibold mb-1">Innovation & Technology</p>
                <p className="text-sm opacity-90">Research, development, and product differentiation</p>
              </div>
              <div className="bg-white/10 rounded p-4">
                <p className="font-semibold mb-1">Quality Management</p>
                <p className="text-sm opacity-90">Cost optimization and total product quality control</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
