module.exports = {
  siteMetadata: {
    title: `The Routing Company`,
    siteUrl: `https://theroutingcompany.com/`,
    description: `Transportation that moves with you`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins`, `Mulish`, `Roboto`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://scharfstudio.us1.list-manage.com/subscribe/post?u=059b9a870db61894ec6b391cb&amp;id=23a847257e",
      },
    },
  ],
}
