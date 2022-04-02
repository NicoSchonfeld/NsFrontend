import Head from "next/head";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import LoadingPage from "../components/pageHome/LoadingPage";

export default function Layout({ children, title, description }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);

    setLoading(true);
  }, []);
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Git, Github" />
        <meta name="author" content="Nicolás Schönfeld" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="reply-to" content="yznicolass@gmail.com" />
        <meta
          name="copyright"
          content="® NICO SCHÖNFELD. Todos los derechos reservados"
        />
        <meta name="designer" content="Nicolás Schönfeld" />
        <meta name="distribution" content="Global" />
        <meta name="language" content="ES" />
        <meta
          name="keywords"
          content="html, css, javascript, git, github, aprender, aprender html, aprender css, aprender javascript, aprender git, curso, curso html, curso css, curso javascript, curso git"
        />
      </Head>

      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Header />

          <div>{children}</div>

          <Footer />
        </>
      )}
    </>
  );
}

Layout.defaultProps = {
  title: "Ns FronEnd | Sitio Web",
  description: "Sitio web creado para aprender las baces del desarrollo web",
};
