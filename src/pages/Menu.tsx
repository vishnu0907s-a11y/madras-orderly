import { useState } from "react";
import { MenuCard } from "@/components/MenuCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import paneerButterMasalaImage from "@/assets/paneer-butter-masala.jpg";
import vegBiryaniImage from "@/assets/veg-biryani.jpg";
import dalTadkaImage from "@/assets/dal-tadka.jpg";
import palakPaneerImage from "@/assets/palak-paneer.jpg";
import vegKormaImage from "@/assets/veg-korma.jpg";
import alooGobiImage from "@/assets/aloo-gobi.jpg";
import choleBhatureImage from "@/assets/chole-bhature.jpg";
import vegPulaoImage from "@/assets/veg-pulao.jpg";
import chickenBiryaniImage from "@/assets/chicken-biryani.jpg";
import butterChickenImage from "@/assets/butter-chicken.jpg";
import chickenKebabImage from "@/assets/chicken-kebab.jpg";
import fishCurryImage from "@/assets/fish-curry.jpg";
import muttonCurryImage from "@/assets/mutton-curry.jpg";
import chickenTikkaImage from "@/assets/chicken-tikka.jpg";
import prawnMasalaImage from "@/assets/prawn-masala.jpg";
import eggCurryImage from "@/assets/egg-curry.jpg";
import vanillaIcecreamImage from "@/assets/vanilla-icecream.jpg";
import chocolateSundaeImage from "@/assets/chocolate-sundae.jpg";
import mangoIcecreamImage from "@/assets/mango-icecream.jpg";
import strawberryIcecreamImage from "@/assets/strawberry-icecream.jpg";
import butterscotchIcecreamImage from "@/assets/butterscotch-icecream.jpg";
import pistachioIcecreamImage from "@/assets/pistachio-icecream.jpg";
import blackforestIcecreamImage from "@/assets/blackforest-icecream.jpg";
import cookiesCreamIcecreamImage from "@/assets/cookies-cream-icecream.jpg";
import orangeJuiceImage from "@/assets/orange-juice.jpg";
import mangoSmoothieImage from "@/assets/mango-smoothie.jpg";
import watermelonJuiceImage from "@/assets/watermelon-juice.jpg";
import mixedFruitJuiceImage from "@/assets/mixed-fruit-juice.jpg";
import pineappleJuiceImage from "@/assets/pineapple-juice.jpg";
import appleJuiceImage from "@/assets/apple-juice.jpg";
import pomegranateJuiceImage from "@/assets/pomegranate-juice.jpg";
import lemonMintImage from "@/assets/lemon-mint.jpg";
import samosaImage from "@/assets/samosa.jpg";
import vadaPavImage from "@/assets/vada-pav.jpg";
import pakoraImage from "@/assets/pakora.jpg";
import springRollImage from "@/assets/spring-roll.jpg";
import paniPuriImage from "@/assets/pani-puri.jpg";
import dosaImage from "@/assets/dosa.jpg";
import idliImage from "@/assets/idli.jpg";
import pavBhajiImage from "@/assets/pav-bhaji.jpg";

