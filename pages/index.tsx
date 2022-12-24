import Header from "components/Header";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Next.js + TypeScript + Material-UI"
        description="A starter template for Next.js + TypeScript + Material-UI."
      />
      <div>
        <Header />
      </div>
    </>
  );
}
