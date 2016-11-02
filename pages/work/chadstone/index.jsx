import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Macbook from 'components/macbook';
import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/chadstone.jpg';

const images = [
  {
    src: require('./img/dining.jpg'),
    description: 'Chadstone dining',
  },
  {
    src: require('./img/home.jpg'),
    description: 'Chadstone home',
  },
  {
    src: require('./img/services.jpg'),
    description: 'Chadstone services',
  },
  {
    src: require('./img/store.jpg'),
    description: 'Chadstone store',
  },
  {
    src: require('./img/whats-on.jpg'),
    description: 'Chadstone what\'s on',
  },
];

export default class Chadstone extends Component {
  render() {
    const project = projects.find(_project => _project.slug === 'chadstone');

    const image = (
      <img src={coverImage} alt="Cover" />
    );

    return (
      <ProjectPage project={project}>
        <ProjectIntro project={project} media={image} />
        <ProjectDescription>
          <h3>Project</h3>
          <p>Soon to be unveiling the mall's new shopping, dining & entertainment precincts, Chadstone was keen to revisit their online presence and website in line with the new development. <a href="http://inlight.com.au" target="_blank" rel="noopener noreferrer">Inlight</a> was tasked with building a new website that offered information on stores, entertainment, events and an intuitive mapping solution.</p>

          <h3>Role</h3>
          <p>I was part of a development team that helped produce a solution using React + Redux over the space of a few months. I was responsible for building components and UI in the build, including a Google Maps integration that helped user's get to and from the shopping mall.</p>
        </ProjectDescription>
        <Wrapper>
          <Macbook>
            <Carousel images={images}/>
          </Macbook>
        </Wrapper>
      </ProjectPage>
    );
  }
}
