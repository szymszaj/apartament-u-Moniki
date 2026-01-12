import { useState } from "react";
import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 md:top-1/2 md:right-6 md:-translate-y-1/2 z-[9999] floating-contact-btn transition-opacity duration-300">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              size="icon"
              className="h-10 w-10 rounded-full shadow-xl bg-primary hover:bg-primary/90 text-white animate-pulse-slow hover:animate-none transition-all duration-300 hover:scale-110 flex items-center justify-center relative group"
            >
              <Mail className="h-5 w-5 relative z-10" />
              <span className="sr-only">Skontaktuj się z nami</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md sm:max-w-lg bg-beige-light border-beige-dark/20 p-6 md:p-8 rounded-2xl">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-bold text-center">
                Napisz do nas
              </DialogTitle>
            </DialogHeader>
            <ContactForm onSuccess={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default FloatingContactButton;
