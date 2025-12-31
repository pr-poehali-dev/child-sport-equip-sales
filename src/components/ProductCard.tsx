import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
  isNew?: boolean;
}

const ProductCard = ({ id, name, description, price, oldPrice, image, category, inStock, isNew }: ProductCardProps) => {
  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;
  const { addItem, openCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem({ id, name, price, image });
    toast({
      title: "Товар добавлен в корзину",
      description: name,
    });
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative overflow-hidden bg-gray-50">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-secondary text-secondary-foreground">Новинка</Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-primary text-primary-foreground">-{discount}%</Badge>
          )}
        </div>
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive" className="text-lg px-4 py-2">Нет в наличии</Badge>
          </div>
        )}
      </div>
      
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs">{category}</Badge>
        </div>
        <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-primary">{price.toLocaleString('ru-RU')} ₽</span>
          {oldPrice && (
            <span className="text-lg text-muted-foreground line-through">{oldPrice.toLocaleString('ru-RU')} ₽</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button className="flex-1" disabled={!inStock} onClick={handleAddToCart}>
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          В корзину
        </Button>
        <Button variant="outline" size="icon">
          <Icon name="Heart" size={18} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;