const DUMMY_EVENTS = [
    // Existing events...
    {
      id: 'e1',
      title: 'Programming for everyone',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/coding-event.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Networking for introverts',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-30',
      image: 'images/introvert-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Networking for extroverts',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      image: 'images/extrovert-event.jpg',
      isFeatured: true,
    },
    // Additional events...
    {
      id: 'e4',
      title: 'Web Development Workshop',
      description:
        'Join our hands-on workshop and learn the latest web development technologies. Suitable for beginners and experienced developers alike.',
      location: 'Tech Avenue 8, 54321 Code City',
      date: '2022-06-25',
      image: 'images/web-dev-event.jpg',
      isFeatured: false,
    },
    {
      id: 'e5',
      title: 'Data Science Summit',
      description:
        'Explore the world of data science with industry experts. Dive into discussions on data analysis, machine learning, and emerging trends.',
      location: 'Data Street 15, 56789 Analytics Town',
      date: '2022-07-18',
      image: 'images/data-science-event.jpg',
      isFeatured: true,
    },
    // Additional events...
    {
      id: 'e6',
      title: 'Mobile App Development Crash Course',
      description:
        'Learn the essentials of mobile app development in this crash course. Build your first app and kickstart your mobile development journey.',
      location: 'App Street 3, 43210 Mobile City',
      date: '2022-08-05',
      image: 'images/mobile-app-event.jpg',
      isFeatured: false,
    },
    {
      id: 'e7',
      title: 'Startup Pitch Day',
      description:
        'Entrepreneurs and startup enthusiasts gather for a pitch day. Listen to innovative ideas, connect with founders, and explore collaboration opportunities.',
      location: 'Innovation Hub 7, 87654 Startup Valley',
      date: '2022-09-20',
      image: 'images/startup-pitch-event.jpg',
      isFeatured: true,
    },
    // Continue adding more events...
  ];
  
  // Repeat the above structure to create a total of 20 items in the DUMMY_EVENTS array.
  
  
  export function getFeaturedEvents() {
    console.log("HELLO")
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
debugger
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() == year && eventDate.getMonth() == month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }