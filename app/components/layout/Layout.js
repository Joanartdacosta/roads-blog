import React from "react";
import Head from "next/head";
import NavbarMenu from "../navbar/NavbarMenu";
import navBarStyles from "../../components/navbar/navbar.module.css";
import layoutStyles from "./layout.module.css";

export default function Layout() {
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
        <div className={layoutStyles.sections}>
          <div className={navBarStyles.menuIcon}>
            <NavbarMenu />
          </div>
          <div>content</div>
        </div>
      </main>
    </>
  );
}
