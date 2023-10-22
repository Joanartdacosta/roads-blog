import React from "react";
import Head from "next/head";
import NavbarMenu from "../navbar/NavbarMenu";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Estradas</title>
        <meta name="description" content="Blog de turismo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Kaushan+Script&family=Poppins:wght@200&family=Raleway:wght@100;300;400&family=Shadows+Into+Light&family=Zeyada&display=swap"
          rel="stylesheet"
        />
        <meta
          name="keywords"
          content="Blog de Turismo, Dicas de Lugares, passadicos"
        />
        <meta name="author" content="Estradas Blog" />
      </Head>

      <main>
        <NavbarMenu />
        {children}
      </main>

      {!home && <div></div>}
    </>
  );
}
