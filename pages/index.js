import { useRouter } from 'next/router';
import { getFeaturedEvents, getFilteredEvents } from "../data";
import EventList from "../components/EventList";
import EventSearch from "../components/EventSearch";


export default function Home(props) {

  const featureEvents =  getFeaturedEvents();

  const router = useRouter();

  const onFilter = (year, month) => {
    router.push(`/events/${year}/${month}`)
  }

  return (
    <div>
        <h1>Home Page</h1>
        <EventSearch onSearch={onFilter} />
        <EventList events={featureEvents} />
        {props.products.map((product, index) => (
          <div key={index}>
            {product.title}
          </div>
        ))}
    </div>
  )

}


export async function getStaticProps() {  
  return { props: {
    products: [{
      id: 1,
      title: "Product 1"
    }],
    // revalidate: 10
  }}
}