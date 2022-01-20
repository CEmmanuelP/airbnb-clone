//초기 상태값 설정
const initialState = {
    hostHouse: "",
    hostRoom: "",
    hostRoomType: "",
    hostGuest: "",
    hostBed: "",
    hostBedRoom: "",
    hostRestRoom: "",
    hostAlone: "",
    hostName: "",
    hostCategory: "",
    hostCategory2: "",
    hostExplain: "",
    hostCost: "",
    hostAnimal: "",
    roomFacilities: [{ facility: "Bath" }, { facility: "ParkingLot" }],
    roomImages: [],
    roomLocation: [],
    roomSecurity: [{ securityObject: "CCTV" }, { securityObject: "KNIFE" }],
};

//리듀서 설정
const HostingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ROOM_INFO": {
            console.log(action.data);
            // console.log(state);
            return {
                ...state,
                hostHouse: action.data.hostHouse,
                hostRoom: action.data.hostRoom,
                hostRoomType: action.data.hostRoomType,
                hostGuest: action.data.hostGuest,
                hostBed: action.data.hostBed,
                hostBedRoom: action.data.hostBedRoom,
                hostRestRoom: action.data.hostRestRoom,

                // user: {
                //     ...state.user,
                //     name: action.data.name,
                // },
            };
        }
        case "ADVANCED_ROOM_INFO": {
            console.log(action.data);
            // console.log(state);
            return {
                ...state,
                hostAlone: action.data.hostAlone,
                hostName: action.data.hostName,
                hostCategory: action.data.hostCategory,
                hostCategory2: action.data.hostCategory2,
                hostExplain: action.data.hostExplain,
                hostCost: action.data.hostCost,
                hostAnimal: action.data.hostAnimal,
            };
        }
        case "LOCATION_DATA": {
            console.log(action.data);
            return {
                ...state,
                roomLocation: [
                    {
                        longitude: action.data.longitude,
                        latitude: action.data.latitude,
                        addressName: action.data.addressName,
                        buildingName: action.data.buildingName,
                        mainBuildingNo: action.data.mainBuildingNo,
                        regionDepthName1: action.data.regionDepthName1,
                        regionDepthName2: action.data.regionDepthName2,
                        regionDepthName3: action.data.regionDepthName3,
                        roadName: action.data.roadName,
                        subBuildingNo: action.data.subBuildingNo,
                        undergrounYn: action.data.undergrounYn,
                        zoneNo: action.data.zoneNo,
                    },
                ],
            };
        }

        default: {
            return {
                ...state,
            };
        }
    }
};

export default HostingReducer;
