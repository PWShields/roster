import colours from "../style/colours";

let gregShifts = [
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
    }
];

export default gregShifts;