const menuItems = {
  veg: [
    { id: 1, name: "Paneer Butter Masala", price: 120, category: "Main Course", image: paneerButterMasalaImage, isVeg: true },
    { id: 2, name: "Vegetable Biryani", price: 100, category: "Rice", image: vegBiryaniImage, isVeg: true },
    { id: 3, name: "Dal Tadka", price: 80, category: "Dal", image: dalTadkaImage, isVeg: true },
    { id: 4, name: "Palak Paneer", price: 110, category: "Main Course", image: palakPaneerImage, isVeg: true },
    { id: 21, name: "Veg Korma", price: 115, category: "Main Course", image: vegKormaImage, isVeg: true },
    { id: 22, name: "Aloo Gobi", price: 90, category: "Curry", image: alooGobiImage, isVeg: true },
    { id: 23, name: "Chole Bhature", price: 95, category: "Main Course", image: choleBhatureImage, isVeg: true },
    { id: 24, name: "Veg Pulao", price: 85, category: "Rice", image: vegPulaoImage, isVeg: true },
  ],
  nonveg: [
    { id: 5, name: "Chicken Biryani", price: 150, category: "Rice", image: chickenBiryaniImage, isVeg: false },
    { id: 6, name: "Butter Chicken", price: 180, category: "Main Course", image: butterChickenImage, isVeg: false },
    { id: 7, name: "Chicken Kebab", price: 140, category: "Starter", image: chickenKebabImage, isVeg: false },
    { id: 8, name: "Fish Curry", price: 160, category: "Main Course", image: fishCurryImage, isVeg: false },
    { id: 25, name: "Mutton Curry", price: 200, category: "Main Course", image: muttonCurryImage, isVeg: false },
    { id: 26, name: "Chicken Tikka", price: 155, category: "Starter", image: chickenTikkaImage, isVeg: false },
    { id: 27, name: "Prawn Masala", price: 190, category: "Main Course", image: prawnMasalaImage, isVeg: false },
    { id: 28, name: "Egg Curry", price: 90, category: "Main Course", image: eggCurryImage, isVeg: false },
  ],
  icecream: [
    { id: 9, name: "Vanilla Scoop", price: 40, category: "Dessert", image: vanillaIcecreamImage, isVeg: true },
    { id: 10, name: "Chocolate Sundae", price: 60, category: "Dessert", image: chocolateSundaeImage, isVeg: true },
    { id: 11, name: "Mango Ice Cream", price: 50, category: "Dessert", image: mangoIcecreamImage, isVeg: true },
    { id: 12, name: "Strawberry Delight", price: 55, category: "Dessert", image: strawberryIcecreamImage, isVeg: true },
    { id: 29, name: "Butterscotch", price: 50, category: "Dessert", image: butterscotchIcecreamImage, isVeg: true },
    { id: 30, name: "Pistachio", price: 65, category: "Dessert", image: pistachioIcecreamImage, isVeg: true },
    { id: 31, name: "Black Forest", price: 60, category: "Dessert", image: blackforestIcecreamImage, isVeg: true },
    { id: 32, name: "Cookies & Cream", price: 55, category: "Dessert", image: cookiesCreamIcecreamImage, isVeg: true },
  ],
  juices: [
    { id: 13, name: "Fresh Orange Juice", price: 35, category: "Beverage", image: orangeJuiceImage, isVeg: true },
    { id: 14, name: "Mango Smoothie", price: 45, category: "Beverage", image: mangoSmoothieImage, isVeg: true },
    { id: 15, name: "Watermelon Juice", price: 30, category: "Beverage", image: watermelonJuiceImage, isVeg: true },
    { id: 16, name: "Mixed Fruit Juice", price: 40, category: "Beverage", image: mixedFruitJuiceImage, isVeg: true },
    { id: 33, name: "Pineapple Juice", price: 35, category: "Beverage", image: pineappleJuiceImage, isVeg: true },
    { id: 34, name: "Apple Juice", price: 30, category: "Beverage", image: appleJuiceImage, isVeg: true },
    { id: 35, name: "Pomegranate Juice", price: 50, category: "Beverage", image: pomegranateJuiceImage, isVeg: true },
    { id: 36, name: "Lemon Mint", price: 25, category: "Beverage", image: lemonMintImage, isVeg: true },
  ],
  snacks: [
    { id: 17, name: "Samosa (2 pcs)", price: 20, category: "Snack", image: samosaImage, isVeg: true },
    { id: 18, name: "Vada Pav", price: 25, category: "Snack", image: vadaPavImage, isVeg: true },
    { id: 19, name: "Pakora Plate", price: 35, category: "Snack", image: pakoraImage, isVeg: true },
    { id: 20, name: "Spring Roll", price: 40, category: "Snack", image: springRollImage, isVeg: true },
    { id: 37, name: "Pani Puri (6 pcs)", price: 30, category: "Snack", image: paniPuriImage, isVeg: true },
    { id: 38, name: "Masala Dosa", price: 60, category: "Snack", image: dosaImage, isVeg: true },
    { id: 39, name: "Idli (3 pcs)", price: 40, category: "Snack", image: idliImage, isVeg: true },
    { id: 40, name: "Pav Bhaji", price: 55, category: "Snack", image: pavBhajiImage, isVeg: true },
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
