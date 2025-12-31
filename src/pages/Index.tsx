import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: "playgrounds",
      name: "Игровые комплексы",
      icon: "Tent",
      description: "Горки, качели, домики",
      image: "https://cdn.poehali.dev/projects/5a478b2f-f99c-4972-9db1-fe9f62e9c033/files/cf5bd4dc-6a3f-4b11-aa06-1c7d373ab599.jpg"
    },
    {
      id: "sports",
      name: "Спортивное оборудование",
      icon: "Dumbbell",
      description: "Турники, брусья, спортивные городки",
      image: "https://cdn.poehali.dev/projects/5a478b2f-f99c-4972-9db1-fe9f62e9c033/files/eb05466e-f480-4060-8e26-7bbc0d1397cf.jpg"
    },
    {
      id: "safety",
      name: "Покрытия безопасности",
      icon: "Shield",
      description: "Резиновые покрытия, искусственная трава"
    },
    {
      id: "furniture",
      name: "Уличная мебель",
      icon: "Armchair",
      description: "Скамейки, беседки, столы"
    }
  ];

  const certificates = [
    {
      title: "ГОСТ Р 52169-2012",
      description: "Оборудование детских игровых площадок"
    },
    {
      title: "Сертификат соответствия ТР ТС",
      description: "Технический регламент Таможенного союза"
    },
    {
      title: "ISO 9001",
      description: "Система менеджмента качества"
    },
    {
      title: "Декларация о соответствии",
      description: "Безопасность детских товаров"
    }
  ];

  const features = [
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Все товары сертифицированы и соответствуют ГОСТ"
    },
    {
      icon: "Truck",
      title: "Доставка по России",
      description: "Оперативная доставка в любой регион"
    },
    {
      icon: "Wrench",
      title: "Монтаж под ключ",
      description: "Профессиональная установка оборудования"
    },
    {
      icon: "Award",
      title: "Гарантия до 3 лет",
      description: "Официальная гарантия производителя"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Playground" size={32} className="text-primary" fallback="Home" />
              <h1 className="text-2xl font-bold text-primary">ДетПлощадка</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#certificates" className="text-foreground hover:text-primary transition-colors">Сертификаты</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button>
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground">Производитель №1</Badge>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Детское игровое и спортивное оборудование
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Более 10 лет создаём безопасные и яркие площадки для детей. 
                Сертифицированное оборудование с гарантией качества.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Получить прайс
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/5a478b2f-f99c-4972-9db1-fe9f62e9c033/files/cf5bd4dc-6a3f-4b11-aa06-1c7d373ab599.jpg"
                alt="Детская площадка"
                className="rounded-2xl shadow-2xl animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Категории товаров</h2>
            <p className="text-xl text-muted-foreground">Выберите интересующую категорию оборудования</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card 
                key={category.id}
                className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.image && (
                  <div className="h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name={category.icon} size={24} className="text-secondary" />
                    </div>
                    <CardTitle>{category.name}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Смотреть товары
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-white">Качество гарантировано</Badge>
            <h2 className="text-4xl font-bold mb-4">Сертификаты безопасности</h2>
            <p className="text-xl text-muted-foreground">Вся продукция сертифицирована и соответствует стандартам качества</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="ShieldCheck" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                      <CardDescription>{cert.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/5a478b2f-f99c-4972-9db1-fe9f62e9c033/files/ed01f00d-7d46-4206-9e7d-c10ce9b5cacf.jpg"
              alt="Сертификаты"
              className="mx-auto rounded-xl shadow-lg max-w-2xl"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">О компании</h2>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">ДетПлощадка — производитель №1</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">
                Более 10 лет мы специализируемся на производстве и продаже детского игрового и спортивного оборудования. 
                За это время мы оборудовали более 5000 площадок по всей России.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">5000+</div>
                  <div className="text-muted-foreground">установленных площадок</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-muted-foreground">сертифицированная продукция</div>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="guarantee">
                  <AccordionTrigger className="text-lg">Гарантия и условия возврата</AccordionTrigger>
                  <AccordionContent className="text-base">
                    <p className="mb-4">На всё оборудование предоставляется гарантия производителя от 1 до 3 лет в зависимости от категории товара.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Гарантийное обслуживание в течение всего срока</li>
                      <li>Возврат товара в течение 14 дней при сохранении товарного вида</li>
                      <li>Бесплатный выезд специалиста для гарантийного ремонта</li>
                      <li>Замена бракованных изделий за наш счёт</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="delivery">
                  <AccordionTrigger className="text-lg">Доставка и монтаж</AccordionTrigger>
                  <AccordionContent className="text-base">
                    <p className="mb-4">Мы доставляем оборудование по всей России и предоставляем услуги профессионального монтажа.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Доставка транспортными компаниями или собственным транспортом</li>
                      <li>Монтаж опытными специалистами с соблюдением всех норм безопасности</li>
                      <li>Установка «под ключ» — от подготовки площадки до сдачи объекта</li>
                      <li>Бесплатная консультация по выбору места установки</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="production">
                  <AccordionTrigger className="text-lg">Производство</AccordionTrigger>
                  <AccordionContent className="text-base">
                    <p className="mb-4">Собственное производство позволяет нам контролировать качество на всех этапах и предлагать конкурентные цены.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Использование качественных материалов: металл, пластик, дерево</li>
                      <li>Современное оборудование и технологии производства</li>
                      <li>Возможность изготовления по индивидуальным проектам</li>
                      <li>Контроль качества на каждом этапе</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Оставьте заявку и наш менеджер свяжется с вами в течение часа</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@detploshchadka.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Производственная, д. 10</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00<br />Сб-Вс: выходной</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="mail@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea placeholder="Расскажите о вашем проекте..." rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Playground" size={28} className="text-primary" fallback="Home" />
                <h3 className="text-xl font-bold">ДетПлощадка</h3>
              </div>
              <p className="text-gray-400">Производитель детского игрового и спортивного оборудования</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Игровые комплексы</li>
                <li>Спортивное оборудование</li>
                <li>Покрытия безопасности</li>
                <li>Уличная мебель</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Сертификаты</li>
                <li>Доставка и оплата</li>
                <li>Гарантия</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@detploshchadka.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 ДетПлощадка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
