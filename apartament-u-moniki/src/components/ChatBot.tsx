import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Cześć! 👋 Jestem asystentem Apartamentu u Moniki. Jak mogę Ci pomóc?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (
      message.includes("gdzie") ||
      message.includes("lokalizacja") ||
      message.includes("adres") ||
      message.includes("jak dojechać")
    ) {
      return "Apartament znajduje się w Szaflarach pod adresem: Szaflary 777, 34-460. Jesteśmy zaledwie 2 km od Term Szaflary, 20 km od Zakopanego i 12 km od Kotelnicy Białczańskiej. 📍";
    }

    if (
      message.includes("cena") ||
      message.includes("koszt") ||
      message.includes("ile kosztuje") ||
      message.includes("cennik")
    ) {
      return "Ceny uzależnione są od terminu i długości pobytu. Aby poznać dokładną cenę, skontaktuj się z nami pod numerem +48 504 808 290 lub sprawdź dostępność na Booking.com. Oferujemy atrakcyjne ceny! 💰";
    }

    if (
      message.includes("rezerwacja") ||
      message.includes("dostępność") ||
      message.includes("wolne terminy") ||
      message.includes("zarezerwować")
    ) {
      return "Aby sprawdzić dostępność i zarezerwować apartament, możesz: \n📞 Zadzwonić: +48 504 808 290\n📧 Napisać: apartament45f@gmail.com\n🌐 Zarezerwować online przez Booking.com\nOdpowiadamy w ciągu 24h!";
    }

    if (
      message.includes("wyposażenie") ||
      message.includes("wyposazen") ||
      message.includes("amenities") ||
      message.includes("udogodnienia") ||
      message.includes("co jest w apartamencie") ||
      message.includes("co ma apartament")
    ) {
      return "Apartament (65m²) oferuje:\n✅ 2 sypialnie (łóżka pojedyncze lub podwójne)\n✅ Pełna kuchnia (lodówka, mikrofalówka)\n✅ Nowoczesna łazienka z prysznicem\n✅ Salon z TV\n✅ Bezpłatny Wi-Fi\n✅ Bezpłatny parking\n✅ Ogród z grillem i strefą zabaw\n🛁 Jacuzzi w ogrodzie";
    }

    if (
      message.includes("zwierzęta") ||
      message.includes("pies") ||
      message.includes("kot") ||
      message.includes("pupil") ||
      message.includes("pets")
    ) {
      return "Tak! 🐾 Nasz apartament jest w pełni przyjazny zwierzętom. Twój czworonożny przyjaciel będzie mile widziany. Nie pobieramy dodatkowych opłat za zwierzęta.";
    }

    if (
      message.includes("ile osób") ||
      message.includes("max") ||
      message.includes("capacity") ||
      message.includes("dla ilu")
    ) {
      return "Apartament może pomieścić maksymalnie 5 osób. Mamy 2 sypialnie oraz wygodną sofę w salonie. Idealne dla rodziny! 👨‍👩‍👧‍👦";
    }

    if (
      message.includes("atrakcje") ||
      message.includes("co zwiedzić") ||
      message.includes("co zobaczyć") ||
      message.includes("termy") ||
      message.includes("stoki") ||
      message.includes("narty") ||
      message.includes("w okolicy") ||
      message.includes("w poblizu") ||
      message.includes("co jest w okolicy") ||
      message.includes("blisko") ||
      message.includes("okolica")
    ) {
      return "W okolicy znajdują się:\n🏔️ Termy Szaflary/Gorący Potok - 2 km\n⛷️ Kotelnica Białczańska - 12 km\n🎿 Czarna Góra/GrapaSki - 15 km\n🏔️ Zakopane - 20 km\n🚣 Spływ Dunajcem - 35 km\n🏰 Zamek w Niedzicy - 30 km\n🏔️ Gubałówka i Krupówki - 17-20 km";
    }

    if (message.includes("parking")) {
      return "Tak! Oferujemy bezpłatne miejsce parkingowe bezpośrednio przy apartamencie. 🚗";
    }

    if (
      message.includes("wifi") ||
      message.includes("internet") ||
      message.includes("wi-fi")
    ) {
      return "Tak, w całym apartamencie dostępny jest szybki, bezpłatny Wi-Fi! 📶";
    }

    if (
      message.includes("dzieci") ||
      message.includes("dziecko") ||
      message.includes("dla dzieci") ||
      message.includes("kids")
    ) {
      return "Apartament jest idealny dla rodzin z dziećmi! Mamy:\n🎪 Kącik zabaw\n🎾 Trampolinę\n🎳 Mini kręgle\n🏸 Siatkę do badmintona\n🌳 Bezpieczny ogród\nDzieci będą zachwycone!";
    }

    if (
      message.includes("ręczniki") ||
      message.includes("reczniki") ||
      message.includes("pościel") ||
      message.includes("posciel") ||
      message.includes("ręcznik") ||
      message.includes("recznik") ||
      message.includes("prześcieradła") ||
      message.includes("przescieradla")
    ) {
      return "Tak! 🛏️ W apartamencie zapewniamy:\n✅ Świeżą pościel dla wszystkich gości\n✅ Ręczniki (komplet na osobę)\n✅ Ręczniki kąpielowe\nWszystko jest wliczone w cenę - nie musisz nic zabierać ze sobą!";
    }

    if (
      message.includes("grill") ||
      message.includes("grillować") ||
      message.includes("grillowanie") ||
      message.includes("bbq") ||
      message.includes("ognisko")
    ) {
      return "Tak! 🔥 W ogrodzie mamy:\n✅ Altankę z grillem - do Twojej dyspozycji\n✅ Możliwość grillowania w wyznaczonym miejscu\n✅ Miejsce na ognisko (zachowaj ostrożność)\nGrilluj ile dusza zapragnie - to jedna z naszych atrakcji! 🍖";
    }

    if (
      message.includes("jacuzzi") ||
      message.includes("jacuzi") ||
      message.includes("wanna") ||
      message.includes("spa") ||
      message.includes("basen") ||
      message.includes("gorąca woda")
    ) {
      return "Tak! 🛁 Mamy jacuzzi w ogrodzie!\n✅ Dostępne przez cały rok\n✅ Możliwość regulacji temperatury\n✅ Idealne na relaks po całym dniu w górach\n✅ Romantyczne wieczory pod gwiazdami\nTo jeden z naszych największych atutów! ⭐";
    }

    if (
      message.includes("cisza") ||
      message.includes("ciszy") ||
      message.includes("hałas") ||
      message.includes("halas") ||
      message.includes("głośno") ||
      message.includes("glosno") ||
      message.includes("muzyka") ||
      message.includes("imprez")
    ) {
      return "🔇 Zasady ciszy nocnej:\n⏰ Godziny ciszy: 22:00 - 7:00\n✅ Prosimy o szacunek dla sąsiadów\n✅ Apartament nie jest przeznaczony na głośne imprezy\n✅ Można słuchać muzyki, ale w umiarkowanym natężeniu\nZależy nam na komforcie wszystkich gości!";
    }

    if (
      message.includes("check") ||
      message.includes("zameldowanie") ||
      message.includes("wymeldowanie") ||
      message.includes("doba")
    ) {
      return "⏰ Doba hotelowa:\n✅ Zameldowanie: od 14:00\n✅ Wymeldowanie: do 10:00\nMożliwe są elastyczne godziny - skontaktuj się z nami!";
    }

    if (
      message.includes("kontakt") ||
      message.includes("telefon") ||
      message.includes("email") ||
      message.includes("napisać")
    ) {
      return "Skontaktuj się z nami:\n📞 Telefon: +48 504 808 290\n📧 Email: niania2555@gmail.com\n🌐 Instagram: @apartament_u_moniki\nOdpowiadamy w ciągu 24 godzin!";
    }

    if (
      message.includes("pogoda") ||
      message.includes("sezon") ||
      message.includes("kiedy jechać")
    ) {
      return "Szaflary są piękne o każdej porze roku! 🌤️\n❄️ Zima: narty, termy\n🌸 Wiosna/Lato: góry, jeziora, aktywność\n🍂 Jesień: piękne widoki, spokój\nApartament dostępny cały rok!";
    }

    if (
      message.includes("cześć") ||
      message.includes("hej") ||
      message.includes("witaj") ||
      message.includes("dzień dobry") ||
      message.includes("hello") ||
      message.includes("hi")
    ) {
      return "Cześć! 😊 Miło Cię poznać! W czym mogę Ci pomóc? Możesz zapytać mnie o:\n📍 Lokalizację\n💰 Ceny\n🏠 Wyposażenie i udogodnienia\n🛁 Jacuzzi i grill\n🛏️ Ręczniki i pościel\n🎯 Atrakcje w okolicy\n📅 Rezerwację";
    }

    if (
      message.includes("dzięki") ||
      message.includes("dziękuję") ||
      message.includes("thank")
    ) {
      return "Nie ma za co! 😊 Jeśli masz jeszcze jakieś pytania, śmiało pytaj! Chętnie pomogę.";
    }

    return "Hmm, nie jestem pewien jak na to odpowiedzieć. 🤔 Możesz zapytać mnie o:\n📍 Lokalizację apartamentu\n💰 Ceny i rezerwację\n🏠 Wyposażenie\n🛁 Jacuzzi i grill\n🛏️ Ręczniki i pościel\n🔇 Godziny ciszy\n🐾 Zasady dotyczące zwierząt\n🎯 Atrakcje w okolicy\n\nLub skontaktuj się bezpośrednio:\n📞 +48 504 808 290\n📧 apartament45f@gmail.com";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "Czy jest jacuzzi?",
    "Czy są ręczniki i pościel?",
    "Czy można grillować?",
    "Co jest w okolicy?",
  ];

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg hover:scale-110 transition-transform z-50 bg-gradient-to-r from-primary to-primary/80"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
          </span>
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-border animate-in slide-in-from-bottom-4">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bot className="h-8 w-8" />
                <span className="absolute bottom-0 right-0 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
              <div>
                <h3 className="font-semibold">Asystent</h3>
                <p className="text-xs opacity-90">Apartament u Moniki</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "bot" && (
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Bot className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-primary text-white"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">
                      {message.text}
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user"
                          ? "text-white/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString("pl-PL", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  {message.sender === "user" && (
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="bg-muted rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <div
                        className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {messages.length <= 2 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-muted-foreground mb-2">
                Popularne pytania:
              </p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Napisz wiadomość..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                disabled={!inputValue.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Odpowiadam na podstawie dostępnych informacji
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
