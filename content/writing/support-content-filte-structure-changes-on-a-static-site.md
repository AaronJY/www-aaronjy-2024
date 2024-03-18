---
title: Supporting content file structure changes on a static site
pubdate: 2024-03-18T16:47:32.150Z
desc: Static sites are great, but changing your content layout is like moving
  furniture – fun for no one.
---
Static site generators (SSGs) are great. They take your complex site source and distil it down to the web's native language: HTML, CSS and JS. You can host your files anywhere: in cloud-native storage buckets; on low-cost CPanel hosting; on global CDNs; your old Lenovo ThinkPad in your cupboard running an Apache server that hasn't been patched since 2008; the list goes on. Wanna go further and throw away your CMS? Cool, you can use markdown files and a text editor as your CMS. 

Simplicity is great, and SSGs bring loads of benefits (speed, a great developer experience, low cost overheads), but they're not a silver bullet, and can present a bit of a learning curve to the non-technical tasked with updating your site's content.

## The problem

Say you have an SSG that uses MD files for the site's content. In order to edit the site's content, you simply edit the MD files, build the site, and upload your new HTML/JS/CSS files.

Your folder structure could look like this:

```
site/
├─ content/
│  ├─ index.md <-- homepage
│  ├─ recipes/
│  │  ├─ pizza.md
│  │  ├─ chilli.md
├─ src/ <-- site source code
├─ public/ <-- static assets (images, videos, PDFs, etc.)
```

And your `content/index.md` looks like this:

```md
# Welcome!

This is my site! Want some fire recipes? Check [/recipes](these bad boys out)
```

Your site homepage would contain a link to the recipe listing page at `/recipes` using Markdown to generate the anchor tag.

Assuming your `content/` folder informs your site's URL structure, there must be a file at `content/recipes/index.md`, or the link would send you to a 404.

Now, imagine you want to restructure your site's link hierarchy. Maybe you want to house all of your recipes under a new URL: `www.site.com/yummy/recipes` With a small site like ours, the time required to do this would be trivial. We'd lift and shift everything under `content/recipes/` to `content/yummy/recipes`, and we'd also have to manually update the link in `content/index.md` to `/yummy/recipes`; no big deal.

But what if we had hundreds of files, and we wanted to restructure our file system in the same way? We'd potentially have hundreds of MD files that all need to be manually updated to have their links point to a new URL. For a developer, we could probably write some funky regex or do a mass find & replace to find and update the links en masse, but what if a non-technical editor wants to make the same change? They would potentially have to manually work through each MD file and update the links by hand.

## Map those URLs!

Essentially, the problem is that there's no way to uniquely identify a particlar piece of content/article *other than* its link, and the link changes based on the content's position in the file system.

The solution is to give each article a uniqiue identifier, and keep track of any previous links. Then all we need to do is tell our SSG to generate static files for both the current link and *all previous links*.

Here's the gist of it:

* **Generate unique IDs:**  Instead of relying on file paths, assign a unique identifier (an "id" property) to the [frontmatter](https://dpericich.medium.com/what-is-front-matter-and-how-is-it-used-to-create-dynamic-webpages-9d8dc053b457) of each markdown file. 
* **URL mapping for flexibility:**  Create a central mapping file that acts like a translator, mapping each content ID to all the different URLs (slugs/paths) that can access it.
* **Say goodbye to path dependence:**  When a visitor requests a URL, the system checks the url-map.json file. If it finds a matching ID, it grabs the "canonical path" (the preferred URL) and uses that to locate the actual file. This lets you access the same content through multiple URLs!

Carrying on from our previous example, this is what our mapping file might look like:

```json
{
    "892c5a5c-1f77-43ce-a13a-b9d8bd02971c": [
        "yummy/recipes", <-- The canonical/latest path
        "recipes" <-- The previous path
    ]
}
```

There's some work in keeping the mapping file up-to-date, but depending on your workflow, you could automate this using Git hooks or a CI pipeline like GitHub actions or Drone.
