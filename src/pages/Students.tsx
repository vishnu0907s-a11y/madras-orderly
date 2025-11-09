import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Mail, Phone, ShoppingBag } from "lucide-react";

const students = [
  {
    id: "STU-001",
    name: "Rajesh Kumar",
    email: "rajesh@mec.edu",
    phone: "+91 9876543210",
    department: "Computer Science",
    totalOrders: 45,
  },
  {
    id: "STU-002",
    name: "Priya Sharma",
    email: "priya@mec.edu",
    phone: "+91 9876543211",
    department: "Electronics",
    totalOrders: 32,
  },
  {
    id: "STU-003",
    name: "Amit Patel",
    email: "amit@mec.edu",
    phone: "+91 9876543212",
    department: "Mechanical",
    totalOrders: 28,
  },
  {
    id: "STU-004",
    name: "Sneha Reddy",
    email: "sneha@mec.edu",
    phone: "+91 9876543213",
    department: "Civil",
    totalOrders: 51,
  },
];

const Students = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Student Management</h1>
        <p className="text-muted-foreground">View and manage student profiles and order history</p>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search students by name, email, or ID..."
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {students.map((student) => (
          <Card key={student.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{student.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{student.id}</p>
                </div>
                <Badge>{student.department}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{student.email}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{student.phone}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ShoppingBag className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Total Orders: {student.totalOrders}</span>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <Button variant="outline" size="sm">
                    View Orders
                  </Button>
                  <Button variant="outline" size="sm">
                    Edit Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Students;
