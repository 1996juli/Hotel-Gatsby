import { graphql, useStaticQuery } from 'gatsby';

const useImagenHotel = () => {

    const {image} = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq:"8.jpg" } ) {
            sharp:childImageSharp {
                fluid {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
            }
        }
    `);

    return image.sharp.fluid;
}
 
export default useImagenHotel;

