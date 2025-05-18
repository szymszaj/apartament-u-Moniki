import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Check,
  PawPrint,
  Wifi,
  ParkingCircle,
  Sun,
  Tv2,
  Refrigerator,
  BedDouble,
  Baby,
  ShowerHead,
  MapPin,
  ArrowDownWideNarrow,
  Mountain,
  Waves,
} from "lucide-react";

const features = [
  {
    icon: <BedDouble className="h-7 w-7 text-primary" />,
    title: "2 Sypialnie",
    desc: "Możliwość wyboru łóżek pojedynczych lub podwójnych.",
  },
  {
    icon: <ShowerHead className="h-7 w-7 text-primary" />,
    title: "Nowoczesna łazienka",
    desc: "Prysznic i suszarka do włosów.",
  },
  {
    icon: <Refrigerator className="h-7 w-7 text-primary" />,
    title: "Pełna kuchnia",
    desc: "Lodówka, mikrofalówka, naczynia, akcesoria.",
  },
  {
    icon: <Tv2 className="h-7 w-7 text-primary" />,
    title: "Salon z TV",
    desc: "Wygodna sofa, idealna na relaks.",
  },
  {
    icon: <Baby className="h-7 w-7 text-primary" />,
    title: "Kącik zabaw",
    desc: "Specjalna strefa dla dzieci.",
  },
  {
    icon: <PawPrint className="h-7 w-7 text-primary" />,
    title: "Zwierzęta mile widziane",
    desc: "Obiekt przyjazny zwierzętom.",
  },
  {
    icon: <Wifi className="h-7 w-7 text-primary" />,
    title: "Wi-Fi",
    desc: "Szybki internet w całym apartamencie.",
  },
  {
    icon: <ParkingCircle className="h-7 w-7 text-primary" />,
    title: "Bezpłatny parking",
    desc: "Miejsce na Twój samochód.",
  },
];

const gardenFun = [
  {
    label: "Altanka z grillem",
  },
  { icon: <Sun className="h-6 w-6 text-primary" />, label: "Leżaki i relaks" },
  {
    icon: <ArrowDownWideNarrow className="h-6 w-6 text-primary" />,
    label: "Huśtawka ogrodowa",
  },
  {
    icon: <Baby className="h-6 w-6 text-primary" />,
    label: "Trampolina i mini kręgle",
  },
  {
    icon: <Check className="h-6 w-6 text-primary" />,
    label: "Siatka do badmintona",
  },
];

const attractions = [
  {
    icon: <Waves className="h-6 w-6 text-primary" />,
    title: "Termy Szaflary / Gorący Potok",
    desc: "Odpoczynek w basenach termalnych – 2 km",
  },
  {
    icon: <Mountain className="h-6 w-6 text-primary" />,
    title: "Kotelnica Białczańska",
    desc: "Jeden z największych ośrodków narciarskich – 12 km",
  },
  {
    icon: <Mountain className="h-6 w-6 text-primary" />,
    title: "Czarna Góra / GrapaSki",
    desc: "Świetne trasy dla rodzin i początkujących – 15 km",
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Zakopane",
    desc: "Szymoszkowa, Nosal, Kasprowy Wierch – 20–25 km",
  },
  {
    icon: <Mountain className="h-6 w-6 text-primary" />,
    title: "Gubałówka i Krupówki",
    desc: "Widoki na Tatry, restauracje, sklepy – 17–20 km",
  },
  {
    icon: <Waves className="h-6 w-6 text-primary" />,
    title: "Spływ Dunajcem",
    desc: "Przygoda na tratwie – 40 min samochodem",
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Jezioro Czorsztyńskie i Zamek w Niedzicy",
    desc: "Rowery, VeloCzorsztyn, zamki – 30–35 km",
  },
];

const Description = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 bg-gradient-to-br from-beige-light to-beige py-10">
        <div className="container max-w-5xl">
          <div className="mb-12 text-center animate-slide-down">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Poznaj Apartament i Okolicę
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Komfort, prywatność i przestrzeń do wypoczynku w sercu Podhala –
              odkryj, co czeka na Ciebie!
            </p>
          </div>

          <section className="mb-16 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/628159546.jpg?k=c98b642e5eea6d09282a179664f7bffc61e821346f4f154352344727ef56eca6&o=&hp=1"
                alt="Apartament u Moniki"
                className="rounded-2xl shadow-lg object-cover w-full h-[320px]"
              />
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Przestronny apartament (65 m²)
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((f) => (
                    <li
                      key={f.title}
                      className="flex items-start gap-3 bg-beige-light rounded-xl p-4 shadow-sm"
                    >
                      {f.icon}
                      <div>
                        <span className="font-medium">{f.title}</span>
                        <p className="text-muted-foreground text-sm">
                          {f.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mr-2 text-sm">
                    Max. 5 osób
                  </span>
                  <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">
                    Osobne wejście • Pełna prywatność
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section
            className="mb-16 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="md:flex md:items-center md:gap-12">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-2xl font-semibold mb-4">
                  Ogród & Strefa zabaw
                </h2>
                <p className="mb-4">
                  Wypocznij w zielonym ogrodzie – idealnym do relaksu i
                  rodzinnych aktywności. Czekają na Ciebie:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {gardenFun.map((item) => (
                    <li key={item.label} className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-muted-foreground text-sm">
                  <PawPrint className="inline h-5 w-5 mr-1 text-primary" />{" "}
                  Obiekt przyjazny zwierzętom!
                </div>
              </div>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/590368591.jpg?k=0bfd69e18cca7f888efdf570cd416402ace62b26dd32336fb14fde9ead1746cd&o=&hp=1"
                alt="Ogród"
                className="md:w-1/2 w-full rounded-2xl shadow-lg object-cover h-[270px]"
              />
            </div>
          </section>

          <section
            className="mb-16 text-center animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="inline-block px-8 py-4 rounded-2xl bg-beige-light shadow">
              <p>
                <span className="font-bold">Doba hotelowa: </span>
                <span className="text-primary">14:00 – 10:00</span>
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Zameldowanie i wymeldowanie zgodnie z Twoim planem podróży.
              </p>
            </div>
          </section>

          <section
            className="mb-16 animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Atrakcje w okolicy
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {attractions.map((a) => (
                <div
                  key={a.title}
                  className="bg-beige-light rounded-xl p-6 shadow-md flex gap-4 items-start"
                >
                  {a.icon}
                  <div>
                    <div className="font-semibold">{a.title}</div>
                    <div className="text-muted-foreground text-sm">
                      {a.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 animate-slide-up">
            <Button asChild size="lg">
              <Link to="/gallery">Zobacz Galerię zdjęć</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Zapytaj o dostępność</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Description;
