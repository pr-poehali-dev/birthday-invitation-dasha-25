import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('1');
  const [attending, setAttending] = useState('yes');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ответ! ✨",
      description: "Дарья будет рада видеть вас на празднике!",
    });
    setName('');
    setGuests('1');
    setAttending('yes');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-white">
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 21, 56, 0.3), rgba(139, 21, 56, 0.3)), url('https://cdn.poehali.dev/projects/f0ed0f8e-0b55-4f9f-9688-f6d0ac576920/files/30a13222-95ad-400b-a6f6-0e2e25010365.jpg')`
        }}
      >
        <div className="text-center text-white px-4 animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-serif mb-6 tracking-wide">Дарья</h1>
          <div className="text-3xl md:text-5xl font-light mb-8 tracking-widest">25 ЛЕТ</div>
          
          <div className="space-y-4 text-xl md:text-2xl font-body">
            <div className="flex items-center justify-center gap-3">
              <Icon name="Calendar" size={24} />
              <span>04.11.2025</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="Clock" size={24} />
              <span>19:00</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="MapPin" size={24} />
              <span>Уточните адрес у именинницы</span>
            </div>
          </div>

          <Button 
            onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="mt-12 px-12 py-6 text-xl bg-white text-primary hover:bg-secondary transition-all duration-300 animate-scale-in"
          >
            ПОДТВЕРДИТЬ ПРИСУТСТВИЕ
          </Button>
        </div>
      </div>

      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif text-center text-primary mb-16 animate-fade-in">
            Дресс-код
          </h2>
          
          <div className="text-center mb-12">
            <div className="text-3xl font-serif text-primary mb-4">Black Tie</div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Элегантный вечерний наряд. Дамы в вечерних платьях, господа во фраках или смокингах.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-scale-in">
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif text-primary mb-4 text-center">Для дам</h3>
                <img 
                  src="https://cdn.poehali.dev/projects/f0ed0f8e-0b55-4f9f-9688-f6d0ac576920/files/802f88f6-776a-4656-8d29-4e739226f7e2.jpg"
                  alt="Женский наряд"
                  className="w-full h-96 object-cover rounded-lg mb-4"
                />
                <p className="text-center text-muted-foreground font-body">
                  Длинное вечернее платье
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-scale-in">
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif text-primary mb-4 text-center">Для мужчин</h3>
                <img 
                  src="https://cdn.poehali.dev/projects/f0ed0f8e-0b55-4f9f-9688-f6d0ac576920/files/3febfa8d-509d-47ce-bff5-4006de30b5aa.jpg"
                  alt="Мужской наряд"
                  className="w-full h-96 object-cover rounded-lg mb-4"
                />
                <p className="text-center text-muted-foreground font-body">
                  Смокинг или фрак с бабочкой
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white p-8 rounded-lg border-2 border-primary/20">
            <h4 className="text-xl font-serif text-primary mb-4 text-center">Рекомендуемые цвета</h4>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-black border-2 border-gray-300 mx-auto mb-2"></div>
                <span className="text-sm font-body">Черный</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 mx-auto mb-2"></div>
                <span className="text-sm font-body">Белый</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gray-500 border-2 border-gray-300 mx-auto mb-2"></div>
                <span className="text-sm font-body">Серый</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 border-2 border-gray-300 mx-auto mb-2"></div>
                <span className="text-sm font-body">Бежевый</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-800 border-2 border-gray-300 mx-auto mb-2"></div>
                <span className="text-sm font-body">Коричневый</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif text-center text-primary mb-16 animate-fade-in">
            Галерея воспоминаний
          </h2>
          
          <p className="text-center text-lg text-muted-foreground mb-12 font-body">
            Здесь будут размещены детские фотографии именинницы
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i}
                className="aspect-square bg-secondary rounded-lg border-2 border-primary/10 flex items-center justify-center hover:border-primary/30 transition-all duration-300 animate-scale-in"
              >
                <Icon name="Image" size={48} className="text-primary/30" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif text-center text-primary mb-16 animate-fade-in">
            Как добраться
          </h2>
          
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="aspect-video bg-white rounded-lg flex items-center justify-center mb-6 border border-primary/10">
                <div className="text-center">
                  <Icon name="MapPin" size={64} className="text-primary/30 mx-auto mb-4" />
                  <p className="text-muted-foreground font-body">Карта появится здесь</p>
                  <p className="text-sm text-muted-foreground mt-2 font-body">
                    (уточните адрес у именинницы)
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Navigation" size={20} className="text-primary" />
                  <span className="font-body">Адрес будет добавлен позже</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Car" size={20} className="text-primary" />
                  <span className="font-body">Есть парковка</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="rsvp" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif text-center text-primary mb-8 animate-fade-in">
            RSVP
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 font-body">
            Пожалуйста, подтвердите свое присутствие до 28 октября
          </p>

          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <form onSubmit={handleRSVP} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-serif">Ваше имя *</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Введите ваше имя"
                    required
                    className="border-primary/30 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-lg font-serif">Вы придете? *</Label>
                  <RadioGroup value={attending} onValueChange={setAttending}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="font-body cursor-pointer">
                        Да, обязательно буду!
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="font-body cursor-pointer">
                        К сожалению, не смогу
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-lg font-serif">Количество гостей</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="5"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="border-primary/30 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg font-serif">Пожелание имениннице</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ваши теплые слова..."
                    className="border-primary/30 focus:border-primary min-h-32"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6 bg-primary hover:bg-primary/90 transition-all duration-300"
                >
                  Отправить ответ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-serif mb-8 animate-fade-in">
            Детали праздника
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                <Icon name="Music" size={32} />
              </div>
              <h3 className="text-2xl font-serif">Музыка</h3>
              <p className="font-body">Живая музыка и танцы до утра</p>
            </div>

            <div className="space-y-4 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                <Icon name="UtensilsCrossed" size={32} />
              </div>
              <h3 className="text-2xl font-serif">Ужин</h3>
              <p className="font-body">Изысканное меню и напитки</p>
            </div>

            <div className="space-y-4 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                <Icon name="Camera" size={32} />
              </div>
              <h3 className="text-2xl font-serif">Фотозона</h3>
              <p className="font-body">Профессиональная фотосъемка</p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-lg font-body">
              По всем вопросам обращайтесь к имениннице
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
