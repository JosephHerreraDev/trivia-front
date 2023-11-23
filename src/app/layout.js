
import "./globals.css";


export const metadata = {
  title: "Trivia",
  description: "Divertido juego de adivinanzas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
