import React from 'react';
import styles from '../styles/Home.module.css'
import styled from 'styled-components';

const Heading = styled.h1`
    font-size: 2rem;
    color: white;
    width: 100%;
    padding-top: 120px;
    `

export default function H1({ title }) {
    return (
        <Heading>{title}</Heading>
    )
}