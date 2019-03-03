import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import ImageClassification from "../components/image/Classification"
import {Version} from "../labellab-components"
const contents = [
  {
    type: "image",
    items: [
      {
        type: "classification",
        geometry: [
          "none",
          "box",
          "polygon"
        ]
      }
    ]
  }
]
const SideNav = styled.div`
  border-right: 1px solid lightgrey;
  height: 100%;
  padding-top: 15px;

  @media (max-width: 986px) {
    display: none;
  }
`
const MainContent = styled.div`
  margin-left: 15px;
  paddingTop: 15px;
  flex: 1;

  @media (max-width: 986px) {
    margin-left: 0;
    padding: 0;
  }
`
const blue = "#007bff"
class Home extends Component {
  render() {
    return <div>
      <nav className="navbar navbar-dark" style={{backgroundColor: blue}}>
        <a  className="navbar-brand" href="/">
          <img
            alt="labellab-logo"
            style={{width: "40px", height: "40px"}}
            src="https://d1d09e79yja1m6.cloudfront.net/annotation-web/build/static/media/logo-over-dark.72869e75.png"/>
          <span style={{marginLeft: "10px", verticalAlign: "middle"}}>
            Labellab Developer Components
          </span>
        </a>
        <div style={{color: "white"}}>Version {Version}</div>
      </nav>
      <div className="container-fluid" style={{borderLeft: "1px solid lightgrey", borderRight: "1px solid lightgrey"}}>
        <div style={{display: "flex", flexDirection: "row", paddingLeft: "15px", paddingRight: "15px"}}>
          <div style={{paddingRight: 0, width: "300px"}}>
            <SideNav>
              <h4>Components</h4>
              {
                contents.map((content, idx) => {
                  return <div key={idx} style={{ textTransform: 'capitalize'}}>
                    <a className="btn btn-link text-muted" href={`#${content.type}`}>
                      File: { content.type }
                    </a>
                    <div style={{paddingLeft: "15px"}}>
                      {
                        content.items.map((comp, i) => {
                          return <div key={i}>
                            <a className="btn btn-link text-muted" href={`#${content.type}-${comp.type}`}>
                              Label: { comp.type }
                            </a>
                            <div style={{paddingLeft: "15px"}}>
                              {
                                comp.geometry.map((geometry, ii)=> {
                                  return <div key={ii}>
                                    <a className="btn btn-link text-muted" href={`#${content.type}-${comp.type}-${geometry}`} >
                                      Geometry: { geometry }
                                    </a>
                                  </div>
                                })
                              }
                            </div>
                          </div>
                        })
                      }
                    </div>
                  </div>
                })
              }
          </SideNav>
          </div>
          <MainContent className="container-fluid">
            <button className="btn btn-link danger">Reject</button>
            <div id="image">
              <ImageClassification/>
            </div>
          </MainContent>
        </div>
      </div>
    </div>
  }

}

const mapStateToProps = (state, props) => {
  return {}
}

export default connect(mapStateToProps, {
})(Home);
