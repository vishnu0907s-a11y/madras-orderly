import { useState } from "react";
import { MenuCard } from "@/components/MenuCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import vegImage from "@/assets/veg-food.jpg";
import nonvegImage from "@/assets/nonveg-food.jpg";
import icecreamImage from "@/assets/icecream.jpg";
import juicesImage from "@/assets/juices.jpg";
import snacksImage from "@/assets/snacks.jpg";

const menuItems = {
  veg: [
    { id: 1, name: "Paneer Butter Masala", price: 120, category: "Main Course", image: vegImage, isVeg: true },
    { id: 2, name: "Vegetable Biryani", price: 100, category: "Rice", image: vegImage, isVeg: true },
    { id: 3, name: "Dal Tadka", price: 80, category: "Dal", image: vegImage, isVeg: true },
    { id: 4, name: "Palak Paneer", price: 110, category: "Main Course", image: vegImage, isVeg: true },
  ],
  nonveg: [
    { id: 5, name: "Chicken Biryani", price: 150, category: "Rice", image: nonvegImage, isVeg: false },
    { id: 6, name: "Butter Chicken", price: 180, category: "Main Course", image: nonvegImage, isVeg: false },
    { id: 7, name: "Chicken Kebab", price: 140, category: "Starter", image: nonvegImage, isVeg: false },
    { id: 8, name: "Fish Curry", price: 160, category: "Main Course", image: nonvegImage, isVeg: false },
  ],
  icecream: [
    { id: 9, name: "Vanilla Scoop", price: 40, category: "Dessert", image: icecreamImage, isVeg: true },
    { id: 10, name: "Chocolate Sundae", price: 60, category: "Dessert", image: icecreamImage, isVeg: true },
    { id: 11, name: "Mango Ice Cream", price: 50, category: "Dessert", image: icecreamImage, isVeg: true },
    { id: 12, name: "Strawberry Delight", price: 55, category: "Dessert", image: icecreamImage, isVeg: true },
  ],
  juices: [
    { id: 13, name: "Fresh Orange Juice", price: 35, category: "Beverage", image: juicesImage, isVeg: true },
    { id: 14, name: "Mango Smoothie", price: 45, category: "Beverage", image: juicesImage, isVeg: true },
    { id: 15, name: "Watermelon Juice", price: 30, category: "Beverage", image: juicesImage, isVeg: true },
    { id: 16, name: "Mixed Fruit Juice", price: 40, category: "Beverage", image: juicesImage, isVeg: true },
  ],
  snacks: [
    { id: 17, name: "Samosa (2 pcs)", price: 20, category: "Snack", image: snacksImage, isVeg: true },
    { id: 18, name: "Vada Pav", price: 25, category: "Snack", image: snacksImage, isVeg: true },
    { id: 19, name: "Pakora Plate", price: 35, category: "Snack", image: snacksImage, isVeg: true },
    { id: 20, name: "Spring Roll", price: 40, category: "Snack", image: snacksImage, isVeg: true },
  ],
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("veg");

  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Our Menu</h1>
        <p className="text-muted-foreground">Browse our delicious selection of food and beverages</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-5">
          <TabsTrigger value="veg">Vegetarian</TabsTrigger>
          <TabsTrigger value="nonveg">Non-Veg</TabsTrigger>
          <TabsTrigger value="icecream">Ice Cream</TabsTrigger>
          <TabsTrigger value="juices">Juices</TabsTrigger>
          <TabsTrigger value="snacks">Snacks</TabsTrigger>
        </TabsList>

        <TabsContent value="veg" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {menuItems.veg.map((item) => (
              <MenuCard key={item.id} {...item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="nonveg" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {menuItems.nonveg.map((item) => (
              <MenuCard key={item.id} {...item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="icecream" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {menuItems.icecream.map((item) => (
              <MenuCard key={item.id} {...item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="juices" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {menuItems.juices.map((item) => (
              <MenuCard key={item.id} {...item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="snacks" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {menuItems.snacks.map((item) => (
              <MenuCard key={item.id} {...item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Menu;
