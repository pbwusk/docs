import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Lab PBW - INF 224</span>,
  project: {
    link: "https://github.com/pbwusk/docs",
  },
  docsRepositoryBase: "https://github.com/pbwusk/docs",
  footer: {
    text: (
      <p>
        © {new Date().getFullYear()}{" "}
        <a
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:under]"
          href="#"
          target="_blank"
          rel="noopener"
        >
          Laboratorium Pemrograman Berbasis Web - Informatika - Universitas
          Syiah Kuala
        </a>
        . Made with{" "}
        <a
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:under]"
          href="https://nextra.site/"
          target="_blank"
          rel="noopener"
        >
          Nextra
        </a>
      </p>
    ),
  },
  useNextSeoProps() {
    const { route } = useRouter();
    return {
      titleTemplate: "%s – Docs by Lab PBW Informatika USK",
    };
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta
          property="og:url"
          content={`https://docs-pbwusk.vercel.app${asPath}`}
        />
        <meta
          property="og:title"
          content={frontMatter.title || "Docs by Lab PBW Informatika USK"}
        />
        <meta
          property="og:description"
          content={frontMatter.description || "Docs by Lab PBW Informatika USK"}
        />
        <meta
          property="og:title"
          content={frontMatter.title || "Docs by Lab PBW Informatika USK"}
        />
        <meta
          property="og:description"
          content="Docs by Lab PBW Informatika USK"
        />
        <meta property="og:image" content="/images/meta.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="docs-pbwusk.vercel.app" />
        <meta
          property="twitter:url"
          content={`https://docs-pbwusk.vercel.app${asPath}`}
        />
        <meta
          name="twitter:title"
          content={frontMatter.title || "Docs by Lab PBW Informatika USK"}
        />
        <meta
          name="twitter:description"
          content="Docs by Lab PBW Informatika USK"
        />
        <meta name="twitter:image" content="/images/meta.jpg" />
      </>
    );
  },
  toc: {
    extraContent: React.Fragment,
  },
};

export default config;
