import colours from "../style/colours";

let shifts = [
    {
        id: 1,
        start: '2021-09-10 09:30:00',
        end: '2021-09-10 12:30:00',
        resourceIds: [1, 3],
        title: 'Support coordinator',
        extendedProps: {
            client: {
                name:'Marcia',
                image: 'MarciaRound.png'
            },
            status: 'published',
            bookingNote: "Marsha likes going on picnics and watching TV.",
            paid: 'true'
        },
        backgroundColor: colours.completed,
        borderColor: colours.completed_border,
        className:'moreBorder'
    },
    {
        id: 2,
        start: '2021-09-14 09:30:00',
        end: '2021-09-14 17:30:00',
        resourceId: 2,
        title: 'Personal Care',
        extendedProps: {
            client: {
                name:'Greg',
                image: 'GregRound.png'
            },
            status: 'finalised',
            bookingNote: "Greg is very boisterous and needs a lot of attention."
        },
        backgroundColor: colours.cancelled,
        borderColor: colours.cancelled_border,
        className:'moreBorder'
    },
    {
        id: 3,
        start: '2021-09-16',
        end: '2021-09-21',
        resourceId: 3,
        title: 'Leave',
        extendedProps: {
            client: {
                name:'',
                image: 'TropicalRound.png'
            },
            status:'draft',
            bookingNote: "Have an awesome time."
        },
        backgroundColor: colours.booked,
        borderColor: colours.booked_border,
        className:'moreBorder'
    }
];

export default shifts;

