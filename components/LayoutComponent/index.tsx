import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import HeaderComponent from "./Header";

interface LayoutProps {
  children: any;
}

const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Thumbnail Downloader - Hansa Dewmina 🤩.</title>
        <meta
          name="description"
          content="Download Your Thumbnais today. Welcome! 👋"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <HeaderComponent />
      

      <Box as="main" position="relative" overflow="hidden">
        {children}
      </Box>
    </>
  );
};

export default LayoutComponent;
