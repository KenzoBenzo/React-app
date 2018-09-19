module.exports = {
  siteMetadata: {
	title: 'Kennas React App',
	description: 'Makenna Smutzs first try at developing a single page app for a website',
	keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '22a88q3xdqw5',
        accessToken: 'e3281bb3e6f92909b1be9877aeffea7d0efbf32bcf9bfd43e1112673bb434fd8'
      }
    }
  ],
}