import "../styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import DefaultLayout from "../components/pagelayouts/DefaultLayout";

export type PageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWrapper = AppProps & {
  Component: PageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWrapper) {
  // If the page has a custom layout use it. Otherwise use default layout
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return getLayout(<Component {...pageProps} />);
}
