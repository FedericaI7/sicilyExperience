import styles from "../../styles/Favorites.module.scss";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import MenuDesk from "@/components/menuDesk";
import MenuMobile from "@/components/menuMobile";

export default function Intro() {
  return (
    <div className={styles.Favorites}>
      <Head>
        <title>Favorites</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navFavorites}>
        <header>
          <MenuDesk />
          <MenuMobile />
        </header>
        <div className={styles.textNav}>
          <h1>
            Welcome to your collection of favorite experiences! Here you can
            keep track of all the adventures you've loved the most with us. Add
            the experiences you want to relive over and over again. Each
            experience is a precious piece in your journey of discovery. Keep
            exploring and creating unforgettable memories with us!
          </h1>
        </div>
      </nav>
      {/* <main>**SEZIONE CARD AGGIUNTE AI PREFERITI***</main> */}
    </div>
  );
}
