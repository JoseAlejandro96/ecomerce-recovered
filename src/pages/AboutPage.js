import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title={'about'}/>
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="nice desk"/>
      <article>
        <div className="title">
          <h2>our story</h2>
          <div className="underline"></div>
        </div>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, totam?
          Animi soluta adipisci totam tenetur mollitia pariatur inventore et provident delectus
          ea possimus, veritatis aliquam. Aspernatur pariatur nemo fugiat debitis maxime totam maiores,
          beatae illo, cupiditate temporibus sit commodi architecto. Ab nemo quae laboriosam exercitationem
          reiciendis eveniet quos commodi nobis! </p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
