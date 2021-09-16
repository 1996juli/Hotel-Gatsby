import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import useContenidoInicio from '../hooks/use-contentInicio';

const TextoInicio = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr) ;
        column-gap: 2rem;
    }

    p {
        line-height: 2;
        
    }
`;

const ContenidoInicio = () => {

    const informacion = useContenidoInicio();

    //console.log(informacion);

    const { titulo, contenido, imagen } = informacion;

    return ( 
        <>
            <h2
                css={css`
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 4rem;
                `}
            >{titulo}</h2>

            <TextoInicio>
                <p>{contenido}</p>
                <GatsbyImage image={imagen.gatsbyImageData} alt="inicio" />
            </TextoInicio>

        </>
     );
}
 
export default ContenidoInicio;