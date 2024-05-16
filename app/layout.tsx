import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ReactNode } from "react";
import Container from "./_components/container";
import Header from "./_components/header";
import "./globals.css";
import { ThemeProvider } from "@/theme-provider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Consulista",
  description: "Consulte um especialiste e marque a sua consulta médica",
};

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Container>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
