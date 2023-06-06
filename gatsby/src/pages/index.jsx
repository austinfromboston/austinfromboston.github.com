import { css } from '@emotion/core'
import { graphql } from 'gatsby'
import { Parser } from 'html-to-react'
import React from 'react'
import Layout from '../components/Layout'

const container = css`
  margin: 0 auto;
  padding: 4rem 2rem 8rem 2rem;
  max-width: 600px;
  color: #333333;

  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  h2 {
    margin-top: 2rem;
    font-size: 12px;
    font-weight: 600;
    color: #c9cccf;
    text-transform: uppercase;
    letter-spacing: 1.2px;
  }

  h3 {
    font-size: 12px;
    font-weight: 600;
    color: #c9cccf;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 0.25rem;
  }

  strong {
    color: #c9cccf;
    font-weight: 700;
  }

  a {
    transition: box-shadow 160ms ease 0s;
    box-shadow: rgb(238, 251, 255) 0px -9px 0px inset;
    border-bottom: 2px solid rgb(207, 243, 255);
    text-decoration: none;
    color: #323336;
    &:hover {
      box-shadow: rgb(207, 243, 255) 0px -1.2em 0px inset;
    }
  }

  .section ul {
    margin-top: 0.5rem;
    margin-left: 2.5rem;
    list-style: disc;
  }

  .section li {
    margin-bottom: 0.2rem;
  }

  .grey {
    color: #96999b;
  }

  .headline {
    display: block;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 1.2px;
    padding-top: 1rem;
  }

  .skills ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .skills li {
    margin-bottom: 1rem;
    margin-right: 0.5rem;
    padding: 0.25rem 1rem;
    background-color: #f1f5f7;
    white-space: nowrap;
  }
`

const bullets = (count) => {
  return (
  <React.Fragment>
    <span dangerouslySetInnerHTML={{__html: '&bullet;'.repeat(count)}}/>
    {count < 5 && <span className="grey" dangerouslySetInnerHTML={{__html: '&bullet;'.repeat(5-count)}}/>}
  </React.Fragment>);
}

export default props => {

  return (
    <Layout>
      <div css={container}>
        <h1>Austin Putman</h1>
        <div className="headline">Software Engineering Leader</div>
        <div className="description">
          <strong>I support teams that transform products and organizations.</strong>
          <ul>
            <li>As a leader and collaborator, I embrace honest dialog to achieve great results.</li>

            <li>As an agile professional, I prioritize delivering immediate value for the project.</li>

            <li>As a dedicated artisan, I find opportunities to delight and clarify with my work.</li>
          </ul>
          
        </div>
        <div className="section">
          <h2>Experience</h2>
          <div className="headline">Geometer.io, Team Member, 2020-present</div>
          <div className="location">San Francisco</div>
          <ul>
            <li>Built HIPAA-compliant infrastructure in AWS using CloudFormation for processing COVID-19 related case data</li>
            <li>Created AWS Lambda data pipeline for ingesting positive COVID test results to contact tracing case management</li>
            <li>Worked on multiple codebases for scaling up WebRTC connections in Elixir</li>
            <li>Set up GCP infrastructure on Kubernetes for multiple teams</li>
          </ul>
          <div className="headline">Omada Health, Staff Software Engineer, 2016-2020</div>
          <div className="location">San Francisco</div>
          <ul>
            <li>Built Data Engine for Sales Team to Demo Product</li>
            <li>Sped up CI run time from 45 minutes to 10 minutes</li>
            <li>Transitioned our core product to Docker and Nomad</li> 
            <li>Built team to handle biometric data processing for multiple vendors</li>
            <li>Rebuilt legacy forums in React/Redux</li>
            <li>Created system for verifying permission checks are tested on all api calls</li>
            <li>Worked with IT to centralize user roles in Okta for organization</li>
          </ul>
          <div className="headline">Hillary For America, Senior Software Engineer, 2015-2016</div>
          <div className="location">Brooklyn</div>
          <ul>
            <li>Manage transition of petascale databases to AWS</li>
            <li>Create and manage APIs for voter outreach</li>
            <li>Create and maintain projects in Node, Flask, Django, Wordpress and Airflow</li> 
          </ul>
          <div className="headline">Omada Health, VP Engineering, 2012-2015</div>          
          <div className="location">San Francisco</div>
          <ul>
            <li>Recruit and train a startup team focused on rapid delivery and user value</li>
            <li>Evaluate and hire vendors to support our in-house team</li>
            <li>Promote our work and our people in the wider technical community</li>
            <li>Code when necessary to support business goals</li>
            <li>Work with leaders from across the organization to create a supportive, effective workplace</li>
          </ul>
          <div className="headline">Pivotal Labs, Senior Software Engineer, 2010-2012</div>
          <div className="location">San Francisco</div>
          <ul>
            <li>Build and retool web applications for clients.</li>
            <li>Train and collaborate with client staff on building products and exploring new technologies.</li>
            <li>Rapidly learn unfamiliar platforms and technologies.</li>
            <li>Anchor projects and handle most communication between clients and Pivotal staff.</li>
            <li>Introduce agile processes to client project management staff and developers.</li>
            <li>Support process changes to address pain points in the development cycle.</li>
          </ul>
          <div className="headline">Radical Designs, Lead Developer, 2004-2010</div>
          <div className="location">San Francisco</div>
         
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li>APIs {bullets(5)}</li>
            <li>AWS {bullets(3)}</li>
            <li>Bash {bullets(4)}</li>
            <li>Docker {bullets(4)}</li>
            <li>Elixir {bullets(3)}</li>
            <li>GCP {bullets(3)}</li>
            <li>Git {bullets(4)}</li>
            <li>Go {bullets(1)}</li>
            <li>Jenkins {bullets(5)}</li>
            <li>Node {bullets(3)}</li>
            <li>Python {bullets(2)}</li>
            <li>Rails {bullets(5)}</li>
            <li>React {bullets(4)}</li>
            <li>Testing {bullets(5)}</li>
          </ul>
        </div>
        <h2>Contact</h2>
        <ul>
          <div>( 5️⃣1️⃣0️⃣) 4️⃣7️⃣3️⃣&mdash; 7️⃣6️⃣3️⃣6️⃣</div>
          <div>austin＠moonlight.rodeo</div>
        </ul>
      </div>
    </Layout>
  )
}

