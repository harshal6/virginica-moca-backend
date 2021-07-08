# Virginia Museum of Contemporary Art Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/248c1682-5d7f-4910-a108-0b03cfed1f91/deploy-status)](https://app.netlify.com/sites/vmoca/deploys)

### Features

- Contentful API
- Netlify integration
- SEO Friendly Component
  - JSON-LD Schema
  - OpenGraph sharing support
  - Sitemap Generation
- 3rd Party Applications

## Setup Local Environment

node: 12x

In order to run the Gatsby CLI, you'll first need to install Gatsby locally/globally:

`npm install -g gatsby`

To install all the necessary packages for the project, run:

`npm install`

**Configurations** - There are configuration keys used to make connections to 3rd party applications. For that, you'll need to create a .env.development file in the root of your project with the appropriate identification keys and tokens.

**DO NOT** store your any access tokens or space ids anywhere in the code. Treat them like passwords. Put them in the .env.development file.

## Setup Contentful

To connect Gatsby to Contentful, you'll need to run:

`npm run setup`

Enter in the requested info for your Contentful space found here: **app.contentful.com** → **Space Settings** → **API keys**. You will need to provide both a standard API key (first tab) and a management key (second tab).

For the management key, you'll need to generate a new personal token inside Contentful. Follow the steps in Contentful to generate one.

## Site Config

You can find details related to the company found in the `/src/utils/siteConfig.js` file.

## Running the Website

To run the website locally, run:

`gatsby develop`

When you run `gatsby develop`, keep your eye on the console for any errors. These errors will mainly elude to issues with the Contentful data structure. As you're in the Contentful CMS and making changes, each time you publish new changes, you'll need to stop and restart your local server.

Gatsby can hold on to cache from time to time, use the following command to clear cache:

`gatsby clean`

## Website UI

[TBD]

## Content and SEO

SEO is mainly handled by the SEO component (/src/components/Seo/index.js). This component pulls from Contentful data and populates onto the page as necessary. It also takes on the Schema.org structure.

## Logo

Create the logo image files and put them in `/static/logos` folder, also ensure the siteLogo section of the siteConfig is updated.

## Favicon

Generate a favicon and put the contents of the favicon package in the `/src/images` folder.

## Deployments (through Netlify)

Through webhooks, we use Netlify to build our JS into static HTML files and store those HTML files to be served up.

## Additional Settings

TBD

## Contentful Webhook (Optional)

Through webhooks, triggers are setup to kickoff a new netlify build every time content in Contentful is published.

## Useful Tips

- If you make edits to your Contentful space while running `gatsby develop` you will need to stop it and rerun the command to see the changes reflected. For example a new post or page will not automatically show up until the website has been rebuilt.
- The template assumes you have at least **one page**, **one post** and **one tag** in Contentful. If you do not the website will fail to build.
- The SEO component assumes you have entered at least one meta description in Contentful for a post and one for a page. If you do not the website will fail to build. See the Content and SEO section above.
- **DO NOT** store your any access tokens or space ids anywhere in the code. Treat them like passwords.
