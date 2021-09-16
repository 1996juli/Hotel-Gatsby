import { graphql, useStaticQuery } from 'gatsby';

const useContenidoInicio = () => {

    const informacion = useStaticQuery(graphql`
        query {
            allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
                nodes {
                    titulo
                    contenido
                    imagen {
                        gatsbyImageData
                    }
                }
            }
        }
    `);

    return informacion.allDatoCmsPagina.nodes[0];
}
 
export default useContenidoInicio;