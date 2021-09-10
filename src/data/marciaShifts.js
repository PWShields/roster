import colours from "../style/colours";

let marciaShifts = [
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

];

export default marciaShifts;

