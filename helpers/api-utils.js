export const getAll = async () => {
    const res = await fetch('https://nextjs-course-fc71e-default-rtdb.firebaseio.com/events.json');
    const data = await res.json();
    const events = []
    if(data) {
        for(let key in data) {
            events.push({
                id: key,
                ...data[key]
            });
        }
    }

    return events;
}

export const getFeatured = async () => {
    const events = await getAll();
    return events.filter((event) => event.isFeatured);
}

export const getById = async (id) => {
    const events = await getAll();
    return events.find(item => event.id === id);
}

export const getFilteredEvents = async (dateFilter) => {
    const events = await getAll();
    const { year, month } = dateFilter;
  
    let filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
}
