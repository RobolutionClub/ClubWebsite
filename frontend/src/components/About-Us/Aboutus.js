import React, { useEffect, useState, useRef } from "react";
import "./Aboutus.css";
import bitpic from "../pics/download.jpg";
import Card from "./Card";
import { storage } from "../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Aboutus = (props) => {
  const host = "http://localhost:5000";
  const [data, setdata] = useState({ photo: "", year: "", post: "", name: "" });
  const initial = [];
  const [content, setcontent] = useState(initial);
  const [image, setimage] = useState("");
  const refClose = useRef();
  useEffect(() => {
    TheBoard();
  }, [content]);

  const HandleDelete = async (id) => {
    const request = fetch(`${host}/user/admin/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await request.json();
    const newdata = content.filter((x) => {
      return x._id !== id;
    });
    setcontent(newdata);
  };
  const TheBoard = async () => {
    const response = await fetch(`${host}/user/admin/getbod`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    setcontent(json);
  };

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleFile = (cob) => {
    if (cob.target.files && cob.target.files.length === 1) {
      setimage(cob.target.files[0]);
      console.log(cob.target.files[0]);

      // const pickedfile = cob.target.files[0];
      // let reader = new FileReader();
      // reader.onload = function () {
      // };
      // reader.readAsDataURL(pickedfile);
    }
  };

  const CreateUpload = (e) => {
    e.preventDefault();
    const storage = getStorage();
    const storageRef = ref(storage, `images/${image.name}`);
    uploadBytes(storageRef, image).then((snapshot) => {
      getDownloadURL(storageRef).then((url) => {
        setimage(url);
        console.log(url);
      });
    });
  };

  const handleClick = async (e) => {
    const response = await fetch(`${host}/user/admin/createbod`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        photo: image,
        post: data.post,
        year: data.year,
        name: data.name,
      }),
    });
    const json = await response.json();
    setcontent(content.concat(json));
    refClose.current.click();
  };

  return (
    <div className="center">
      {localStorage.getItem("token") ? (
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Members
        </button>
      ) : null}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add a member
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form>
              <div className="modal-body">
                <label htmlFor="name" className="form-label">
                  name
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="name"
                  id="name"
                  minLength={3}
                  required
                />
                <label htmlFor="post">Post/designation</label>
                <input
                  type="text"
                  name="post"
                  className="form-control"
                  id="post"
                  onChange={handleChange}
                  minLength={3}
                  required
                />
                <label htmlFor="year">Select the year</label>
                <input
                  type="number"
                  placeholder="YYYY"
                  name="year"
                  className="form-control"
                  id="year"
                  onChange={handleChange}
                  minLength={4}
                  required
                />
                <label htmlFor="post">Input file</label>
                <input
                  type="file"
                  onChange={handleFile}
                  accept=".jpg,.png,.jpeg"
                  name="photo"
                  className="form-control"
                  id="photo"
                  minLength={1}
                  required
                />
                <button onClick={CreateUpload}>Upload</button>
              </div>
            </form>
            <div className="modal-footer">
              <button
                type="button"
                ref={refClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  data.name.length < 3 ||
                  data.post.length < 3 ||
                  data.year.length < 4 ||
                  image === null
                }
                type="submit"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="aboutush1">About Us</h1>
      <div className="established">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga
        iusto, ad maiores, enim rem in mollitia sit quo, consectetur quam.
        Architecto accusantium cumque ullam veritatis repudiandae! Magni ad rem
        fugit corrupti illum harum! Cupiditate nulla ipsum sapiente rerum
        aliquid numquam accusantium temporibus, earum veniam assumenda adipisci
        perspiciatis minus corporis quod repellat dolorem autem? Incidunt
        dolorem inventore voluptatem ad voluptate ratione accusamus sequi.
        Totam, obcaecati officiis, iusto dolor ratione veniam porro consequatur
        modi qui voluptates numquam asperiores odio. Earum perspiciatis et
        fugiat nam architecto quibusdam nulla laboriosam quos. Ratione earum aut
        et unde. Optio dolores sint nulla culpa dolore temporibus veritatis
        voluptas et! Corporis, saepe! Est officia quod sunt? Saepe deserunt
        incidunt aliquam, ut, obcaecati dolorum at accusantium, a atque illum
        magni voluptatum porro nobis laborum dolor dolore non eligendi natus.
        Reiciendis laborum dolor possimus quisquam. Libero eos, suscipit ipsum
        deserunt sequi voluptatum. Expedita numquam quod officiis tempore
        nesciunt, adipisci, vero cupiditate odio voluptatum incidunt sunt eos,
        voluptatibus facilis. Eius id pariatur omnis nisi vero ducimus qui
        cupiditate sint accusamus non beatae assumenda molestiae sapiente
        tenetur illo odio, molestias cumque doloribus fugit odit quia fugiat ab
        quam. Modi aliquid ad, natus consectetur velit est harum omnis saepe
        iure odit ut?
      </div>

      <h2 className="aboutush2">Our Faculty</h2>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col ls">
            <img
              src="https://c8.alamy.com/comp/F65ND7/minions-year-2015-usa-director-kyle-balda-pierre-coffin-animation-F65ND7.jpg"
              alt=""
              width={"300px"}
            />
          </div>

          <div className="col">
            <img
              src="https://c8.alamy.com/comp/F65ND7/minions-year-2015-usa-director-kyle-balda-pierre-coffin-animation-F65ND7.jpg"
              alt=""
              width={"300px"}
            />
          </div>
        </div>
      </div>
      <h2 className="Bod-1">Our Board Over the years</h2>
      <center>
        <h3>2022-2023</h3>
      </center>
      <div className="row">
        {content.map((element) => {
          return (
            <>
              {element.year === "2022" ? (
                <Card
                  name={element.name}
                  post={element.post}
                  photo={element.photo}
                  year={element.year}
                />
              ) : (
                false
              )}
            </>
          );
        })}
      </div>
      <center>
        <h3>2021-2022</h3>
      </center>
      <div className="row">
        {content.map((element) => {
          return (
            <>
              {element.year === "2021" ? (
                <Card
                  name={element.name}
                  post={element.post}
                  photo={element.photo}
                  year={element.year}
                  Delete={HandleDelete}
                />
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Aboutus;
