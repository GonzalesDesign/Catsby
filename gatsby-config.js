
const dotenv = require('dotenv')
if(process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `Catsby d' Great`,
    author: `RLloyd Gonzales`,
    description: `You can teach a cat to do anything that it wants to do.`,
  },

  plugins: [

    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'about',
    //     path: `${__dirname}/src/pages/about/`
    //   }
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'assets',
    //     path: `${__dirname}/src/assets/`
    //   }
    // },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [ 
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    
    // 'gatsby-transformer-json',

    // {
    //   resolve: `gatsby-transformer-json`,
    //   options: {
    //     typeName: `Json`, // a fixed string
    //     // name: `data`,
    //     // path: `${__dirname}/src/data/`
        
    //   }
    // }
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/`
    //   }
    // }
  
    
  ]


}