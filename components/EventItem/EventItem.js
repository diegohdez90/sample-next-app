import Image from 'next/image';
import Link from 'next/link';

const EventItem = (props) => {
    const readableDate = new Date(props.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAddress = props.location.replace(', ', '\n');

    const eventLink = `/events/${props.id}`
    return (<div>
        <h4>Event Item</h4>
        <div>
            <h5>{props.title}</h5>
            <Image src={props.image} alt="image-event-detail" width='100' height='100'
             />
            <p>{props.description}</p>
            <p>{formattedAddress}</p>
            <p>{readableDate}</p>
            <Link href={eventLink}>Event Link</Link>
        </div>
    </div>);
}

export default EventItem;
