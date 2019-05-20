import React from 'react'
import styled from '@emotion/styled'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/Layout/Layout'
import devFlowStrats from '../../data/dev-workflows'
import {
    WrapperDiv,
    BackDiv,
    H1Style,
    H2Style,
    IconSpan,
    ApproachDiv,
    ApproachSpan,
    AllTagsDiv,
    IncludesSpan,
    LiveSitesDiv,
    LiveSitesSpan,
} from '../fsjs'
import WFLiveSites from '../../components/WFLiveSites/WFLiveSites'

const WorkflowDiv = styled.div`
    & img {
        width: 100%;
    }
`

const DevWorkFlows = props => {
    return (
        <Layout>
            <WrapperDiv>
                <BackDiv>
                    <Link to="/services">&larr; back</Link>
                </BackDiv>
                <H1Style>
                    <IconSpan>{devFlowStrats.icon}</IconSpan>{' '}
                    {devFlowStrats.title}
                    <br />
                </H1Style>
                <WorkflowDiv>
                    <Img
                        fluid={props.data.cliImage.childImageSharp.fluid}
                        style={{marginBottom: '1.5rem'}}
                        alt={devFlowStrats.title}
                    />
                    <H2Style>{devFlowStrats.shortDescription}</H2Style>
                    <ApproachDiv>
                        <ApproachSpan>background:</ApproachSpan>{' '}
                        {devFlowStrats.background}
                    </ApproachDiv>
                    <ApproachDiv>
                        <ApproachSpan>approach:</ApproachSpan>{' '}
                        {devFlowStrats.approach}
                    </ApproachDiv>
                    <AllTagsDiv>
                        <IncludesSpan>includes:</IncludesSpan>{' '}
                        {devFlowStrats.tags} and more
                    </AllTagsDiv>
                    <LiveSitesSpan>sites:</LiveSitesSpan>
                    <br />
                    <LiveSitesDiv>
                        <WFLiveSites />
                    </LiveSitesDiv>
                </WorkflowDiv>
            </WrapperDiv>
        </Layout>
    )
}

export default DevWorkFlows

export const query = graphql`
    query workflowQuery {
        cliImage: file(
            relativePath: {eq: "martin-w-kirst-1175656-unsplash.jpg"}
        ) {
            childImageSharp {
                fluid(maxWidth: 1026) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
