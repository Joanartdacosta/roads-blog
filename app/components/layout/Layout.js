import React from "react";
import Head from "next/head";
import NavbarMenu from "../navbar/NavbarMenu";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <title>Estradas</title>
        <meta name="description" content="Blog de turismo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="Blog de Turismo, Dicas de Lugares, passadicos"
        />
        <meta name="author" content="Estradas Blog" />
      </Head>

      <main>
        {" "}
        <div>
          <NavbarMenu />
          {children}
        </div>
      </main>

      {!home && <div></div>}
    </>
  );
}
