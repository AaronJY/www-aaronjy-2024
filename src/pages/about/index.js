import ExternalLink from "@/components/ExternalLink/ExternalLink";
import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";

export default function About() {
  return (
    <DefaultLayout>
      <h1>About me</h1>
      <h2>Where to find me</h2>
      <section>

        <ul>
          <li>
            <strong>
              <ExternalLink href='https://letterboxd.com/aaronyarbz/'>
                Letterboxd
              </ExternalLink>
            </strong>{' '}
            is a social platform for film lovers to rate, review, and discover
            movies, akin to &quot;Goodreads for film.&quot;
          </li>
          <li>
            <strong>
              <ExternalLink href='https://github.com/AaronJY'>
                GitHub
              </ExternalLink>
            </strong>{' '}
            is a web-based platform for version control and collaboration on
            software development projects. Find out what I&apos;ve been working
            on here!
          </li>
          <li>
            <strong>
              <ExternalLink href='https://www.linkedin.com/in/aaronjyarborough/'>
                LinkedIn
              </ExternalLink>
            </strong>
            , unfortunately. A social network for professionals.
          </li>
        </ul>
      </section>

      <h2>Tech I Like</h2>
      <section>
        <ul>
          <li>
            <strong>Web Development:</strong> I primarily use Node.js with TypeScript
            (or JavaScript for smaller projects) alongside Next.js to build websites
            and applications.
          </li>
          <li>
            <strong>Scripting:</strong> My preferred scripting languages are Python
            and JavaScript, as I&apos;m well-versed in them and they offer extensive
            libraries that typically cover my needs.
          </li>
          <li>
            <strong>API and Backend Development:</strong> For more robust API or backend
            architecture, I often choose .NET Core with C# and ASP.NET. The strongly-typed
            nature of C# and the structured framework of ASP.NET help maintain clean and
            organised code.
          </li>
          <li>
            <strong>Cloud Hosting:</strong> When possible, I opt for hosting on a
            DigitalOcean droplet. If more extensive cloud services are required, I usually
            opt for Google Cloud Platform (GCP), which I find more user-friendly than Azure
            or AWS. I also self-host services on shared server hosting running Ubuntu Server, typically with Hetzner.
          </li>
        </ul>

      </section>
    </DefaultLayout>

  )
}
