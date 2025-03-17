import "./globals.css";

export const metadata = {
  title: "Zinikus",
  description: "Robots Redefined",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-Poppins antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
