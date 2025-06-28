import React, { useReducer, useState } from "react";
import { gigReducer, INITIAL_STATE } from "../utils/gigReducer";
// import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";
import "../styles/Add.css";

const COVER_OPTIONS = [
  {
    name: "Creative Workspace",
    url: "https://images.pexels.com/photos/34140/pexels-photo.jpg",
  },
  {
    name: "Team Collaboration",
    url: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
  },
  {
    name: "Modern Office",
    url: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg",
  },
  {
    name: "Freelancer Desk",
    url: "https://images.pexels.com/photos/5077393/pexels-photo-5077393.jpeg",
  },
];

const Add = () => {
  // const [singleFile, setSingleFile] = useState(undefined);
  // const [files, setFiles] = useState([]);
  // const [uploading, setUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg(""); // Clear previous errors

    // Required fields validation
    const requiredFields = [
      { key: "title", label: "Title" },
      { key: "cat", label: "Category" },
      { key: "cover", label: "Cover Image" },
      { key: "desc", label: "Description" },
      { key: "shortTitle", label: "Service Title" },
      { key: "shortDesc", label: "Short Description" },
      { key: "deliveryTime", label: "Delivery Time" },
      { key: "revisionNumber", label: "Revision Number" },
      { key: "price", label: "Price" },
    ];

    const missing = requiredFields.filter(
      (field) =>
        state[field.key] === "" ||
        state[field.key] === 0 ||
        state[field.key] === undefined
    );

    if (missing.length > 0) {
      setErrorMsg(
        `Please fill in the following required fields: ${missing
          .map((f) => f.label)
          .join(", ")}`
      );
      return;
    }

    mutation.mutate(state);
    // navigate("/mygigs")
  };

  const [state, dispatch] = useReducer(gigReducer, {
    ...INITIAL_STATE,
    cover: COVER_OPTIONS[1].url,
  });

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleCoverChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: "cover", value: e.target.value },
    });
  };

  // const handleFeature = (e) => {
  //   e.preventDefault();
  //   dispatch({
  //     type: "ADD_FEATURE",
  //     payload: e.target[0].value,
  //   });
  //   e.target[0].value = "";
  // };

  // const handleUpload = async () => {
  //   setUploading(true);
  //   try {
  //     const cover = await upload(singleFile);

  //     const images = await Promise.all(
  //       [...files].map(async (file) => {
  //         const url = await upload(file);
  //         return url;
  //       })
  //     );
  //     setUploading(false);
  //     dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   mutation.mutate(state);
  //   // navigate("/mygigs")
  // };

  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        {errorMsg && (
          <div
            className="addError"
            style={{
              background: "#ffeaea",
              color: "#b00020",
              border: "1px solid #ffb3b3",
              padding: "14px 18px",
              marginBottom: "18px",
              borderRadius: "6px",
              textAlign: "center",
              fontSize: "1rem",
            }}
          >
            {errorMsg}
          </div>
        )}

        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange}
            />
            <label htmlFor="">Category</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="AI-Powered Website">AI-Powered Website</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">
                Mobile App Development
              </option>
            </select>
            <label htmlFor="">Cover Image</label>
            <select
              name="cover"
              value={state.cover}
              onChange={handleCoverChange}
            >
              {COVER_OPTIONS.map((option, idx) => (
                <option value={option.url} key={idx}>
                  {option.name}
                </option>
              ))}
            </select>
            {/* <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Cover Image</label>
                <input
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor="">Upload Images</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? "uploading" : "Upload"}
              </button>
            </div> */}
            <label htmlFor="">Description</label>
            <textarea
              name="desc"
              id=""
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="details">
            <label htmlFor="">Service Title</label>
            <input
              type="text"
              name="shortTitle"
              placeholder="e.g. One-page web design"
              onChange={handleChange}
            />
            <label htmlFor="">Short Description</label>
            <textarea
              name="shortDesc"
              onChange={handleChange}
              id=""
              placeholder="Short description of your service"
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" name="deliveryTime" onChange={handleChange} />
            <label htmlFor="">Revision Number</label>
            <input
              type="number"
              name="revisionNumber"
              onChange={handleChange}
            />
            <label htmlFor="">Price</label>
            <input type="number" onChange={handleChange} name="price" />
          </div>
        </div>
        <button className="createButton" onClick={handleSubmit}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Add;
