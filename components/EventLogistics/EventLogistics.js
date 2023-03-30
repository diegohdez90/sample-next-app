import Image from 'next/image';
import LogisticsItem from '../LogisticsItem';
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import classes from './EventLogistics.module.css';

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={props.image} alt="image-event-detail" width='100' height='100' />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={CalendarIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={MapPinIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
