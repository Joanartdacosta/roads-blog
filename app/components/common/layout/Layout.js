import React from "react";
import Head from "next/head";
import Navbar from "@/components/common/navbar/NavBar";
import Footer from "@/components/common/footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Estradas</title>
        <meta name="description" content="Blog de turismo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto:ital,wght@0,500;1,300&display=swap"
          rel="stylesheet"
        />
        <meta
          name="keywords"
          content="Blog de Turismo, Dicas de Lugares, passadicos"
        />
        <meta name="author" content="Estradas Blog" />
      </Head>

      <main>
        <Navbar />

        {children}
        <Footer />
      </main>
    </div>
  );
}