import axios from "axios";
import { useState } from "react";

import { toast } from "react-toastify";

const useUploadImg = () => {
  //
  //------------- state -------------
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const [selectedImg, setSelectedImg] = useState({
    selectedImage: null, // to store selected file
    Url: null, // to store uploaded image path
  });

  //------------- handlers -------------
  const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];
  // handle change event of input file
  const onChangeFile = (event) => {
    if (!validFileTypes.find((type) => type === event.target.files[0].type)) {
      //   toast("Password did not match .Please try again");
      setError("File must be in JPJ/PNG format");
      return;
    }
    setSelectedImg({ ...selectedImg, selectedImage: event.target.files[0] });
    console.log(selectedImg);
  };

  const fetchImg = () => {
    const formData = new FormData();
    formData.append(
      "image",
      selectedImg.selectedImage,
      selectedImg.selectedImage.name
    );
    console.log(formData);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=22f6ba619a312e327a46dce3c0563cef",
        formData
      )
      .then((response) => {
        console.log(response);
        console.log(response.data.data.display_url);
        setSelectedImg({
          ...selectedImg,
          Url: response.data.data.display_url,
        });

        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        alert(err.message);
        setError(err);
      });
  };

  // handle click event of the upload button
  const handleUpload = (event) => {
    // const { selectedFile } = this.state;
    setSelectedImg(selectedImg);

    event.preventDefault();
    console.log(selectedImg);
    if (!selectedImg.selectedImage) {
      setError("You need to choose image first");
      console.log(error);
      return false;
    }
    setIsLoading(true);
    setError(null);
    
    fetchImg();
  };

  return {
    selectedImg,
    setSelectedImg,
    onChangeFile,
    handleUpload,
    isLoading,
    error,
  };
};

export default useUploadImg;
