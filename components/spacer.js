import React from 'react';
import styles from '../styles/Home.module.css'
import styled from 'styled-components';

const Space = styled.div`
    height: 200px;
    `

export default function Spacer() {
    return (
        <Space></Space>
    )
}