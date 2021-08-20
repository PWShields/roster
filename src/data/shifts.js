let shifts = [
    {
        id: 1,
        start: '2021-08-10 09:30:00',
        end: '2021-08-10 12:30:00',
        resourceIds: [1, 3],
        title: 'Support coordinator',
        extendedProps: {
            client: {
                name:'Marsha',
                image: 'MarshaRound.png'
            },
            status: 'published',
            bookingNote: "Marsha likes going on picnics and watching TV.",
            paid: 'true'
        },
        backgroundColor: '#f2e2dc',
        borderColor: '#d9aa99',
        className:'moreBorder'
    },
    {
        id: 2,
        start: '2021-08-12 09:30:00',
        end: '2021-08-12 17:30:00',
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
        backgroundColor: '#ffd599',
        borderColor: '#ffb347',
        className:'moreBorder'
    },
    {
        id: 3,
        start: '2021-08-16',
        end: '2021-08-21',
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
        backgroundColor: '#ccddeb',
        borderColor: '#77a5ca',
        className:'moreBorder'
    }
];

export default shifts;

