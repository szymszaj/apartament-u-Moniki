import { useState } from "react";
import { X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/img/salon4.jpg",
    "/img/salon2.jpg",
    "/img/salon3.jpg",
    "/img/sypialnia.jpg",
    "/img/sypialnia2.jpg",
    "/img/kuchnia1.jpg",
    "/img/kuchnia2.jpg",
    "/img/lazienka.jpg",
    "/img/lazienka3.jpg",
    "/img/ogrod.jpg",
    "/img/ogrod1.jpg",
    "/img/ogrod3.jpg",
    "/img/ogrod4.jpg",
    "/img/ogrod5.jpg",
    "/img/ogrod6.jpg",
  ];

  const imageCategories = {
    Salon: images.slice(0, 3),
    Sypialnia: images.slice(3, 5),
    Kuchnia: images.slice(5, 7),
    Łazienka: images.slice(7, 9),
    Ogród: images.slice(9, 15),
  };

  const openImage = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-10">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Galeria</h1>
          <p className="text-muted-foreground mb-10">
            Przeglądaj zdjęcia naszego apartamentu i przekonaj się, jak
            wyjątkowe może być Twoje miejsce pobytu.
          </p>

          {Object.entries(imageCategories).map(([category, images]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all group"
                    onClick={() => openImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${category} ${index + 1}`}
                      className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 z-10"
            onClick={(e) => {
              e.stopPropagation();
              closeImage();
            }}
          >
            <X className="h-6 w-6" />
          </Button>
          <img
            src={selectedImage}
            alt="Powiększone zdjęcie"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
