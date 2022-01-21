module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "sources",
        path: `${__dirname}/src/sources`,
      },
    },
  ],
  siteMetadata: {
    name: "Milad",
    lastName: "Mosadegh",
    email: "mosadegh@gmail.com",
    password: "1234",
    company: "Proximity",
    title: "Junior Software Developer",
    contact: "me@proxy.com",
  },
};
