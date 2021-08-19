let shifts = [
    {
        id: 1,
        start: '2021-08-10 09:30:00',
        end: '2021-08-10 12:30:00',
        resourceId: 1,
        title: 'Support coordinator',
        extendedProps: {
            client: 'Marsha',
            status: 'published'
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
            client: 'Glen',
            status: 'finalised'
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
            client: '',
            status:'draft'
        },
        backgroundColor: '#ccddeb',
        borderColor: '#77a5ca',
        className:'moreBorder'
    }
];

export default shifts;

