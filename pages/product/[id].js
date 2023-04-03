const ProductDetail = (props) => {
    return (<div>
        <h1>Detail</h1>
    </div>)
}

export function getStaticProps(context) {
    const {params} = context;
    console.log('params', params);

    /*
        if (!response.data) {
            return {
                notFound: true
            }
        }

        if (!response.data) {
            return {
                destination: '/not-found'
            }
        }

    */
    return {
        props: {
            product: {
                name: 'Apple'
            }
        }
    }
}

export async function getStaticPaths() {

    // const data = getData();
    // const ids = data.products.map(product => product.id);
    // const objs = ids.map(id => { params: { id: id } });


    return {
        paths: [
          { params: { id: '1' } },
        ],
        // paths: objs,
        // fallback: true,
        // fallback: 'blocking'
        fallback: false,
      }
  }

export default ProductDetail;
