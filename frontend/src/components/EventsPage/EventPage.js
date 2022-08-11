import React ,{useEffect,useState,useRef} from 'react'
import './EventPage.css'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { Loader } from './Loader';
import Events from './Events'
const EventPage = () => {
  const host="http://localhost:5000"
  const initial=[]
  const [data, setdata] = useState({name:"",image:"",description:""})
  const [image, setimage] = useState("")
  const [content, setcontent] = useState(initial);
  const refClose=useRef()
  const [loading, setloading] = useState(false)
  useEffect(() => {
    TheData()
  
    
  }, [content])

  const handleChange=(e)=>{
    
    setdata({...data,[e.target.name]:e.target.value})

  }

  const handleFile=(e)=>{
    if(e.target.files && e.target.files.length===1){
      setimage(e.target.files[0])
      console.log(e.target.files[0]);
      
    }

   
  }

  const CreateUpload=(e)=>{
    e.preventDefault()
    const storage = getStorage();
    const storageRef = ref(storage, `events/${image.name}`);
    setloading(true)
    uploadBytes(storageRef, image).then((snapshot) => {
     
      getDownloadURL(storageRef).then((url) => {
        setimage(url);
        console.log(url);
        setloading(false)
      });
    });



  }
  const HandleDelete=async(id)=>{
    const response= await  fetch(`${host}/events/deleteevent/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type": "application/json",
      }
    })
    await response.json()
    const sort=content.filter((e)=>{
      return e._id !==id

      
    })
    setcontent(sort)
  }
  const handleClick = async (e) => {
    const response = await fetch(`${host}/events/addevent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: image,
        description:data.description,
        name: data.name,
      }),
    });
    const json = await response.json();
    setcontent(content.concat(json))
    refClose.current.click();
  };

  const TheData=async()=>{
    const response=await fetch(`${host}/events/allevents`,{
      method:'GET',

      headers:{
        "Content-Type": "application/json",
      },
    

    })
    const json=await response.json()
    // console.log(json)
 

    setcontent(json)

  }

  return (
    <>
    <h1>Events</h1>
    {localStorage.getItem("token") ? (
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Events
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
                Add a Event
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
                  Event name
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
                <label htmlFor="post">Event description</label>
                <textarea
                  
                  name="description"
                  className="form-control"
                  id="description"
                  onChange={handleChange}
                  minLength={3}
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
                <div>
                <button onClick={CreateUpload}>Upload</button>
                <Loader isloading={loading} />

                </div>
                

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
               
                type="submit"
                className="btn btn-primary"
                onClick={handleClick}
                disabled={loading===true || image.length===0 || data.description.length <5 || data.name.length <2}

               
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
        </div>
      

    <div>
      <div className='for-background'>

   { content.map((e)=>{
    // return( <Events name={e.name} image={e.image} description={e.description} key={e._id} deleteevent={HandleDelete}/>)
    return( <Events data={e} deleteevent={HandleDelete} key={e._id}/>)


   
     
    })}
    </div>
    
    </div>
    
    </>
  )
}

export default EventPage