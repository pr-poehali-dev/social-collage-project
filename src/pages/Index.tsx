import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [layout, setLayout] = useState<'grid' | 'creative'>('creative');

  const images = [
    'https://cdn.poehali.dev/files/0d7827b1-7801-410c-aab2-b075c5f96cff.png',
    'https://cdn.poehali.dev/files/bb92a20d-e0ec-4034-ac4f-42bab4346bb1.jpg',
    'https://cdn.poehali.dev/files/0d7827b1-7801-410c-aab2-b075c5f96cff.png',
    'https://cdn.poehali.dev/files/bb92a20d-e0ec-4034-ac4f-42bab4346bb1.jpg',
    'https://cdn.poehali.dev/files/0d7827b1-7801-410c-aab2-b075c5f96cff.png'
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Мой фото-коллаж',
          text: 'Посмотри мой крутой коллаж!',
        });
      } catch (err) {
        console.log('Ошибка при шеринге:', err);
      }
    }
  };

  const handleDownload = () => {
    alert('Функция скачивания в разработке! 📸');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF1744] via-[#2979FF] to-[#00E676] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Фото Коллаж
          </h1>
          <p className="text-white/90 text-lg md:text-xl">
            Создавай яркие истории из своих фотографий
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <Button
            onClick={() => setLayout('creative')}
            variant={layout === 'creative' ? 'default' : 'outline'}
            className="bg-white text-[#212121] hover:bg-white/90 font-semibold shadow-lg"
          >
            <Icon name="Sparkles" size={20} className="mr-2" />
            Креативная раскладка
          </Button>
          <Button
            onClick={() => setLayout('grid')}
            variant={layout === 'grid' ? 'default' : 'outline'}
            className="bg-white text-[#212121] hover:bg-white/90 font-semibold shadow-lg"
          >
            <Icon name="Grid3x3" size={20} className="mr-2" />
            Сетка
          </Button>
          <Button
            onClick={handleShare}
            className="bg-[#FFD600] text-[#212121] hover:bg-[#FFD600]/90 font-semibold shadow-lg"
          >
            <Icon name="Share2" size={20} className="mr-2" />
            Поделиться
          </Button>
          <Button
            onClick={handleDownload}
            className="bg-[#00E676] text-white hover:bg-[#00E676]/90 font-semibold shadow-lg"
          >
            <Icon name="Download" size={20} className="mr-2" />
            Скачать
          </Button>
        </div>

        {layout === 'creative' ? (
          <div className="relative w-full max-w-4xl mx-auto aspect-square animate-scale-in">
            <Card className="absolute top-[10%] left-[5%] w-[35%] h-[35%] overflow-hidden shadow-2xl rotate-[-8deg] hover:rotate-[-12deg] hover:scale-105 transition-all duration-300 border-4 border-white">
              <img src={images[1]} alt="Фото 1" className="w-full h-full object-cover" />
            </Card>

            <Card className="absolute top-[5%] right-[8%] w-[32%] h-[32%] overflow-hidden shadow-2xl rotate-[6deg] hover:rotate-[10deg] hover:scale-105 transition-all duration-300 border-4 border-white">
              <img src={images[2]} alt="Фото 2" className="w-full h-full object-cover" />
            </Card>

            <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] overflow-hidden shadow-2xl z-10 hover:scale-110 transition-all duration-300 border-8 border-white ring-4 ring-[#FFD600]">
              <img src={images[0]} alt="Главное фото" className="w-full h-full object-cover" />
            </Card>

            <Card className="absolute bottom-[12%] left-[8%] w-[30%] h-[30%] overflow-hidden shadow-2xl rotate-[12deg] hover:rotate-[16deg] hover:scale-105 transition-all duration-300 border-4 border-white">
              <img src={images[3]} alt="Фото 3" className="w-full h-full object-cover" />
            </Card>

            <Card className="absolute bottom-[8%] right-[10%] w-[33%] h-[33%] overflow-hidden shadow-2xl rotate-[-5deg] hover:rotate-[-9deg] hover:scale-105 transition-all duration-300 border-4 border-white">
              <img src={images[4]} alt="Фото 4" className="w-full h-full object-cover" />
            </Card>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto animate-fade-in">
            {images.map((img, idx) => (
              <Card
                key={idx}
                className={`overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 border-4 border-white ${
                  idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img src={img} alt={`Фото ${idx + 1}`} className="w-full h-full object-cover" />
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12 text-center animate-fade-in">
          <div className="inline-flex gap-6 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full shadow-xl">
            <div className="flex items-center gap-2">
              <Icon name="Image" size={24} className="text-white" />
              <span className="text-white font-semibold">5 фото</span>
            </div>
            <div className="w-px bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Icon name="Zap" size={24} className="text-[#FFD600]" />
              <span className="text-white font-semibold">Динамичный стиль</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
