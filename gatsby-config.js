/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "James Williams II",
    author: "James Williams"
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sql',
      options: {
        typeName: "ARTWORK",
        fieldName: "sqlite",
        dbEngine: {
          client: 'sqlite3',
          connection: {
            filename: `${__dirname}/src/data/site.db`
          },
          useNullAsDefault: true
        },
        queryChain: function(query) {
          return query.select("title", "file", "year", "materials", "dimensions", "type", "link").from("ARTWORK")
        }
      }
    },
  ],
  pathPrefix: "/jw-xp-site",
}
