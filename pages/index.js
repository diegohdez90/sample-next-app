import { useRouter } from 'next/router';
import Head from 'next/head';
import EventList from "../components/EventList";
import EventSearch from "../components/EventSearch";
import { getAll } from '../helpers/api-utils';


export default function Home(props) {

  const router = useRouter();
  const { events } = props;
  const onFilter = (year, month) => {
    router.push(`/events/${year}/${month}`)
  }

  return (
    <div>
        <Head>
          <title>Next JS Event Project</title>
          <meta name='description' content='Great events you can attend'></meta>
        </Head>
        <h1>Home Page</h1>
        <EventSearch onSearch={onFilter} />
        <EventList events={events} />
    </div>
  )

}

export async function getStaticProps() {
  const events = await getAll()

  return {
    props: {
      events: events
    },
    revalidate: 60
  }
}