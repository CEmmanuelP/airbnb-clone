export const getRoomInfoAction = (data) => {
    return {
        type: "ROOM_INFO",
        data,
    };
};

export const getAdvancedRoomInfoAction = (data) => {
    return {
        type: "ADVANCED_ROOM_INFO",
        data,
    };
};

export const getLocationDataAction = (data) => {
    return {
        type: "LOCATION_DATA",
        data,
    };
};

// export const getImageURLAction = (data) => {
//     return {
//         type: "IMAGE_URL",
//         data,
//     };
// };
