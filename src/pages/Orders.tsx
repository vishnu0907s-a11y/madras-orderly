import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, Truck, Package } from "lucide-react";

const orders = [
  {
    id: "ORD-001",
    date: "Today, 2:30 PM",
    items: ["Chicken Biryani", "Mango Juice"],
    total: 195,
    status: "preparing",
  },
  {
    id: "ORD-002",
    date: "Yesterday, 1:15 PM",
    items: ["Paneer Butter Masala", "Dal Tadka", "Naan"],
    total: 220,
    status: "delivered",
  },
  {
    id: "ORD-003",
    date: "Dec 15, 3:45 PM",
    items: ["Samosa", "Tea"],
    total: 35,
    status: "delivered",
  },
];

const statusConfig = {
  preparing: {
    label: "Preparing",
    icon: Clock,
    color: "bg-primary text-primary-foreground",
  },
  ready: {
    label: "Ready",
    icon: CheckCircle,
    color: "bg-accent text-accent-foreground",
  },
  delivering: {
    label: "Delivering",
    icon: Truck,
    color: "bg-secondary text-secondary-foreground",
  },
  delivered: {
    label: "Delivered",
    icon: Package,
    color: "bg-muted text-muted-foreground",
  },
};

const Orders = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">My Orders</h1>
        <p className="text-muted-foreground">Track your current and past orders</p>
      </div>

      <div className="space-y-4">
        {orders.map((order) => {
          const status = statusConfig[order.status as keyof typeof statusConfig];
          const StatusIcon = status.icon;

          return (
            <Card key={order.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{order.id}</CardTitle>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                  </div>
                  <Badge className={status.color}>
                    <StatusIcon className="mr-1 h-3 w-3" />
                    {status.label}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="mb-2 text-sm font-medium">Items:</p>
                  <ul className="list-inside list-disc text-sm text-muted-foreground">
                    {order.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold">Total: ₹{order.total}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {order.status === "delivered" && (
                      <Button size="sm">Reorder</Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
