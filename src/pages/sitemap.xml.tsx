import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const links = [
    { url: "/", changefreq: "weekly", priority: 1.0 },
    { url: "/emekli-bankaciligi", changefreq: "weekly", priority: 0.9 },
    { url: "/bankalarin-musterisi-ol", changefreq: "weekly", priority: 0.8 },
  ];

  const sitemapStream = new SitemapStream({
    hostname: "https://www.sorgulat.com",
  });

  const xmlStream = new Readable();
  xmlStream._read = () => {};
  xmlStream.pipe(sitemapStream);

  for (const link of links) {
    sitemapStream.write(link);
  }

  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream).then((data) =>
    data.toString()
  );

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

const Sitemap = () => {};
export default Sitemap;
