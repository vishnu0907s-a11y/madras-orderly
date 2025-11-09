import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Smartphone, Wallet, Building } from "lucide-react";

const Payment = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Payment</h1>
        <p className="text-muted-foreground">Choose your preferred payment method</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>₹195</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery Fee</span>
              <span>₹20</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span>₹10</span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="text-primary">₹225</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup defaultValue="upi">
            <div className="flex items-center space-x-3 rounded-lg border p-4">
              <RadioGroupItem value="upi" id="upi" />
              <Label htmlFor="upi" className="flex flex-1 cursor-pointer items-center">
                <Smartphone className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">UPI</p>
                  <p className="text-sm text-muted-foreground">Pay using UPI apps</p>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-3 rounded-lg border p-4">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="flex flex-1 cursor-pointer items-center">
                <CreditCard className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Credit/Debit Card</p>
                  <p className="text-sm text-muted-foreground">Pay using your card</p>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-3 rounded-lg border p-4">
              <RadioGroupItem value="wallet" id="wallet" />
              <Label htmlFor="wallet" className="flex flex-1 cursor-pointer items-center">
                <Wallet className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Digital Wallet</p>
                  <p className="text-sm text-muted-foreground">PayTM, PhonePe, Google Pay</p>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-3 rounded-lg border p-4">
              <RadioGroupItem value="netbanking" id="netbanking" />
              <Label htmlFor="netbanking" className="flex flex-1 cursor-pointer items-center">
                <Building className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Net Banking</p>
                  <p className="text-sm text-muted-foreground">Pay via your bank</p>
                </div>
              </Label>
            </div>
          </RadioGroup>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="upiId">UPI ID</Label>
              <Input id="upiId" placeholder="yourname@upi" />
            </div>
            <Button className="w-full" size="lg">
              Pay ₹225
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payment;
