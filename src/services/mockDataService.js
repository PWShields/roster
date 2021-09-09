import staff from "../data/staff";
import shifts from "../data/shifts";
import participants from "../data/participants";
import staffSelect from "../data/staffSelect";
import roles from "../data/roles";
import locations from "../data/locations";
import doris from "../data/doris";
import harry from "../data/harry";
import jimmy from "../data/jimmy";

let MockDataService;

export default MockDataService = () => {


    const attendanceValues = [
        {label: "Attended", value: "ATT"},
        {label: "Did not attend", value: "MIS"},
        {label: "Cancelled", value: "CAN"},
    ];

    const appointmentTypes = [
        {label: "Free", value: "free"},
        {label: "Long", value: "long"},
        {label: "Short", value: "short"},
        {label: "Special", value: "special"},
        {label: "Standard", value: "standard"},
        {label: '', value: ''}
    ];

    const billableValues = [
        {label: "Yes", value: "1"},
        {label: "No", value: "0"},
        {label: "", value: ""},
    ];

    const privacyValues = [
        {label: "Yes", value: "1"},
        {label: "No", value: "0"},
    ];

    const convertValueToLabel = (items, value) => {
        const match = items.find(function (item) {
            return item.value.indexOf(value) > -1;
        })
        return match.label;
    }

    const convertLabelToValue = (items, label) => {
        const match = items.find(function (item) {
            return item.label.indexOf(label) > -1;
        })
        return match.value;
    }

    const filterStaff = (filterValue) => {
        let filteredStaff = staff;
        if(filterValue !== ""){
            if(filterValue === "Doris Day"){
                filteredStaff = doris;
            } else if (filterValue === "Harry Belafonte"){
                filteredStaff = harry;
            } else if (filterValue === "Jimmy Durante"){
                filteredStaff = jimmy;
            }
        }
        return filteredStaff;
    }
    const filterRole = (filterValue) => {
        let filteredRole = roles;
        if (filterValue !== ""){
            filteredRole = roles.find(function (role){
                return
            })
        }
    }

    return {
        attendanceValues, billableValues, privacyValues, convertValueToLabel, convertLabelToValue,
        locations, roles, staffSelect, participants, shifts, filterStaff, appointmentTypes
    };
};
