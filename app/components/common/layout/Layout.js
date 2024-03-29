import React from "react";
import Head from "next/head";
import Footer from "@/components/common/footer/Footer";
import NavBar from "@/components/common/navbar/NavBar";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Estradas</title>
        <meta
          name="description"
          content="A descoberta de Portugal - Blog de turismo, passeios e roteiros em Portugal. Estrada fora"
        />
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

        <meta name="author" content="Rui Costa" />
        <meta
          name="title"
          content="Estrada Fora, Paisagens adentro: blog de turismo em Portugal."
        />

        <meta
          name="keywords"
          content="Portugal, turismo, Estrada fora, Roteiros"
        />
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
