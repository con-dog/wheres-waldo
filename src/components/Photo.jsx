/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import Waldo from './waldo.jpg';

export default function Photo() {
  const Image = styled.img`
    width: 90%;
    height: 90%;
    object-fit: cover;
  `;

  return (
    <div>
      <Image src={Waldo} alt="Waldo" />
    </div>
  );
}
