import { ShieldCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { footerLinks } from "@/components/links/links";

const lastUpdated = "27 czerwca 2026";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-16 bg-gradient-to-b from-beige to-beige-dark/40">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <div className="mx-auto mb-4 h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-beige-dark bg-clip-text text-transparent">
              Polityka Prywatności
            </h1>
            <p className="text-muted-foreground">
              Ostatnia aktualizacja: {lastUpdated}
            </p>
          </div>

          <div className="bg-beige-light rounded-2xl shadow-xl border border-beige-dark/30 p-8 md:p-10 space-y-8 text-muted-foreground leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">Definicje</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Administrator</strong> –
                  Apartament u Moniki, ul. Augustyna Suskiego 45F, 34-424
                  Szaflary.
                </li>
                <li>
                  <strong className="text-foreground">Serwis</strong> – strona
                  internetowa Apartamentu u Moniki.
                </li>
                <li>
                  <strong className="text-foreground">RODO</strong> –
                  Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z
                  dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
                  związku z przetwarzaniem danych osobowych oraz w sprawie
                  swobodnego przepływu takich danych.
                </li>
                <li>
                  <strong className="text-foreground">Użytkownik</strong> –
                  każda osoba korzystająca z Serwisu.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                Informacje ogólne
              </h2>
              <p>
                Administratorem Państwa danych osobowych jest Apartament u
                Moniki, ul. Augustyna Suskiego 45F, 34-424 Szaflary.
              </p>
              <p>Kontakt z Administratorem:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  e-mail:{" "}
                  <a
                    href={footerLinks.contact.email.href}
                    className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                  >
                    {footerLinks.contact.email.label}
                  </a>
                </li>
                <li>
                  telefon:{" "}
                  <a
                    href={footerLinks.contact.phone.href}
                    className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                  >
                    {footerLinks.contact.phone.label}
                  </a>
                </li>
              </ul>
              <p>Administrator przetwarza dane osobowe:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  zgodnie z przepisami RODO oraz ustawą o ochronie danych
                  osobowych,
                </li>
                <li>
                  w sposób zgodny z zasadami rzetelności, przejrzystości oraz
                  minimalizacji danych,
                </li>
                <li>
                  zapewniając odpowiedni poziom bezpieczeństwa danych osobowych.
                </li>
              </ul>
              <p>
                Korzystanie z Serwisu nie wymaga podawania danych osobowych, z
                wyjątkiem danych przekazywanych dobrowolnie za pośrednictwem
                formularza kontaktowego.
              </p>
              <p>Serwis może pozyskiwać informacje o Użytkownikach poprzez:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>dane dobrowolnie wpisane w formularzu kontaktowym,</li>
                <li>
                  techniczne pliki cookies niezbędne do prawidłowego działania
                  strony,
                </li>
                <li>logi serwera prowadzone przez dostawcę hostingu.</li>
              </ul>
              <p>
                Administrator nie stosuje zautomatyzowanego podejmowania decyzji
                ani profilowania.
              </p>
              <p>
                Jeżeli będzie to konieczne do realizacji usług, dane mogą być
                przekazywane poza Europejski Obszar Gospodarczy wyłącznie z
                zachowaniem zabezpieczeń wymaganych przez RODO, w szczególności
                w przypadku korzystania z usług dostawców mających siedzibę poza
                EOG.
              </p>
              <p>
                Odbiorcami danych mogą być wyłącznie podmioty świadczące na
                rzecz Administratora usługi niezbędne do funkcjonowania Serwisu,
                takie jak:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>dostawca hostingu,</li>
                <li>dostawca poczty elektronicznej,</li>
                <li>
                  dostawca usługi EmailJS obsługującej formularz kontaktowy.
                </li>
              </ul>
              <p>
                Podmioty te przetwarzają dane wyłącznie w zakresie niezbędnym do
                realizacji świadczonych usług.
              </p>
              <p>
                Dane mogą zostać udostępnione organom publicznym wyłącznie w
                przypadkach przewidzianych przepisami prawa.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                Cele i podstawy przetwarzania danych
              </h2>
              <p>Administrator przetwarza dane osobowe w celu:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>udzielenia odpowiedzi na przesłane zapytanie,</li>
                <li>prowadzenia korespondencji,</li>
                <li>przedstawienia oferty pobytu,</li>
                <li>
                  dokonania rezerwacji oraz realizacji umowy najmu apartamentu.
                </li>
              </ul>
              <p>Podstawą przetwarzania danych jest:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  art. 6 ust. 1 lit. b RODO – podjęcie działań przed zawarciem
                  umowy lub wykonanie umowy;
                </li>
                <li>
                  art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes
                  Administratora polegający na prowadzeniu korespondencji oraz
                  obsłudze zapytań.
                </li>
              </ul>
              <p>
                Dane przechowywane są wyłącznie przez okres niezbędny do
                realizacji celu ich przetwarzania, a następnie przez okres
                wynikający z obowiązujących przepisów prawa lub do czasu
                przedawnienia ewentualnych roszczeń.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                Formularz kontaktowy
              </h2>
              <p>
                Podając dane w formularzu kontaktowym, przekazują Państwo
                Administratorowi informacje niezbędne do udzielenia odpowiedzi
                na przesłane zapytanie.
              </p>
              <p>
                Podanie danych jest dobrowolne, jednak ich niepodanie może
                uniemożliwić udzielenie odpowiedzi lub kontakt w sprawie
                rezerwacji.
              </p>
              <p>
                Formularz kontaktowy umożliwia przekazanie następujących danych:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>imię,</li>
                <li>numer telefonu (opcjonalnie),</li>
                <li>treść wiadomości.</li>
              </ul>
              <p>
                Wiadomości przesyłane za pomocą formularza są dostarczane z
                wykorzystaniem usługi EmailJS.
              </p>
              <p>
                Serwis może zapisywać informacje techniczne dotyczące
                połączenia, takie jak adres IP, data i godzina połączenia oraz
                informacje o przeglądarce internetowej. Dane te wykorzystywane
                są wyłącznie w celu zapewnienia bezpieczeństwa i prawidłowego
                działania strony.
              </p>
              <p>
                Dane przekazane za pomocą formularza nie są wykorzystywane do
                celów marketingowych ani sprzedawane osobom trzecim.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                Prawa Użytkownika
              </h2>
              <p>Każdej osobie, której dane dotyczą, przysługuje prawo do:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>dostępu do swoich danych,</li>
                <li>otrzymania kopii danych,</li>
                <li>sprostowania danych,</li>
                <li>usunięcia danych,</li>
                <li>ograniczenia przetwarzania,</li>
                <li>wniesienia sprzeciwu wobec przetwarzania,</li>
                <li>
                  przenoszenia danych w przypadkach przewidzianych przepisami
                  prawa,
                </li>
                <li>
                  wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
                </li>
              </ul>
              <p>
                Jeżeli przetwarzanie odbywa się na podstawie zgody, Użytkownik
                ma prawo wycofać ją w dowolnym momencie, bez wpływu na zgodność
                z prawem przetwarzania dokonanego przed jej cofnięciem.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                Pliki cookies
              </h2>
              <p>
                Serwis wykorzystuje wyłącznie techniczne pliki cookies niezbędne
                do prawidłowego działania strony internetowej.
              </p>
              <p>
                Nie wykorzystujemy plików cookies do celów analitycznych,
                marketingowych ani profilowania użytkowników.
              </p>
              <p>
                Użytkownik może w każdej chwili zmienić ustawienia dotyczące
                plików cookies w swojej przeglądarce internetowej.
              </p>
              <p>
                Wyłączenie technicznych plików cookies może spowodować
                nieprawidłowe działanie niektórych funkcji strony.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                Logi serwera
              </h2>
              <p>
                Podczas korzystania z Serwisu automatycznie zapisywane mogą być
                dane techniczne, takie jak:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>adres IP,</li>
                <li>data i godzina połączenia,</li>
                <li>adres URL odwiedzanej strony,</li>
                <li>typ przeglądarki,</li>
                <li>system operacyjny,</li>
                <li>informacje o błędach technicznych.</li>
              </ul>
              <p>
                Dane te nie są wykorzystywane do identyfikacji Użytkowników i
                służą wyłącznie zapewnieniu bezpieczeństwa, administrowaniu
                Serwisem oraz diagnozowaniu problemów technicznych.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">
                Zmiany Polityki Prywatności
              </h2>
              <p>
                Administrator zastrzega sobie prawo do zmiany niniejszej
                Polityki Prywatności w przypadku zmiany przepisów prawa lub
                sposobu funkcjonowania Serwisu.
              </p>
              <p>
                Aktualna wersja Polityki Prywatności jest zawsze dostępna na
                stronie internetowej.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
