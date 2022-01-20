import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const Post = (props) => {
    const address = props.address;
    const setAddress = props.setAddress;

    const onCompletePost = (data) => {
        console.log(data);
        console.log(data.address);
        setAddress(data);
    };

    const postCodeStyle = {
        display: "block",
        width: "400px",
        height: "220px",
        zIndex: 100,
    };

    return (
        <>
            <DaumPostcode
                style={postCodeStyle}
                autoClose
                onComplete={onCompletePost}
            />
        </>
    );
};

export default Post;
