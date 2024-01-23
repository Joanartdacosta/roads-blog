import React from "react";
import Head from "next/head";
import Footer from "@/components/common/footer/Footer";
import NavBar from "../navbar/NavBar";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Estradas</title>
        <meta name="description" content="Blog de turismo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&family=Open+Sans&family=Oswald:wght@700&family=Play:wght@700&family=Poppins:wght@200;300&family=Recursive&family=Roboto:ital,wght@0,500;1,300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Open+Sans&family=Play:wght@700&family=Recursive&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cinzel:wght@400..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Open+Sans&family=Play:wght@700&family=Recursive&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cinzel:wght@400..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Open+Sans&family=Outfit:wght@100..900&family=Play:wght@700&family=Recursive&display=swap"
          rel="stylesheet"
        />
        <meta
          name="keywords"
          content="Blog de Turismo, Dicas de Lugares, passadiços"
        />
        <meta name="author" content="Estradas Blog" />
      </Head>

      <main>
        <div>
          <NavBar />
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
