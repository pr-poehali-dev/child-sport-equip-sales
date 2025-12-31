import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function Cart() {
  const { items, removeItem, updateQuantity, totalPrice, isCartOpen, closeCart, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Icon name="ShoppingCart" size={24} />
            Корзина
            {items.length > 0 && (
              <Badge variant="secondary">{items.length}</Badge>
            )}
          </SheetTitle>
          <SheetDescription>
            {items.length === 0 ? 'Ваша корзина пуста' : 'Просмотрите товары в корзине'}
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full mt-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
              <Icon name="ShoppingBag" size={64} className="text-muted-foreground mb-4" />
              <p className="text-lg text-muted-foreground mb-2">Корзина пуста</p>
              <p className="text-sm text-muted-foreground">Добавьте товары из каталога</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto -mx-6 px-6">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 bg-muted/30 p-3 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm mb-2 line-clamp-2">{item.name}</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-7 w-7 p-0"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Icon name="Minus" size={14} />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-7 w-7 p-0"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Icon name="Plus" size={14} />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-primary">{formatPrice(item.price * item.quantity)} ₽</p>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 text-destructive hover:text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Icon name="Trash2" size={14} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Товары ({items.reduce((sum, item) => sum + item.quantity, 0)} шт)</span>
                    <span>{formatPrice(totalPrice)} ₽</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Итого:</span>
                    <span className="text-primary">{formatPrice(totalPrice)} ₽</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    Оформить заказ
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={clearCart}
                  >
                    <Icon name="Trash2" size={18} className="mr-2" />
                    Очистить корзину
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
