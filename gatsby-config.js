module.exports = {
  siteMetadata: {
      title: "Tim's",
      author: 'Tim Cheng'
  },
  plugins: [
      'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-filesystem', 
        options: {
          name: 'src', 
          path: `${__dirname}/src/`
        }
      }
  ]
}