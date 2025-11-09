import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

interface MenuCardProps {
  name: string;
  price: number;
  category: string;
  image: string;
  isVeg: boolean;
}

export function MenuCard({ name, price, category, image, isVeg }: MenuCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-card-hover">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-semibold text-card-foreground">{name}</h3>
          <Badge variant={isVeg ? "default" : "secondary"} className={isVeg ? "bg-accent" : ""}>
            {isVeg ? "Veg" : "Non-Veg"}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{category}</p>
        <p className="mt-2 text-lg font-bold text-primary">₹{price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" size="sm">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
