import { Link } from "react-router-dom";
import { Frown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => (
  <div className="min-h-screen flex flex-col bg-beige-light">
    <Navigation />
    <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
      <div className="bg-beige p-10 rounded-2xl shadow-lg max-w-lg w-full animate-slide-down">
        <div className="flex flex-col items-center gap-3">
          <Frown className="h-16 w-16 text-primary mb-2" />
          <h1 className="text-6xl font-bold mb-2 text-beige-dark leading-none">
            404
          </h1>
          <h2 className="text-2xl font-semibold mb-2 text-beige-dark">
            Ups! Nie znaleziono strony
          </h2>
          <p className="text-muted-foreground mb-6">
            Strona, której szukasz, nie istnieje lub została przeniesiona.
            <br />
            Wróć na stronę główną lub wybierz inną zakładkę.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-full font-medium bg-primary text-white hover:bg-primary/90 transition-colors shadow"
          >
            Wróć na stronę główną
          </Link>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotFound;
