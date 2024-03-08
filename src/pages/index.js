import Head from "next/head";
import ExternalLink from "@/components/ExternalLink";
import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1>Hello!</h1>
        <p>
          I&apos;m Aaron. I&apos;m a Brit living in Newcastle-upon-tyne, UK. I
          work professionally as a Software Engineer and Tutor, and study
          languages in my spare time.
        </p>
        <p>
          This is my little corner of the web! I&apos;ve always had a habit of
          &apos;lurking&apos; online; I barely interact with the content I
          consume, and you&apos;ll rarely if ever catch me posting or commenting
          on something. That said, this little site endeavours to pull me by my
          ankles out of the weeds in the great digital park we find ourselves,
          and encourage me to share a bit more about myself online.
        </p>
      </section>

      <section>
        <h2>Where to find me</h2>

        <ul>
          <li>
            <strong>
              <ExternalLink href="https://letterboxd.com/aaronyarbz/">
                Letterboxd
              </ExternalLink>
            </strong>{" "}
            is a social platform for film lovers to rate, review, and discover
            movies, akin to &quot;Goodreads for film.&quot;
          </li>
          <li>
            <strong>
              <ExternalLink href="https://github.com/AaronJY">
                GitHub
              </ExternalLink>
            </strong>{" "}
            is a web-based platform for version control and collaboration on
            software development projects. Find out what I&apos;ve been working
            on here!
          </li>
          <li>
            <strong>
              <ExternalLink href="https://www.linkedin.com/in/aaronjyarborough/">
                LinkedIn
              </ExternalLink>
            </strong>
            , unfortunately. A social network for professionals.
          </li>
        </ul>

        {/* <p>
          <strong>Yarbz Tutoring</strong> is my tutoring site. You can read a
          bit more about my tutoring and general software develpment experience,
          and book a class if it suits you.
        </p>
        <p>
          <ExternalLink href="https://tutoring.yarbz.digital">
            Read more about my tutoring side-gig.
          </ExternalLink>
        </p> */}
      </section>
    </DefaultLayout>
  );
}
