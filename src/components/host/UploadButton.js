import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyCustomButton from "./MyCustomButton";
import getFirebase from "./firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const UploadButton = ({ number, setImageUrlArray }) => {
  const firebase = getFirebase();
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef) {
      inputRef.current.click();
    }
  };

  const handleUpload = async (event) => {
    if (!firebase) return;

    const uploadedFile = event?.target.files[0];
    if (!uploadedFile) return;

    const storage = getStorage(firebase);

    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: "image/jpeg",
    };

    const storageRef = ref(storage, "images/" + uploadedFile.name);
    const uploadTask = uploadBytesResumable(storageRef, uploadedFile, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImageUrlArray((urls) => [...urls, { image: downloadURL }]);
          toast(`Upload is done!`, {
            position: "top-right",
            closeOnClick: true,
            autoClose: 1000,
          });
        });
      }
    );

    // try {
    //     // await storageRef.child(uploadedFile.name).put(uploadedFile);
    //     await uploadBytes(storageRef, uploadedFile).then((snapshot) => {
    //         alert("Successfully uploaded picture!");
    //     });
    //     alert("Successfully uploaded picture!");
    // } catch (error) {
    //     console.log("error", error);
    // }
  };

  return (
    <div>
      <MyCustomButton number={number} onClick={() => handleClick()} />
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        hidden
        ref={inputRef}
        onChange={handleUpload}
      />
      <ToastContainer />
    </div>
  );
};

export default UploadButton;
