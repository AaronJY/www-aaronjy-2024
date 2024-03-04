import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ExternalLink from "@/components/ExternalLink";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section>
        <h1>Hello!</h1>
      </section>

      <section>
        <p>
          I&apos;m Aaron. I&apos;m a Brit living in Newcastle-upon-tyne,
          UK. I work professionally as a Software Engineer and Tutor, and study
          languages in my spare time.
        </p>
        <p>
          This is my little corner of the web! I&apos;ve always had a terrible
          habit of &apos;lurking&apos; online; I barely interact with the
          content I consume, and you&apos;ll rarely if ever catch me posting or
          commenting on something. That said, this little site endeavours to
          pull me by my ankles out of the weeds in the great digital park we
          find ourselves, and encourage me to share a bit more about myself
          online.
        </p>
      </section>

      <section>
        <h2>Where to find me</h2>
        <p>
          I&apos;m not a massive fan of social media, and prefer to keep my
          digital footprint as small as possible. That said, you can find me in
          the following places!
        </p>

        <p>
          <strong>Letterboxd</strong> is a social platform for film lovers to
          rate, review, and discover movies, akin to &quot;Goodreads for
          film.&quot;
        </p>
        <p>
          <ExternalLink href="https://letterboxd.com/aaronyarbz/">
            See what I&apos;ve watched recently.
          </ExternalLink>
        </p>

        <p>
          <strong>GitHub</strong> is a web-based platform for version control
          and collaboration on software development projects. Find out what
          I&apos;ve been working on here!
        </p>
        <p>
          <ExternalLink href="https://github.com/AaronJY">
            Check out what I&apos;ve been working on.
          </ExternalLink>
        </p>

        <p>
          <strong>LinkedIn</strong> is possibly the <i>worst</i> social network.
          Specifically for professional stuff, I&apos;m only on here because I
          have to be 😩
        </p>
        <p>
          <ExternalLink href="https://www.linkedin.com/in/aaronjyarborough/">
            Be creepy and stalk me on LinkedIn.
          </ExternalLink>
        </p>

        <p>
          <strong>Yarbz Tutoring</strong> is my tutoring site. You can read a
          bit more about my tutoring and general software develpment experience,
          and book a class if it suits you.
        </p>
        <p>
          <ExternalLink href="https://tutoring.yarbz.digital">
            Read more about my tutoring side-gig.
          </ExternalLink>
        </p>
      </section>

      <Footer />
    </>
  );
}
