import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import useImagenHotel from '../hooks/use-imagenHotel';

const ImageBackground = styled(BackgroundImage)`
    height: 700px;
`;

const TextoImagen = styled.div`
    background-image: linear-gradient( to top, rgba(34,49,63,.8),rgba(34,49,63,.8)  );
    color: #FFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 4rem;
        margin: 0%;

        @media (min-width: 992px){
            font-size: 5.8rem;
        }
    }
    p {
        font-size: 2rem;
        @media (min-width: 992px){
            font-size: 2.6rem;
        }
    }
`;

const ImagenHotel = () => {

    const imagen = useImagenHotel();

    return ( 
        <ImageBackground tag="section" fluid={imagen} fadeIn="soft" >
            <TextoImagen>
                <h1>Bienvenido a Hotel Gatsby</h1>
                <p>El mejor hotel para tus vacaciones</p>
            </TextoImagen>
        </ImageBackground>
    );
}
 
export default ImagenHotel;