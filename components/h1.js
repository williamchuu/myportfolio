import React from 'react';
import styles from '../styles/Home.module.css'
import styled from 'styled-components';

const Heading = styled.h1`
    font-size: 1.5rem;
    color: #F1F6F6;
    width: 100%;
    padding-top: 120px;
    `

export default function H1({ title }) {
    return (
        <Heading>{title}</Heading>
    )
}