import React from 'react'
import styled from '@emotion/styled'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/Layout/Layout'
import SEO from '../../components/Seo/Seo'
import gfd from '../../data/services/gfd'
import {
    WrapperDiv,
    BackDiv,
    H1Style,
    H2Style,
    ApproachDiv,
    ApproachIncludesSpan,
    ServiceDiv,
} from '../fsjs'

export const GFDTagsDiv = styled.div`
    color: rgb(148, 75, 43);
    margin-bottom: 3rem;
`

const GitForDevs = props => {
    const {data} = props
    const title = data.site.siteMetadata.title
    const keywords = data.site.siteMetadata.keywords
    return (
        <Layout>
            <SEO location={props.location} title={title} keywords={keywords} />
            <WrapperDiv>
                <BackDiv>
                    <Link
                        to="/services"
                        title={`go back to the main Services page`}
                    >
                        &larr; back
                    </Link>
                </BackDiv>
                <H1Style>{gfd.title}</H1Style>
                <ServiceDiv>
                    <Img
                        fluid={props.data.gitForDevsImage.childImageSharp.fluid}
                        style={{marginBottom: '1.5rem'}}
                        alt={gfd.title}
                    />
                    <H2Style>{gfd.shortDescription}</H2Style>
                    <ApproachDiv>
                        <ApproachIncludesSpan>background:</ApproachIncludesSpan>{' '}
                        {gfd.background}
                    </ApproachDiv>
                    <ApproachDiv>
                        <ApproachIncludesSpan>approach:</ApproachIncludesSpan>{' '}
                        {gfd.approach}
                    </ApproachDiv>
                    <GFDTagsDiv>
                        <ApproachIncludesSpan>includes:</ApproachIncludesSpan>{' '}
                        {gfd.tags} and more
                    </GFDTagsDiv>
                </ServiceDiv>
            </WrapperDiv>
        </Layout>
    )
}

export default GitForDevs

export const query = graphql`
    query gitForDevsQuery {
        gitForDevsImage: file(
            relativePath: {eq: "services/mimi-thian-737711-unsplash.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`
