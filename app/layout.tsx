"use client";

/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";

/* Instruments */
import styles from "./styles/layout.module.css";
import "./styles/globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Scene1 } from "./pages/Scene1";
import { Scene2 } from "./pages/Scene2";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav />
            <BrowserRouter>
              <Routes>
                <Route path="/scene1" element={<Scene1 />} />
                <Route path="/scene2" element={<Scene2 />} />
              </Routes>
            </BrowserRouter>
            <main className={styles.main}>{props.children}</main>
          </section>
        </body>
      </html>
    </Providers>
  );
}
