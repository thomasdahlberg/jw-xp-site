import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Mapper from './mapper';

const Windows = (props) => {
  return (
    <StaticQuery
        query={
            graphql`
                query {
                    allArtwork {
                        edges {
                            node {
                                title
                                file
                                year
                                materials
                                dimensions
                                type
                            }
                        }
                    }
                }
            `
        }
        render={ data => 
            <Mapper 
                library={data.allArtwork.edges} 
                {...props}
            /> 
        }
    />
  )
}

export default Windows;