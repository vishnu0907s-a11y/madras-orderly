import { Button } from "@/components/ui/button";
import { ArrowRight, Utensils, Clock, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-food.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-8rem)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Delicious food"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
        </div>
        <div className="relative px-8 py-24 md:px-12 md:py-32">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              Welcome to <span className="text-primary">MEC Food Hub</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Delicious meals delivered fresh to your table. Order from our diverse menu featuring
              vegetarian, non-vegetarian, beverages, and snacks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => navigate("/menu")}>
                Order Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/menu")}>
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mt-16 grid gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-primary/10 p-4">
            <Utensils className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Fresh & Delicious</h3>
          <p className="text-muted-foreground">
            Every dish prepared fresh with quality ingredients
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-primary/10 p-4">
            <Clock className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Quick Service</h3>
          <p className="text-muted-foreground">
            Fast preparation and delivery to your location
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-primary/10 p-4">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Secure Payment</h3>
          <p className="text-muted-foreground">
            Multiple payment options with secure transactions
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mt-16 grid gap-6 md:grid-cols-4">
        <div className="rounded-lg bg-card p-6 shadow-card">
          <p className="text-3xl font-bold text-primary">50+</p>
          <p className="text-sm text-muted-foreground">Menu Items</p>
        </div>
        <div className="rounded-lg bg-card p-6 shadow-card">
          <p className="text-3xl font-bold text-primary">1000+</p>
          <p className="text-sm text-muted-foreground">Happy Students</p>
        </div>
        <div className="rounded-lg bg-card p-6 shadow-card">
          <p className="text-3xl font-bold text-primary">4.8★</p>
          <p className="text-sm text-muted-foreground">Average Rating</p>
        </div>
        <div className="rounded-lg bg-card p-6 shadow-card">
          <p className="text-3xl font-bold text-primary">15min</p>
          <p className="text-sm text-muted-foreground">Avg Delivery</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
