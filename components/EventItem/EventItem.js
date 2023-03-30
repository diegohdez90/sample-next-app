import Image from 'next/image';

import classes from './EventItem.module.css';
import Button from '../Button';
import { MapPinIcon, CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const EventItem = (props) => {
    const readableDate = new Date(props.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAddress = props.location.replace(', ', '\n');

    const eventLink = `/events/${props.id}`
    return (<div>
        <div className={classes.card}>
            <Image src={props.image} alt="image-event-detail" width='100' height='100' />
            <div className={classes.container}>
                <h5>{props.title}</h5>
                <p>{props.description}</p>
                <p><MapPinIcon width={16} /> {formattedAddress}</p>
                <p><CalendarIcon width={16} /> {readableDate}</p>
                <Button href={eventLink} label="Event link" iconRight={<ArrowRightIcon width={16} />}>Event Link</Button>
            </div>
        </div>
    </div>);
}

export default EventItem;
