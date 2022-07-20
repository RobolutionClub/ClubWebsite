import React,{useEffect,useState} from 'react'
import './Aboutus.css'
import bitpic from '../pics/download.jpg'
const Aboutus = () => {
  const host="http://localhost:5000";
  const [bodpic, setbodpic] = useState({photo:"",year:"",post:""})


  useEffect(() => {
    ThePicture()
  
  }, [])

  const ThePicture=async()=>{
    const response=await fetch(`${host}/user/login/createuser`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({photo:bodpic.photo,post:bodpic.photo,year:bodpic.year})


    })
    const json=await response.json()
    console.log(json)

  }

  const handleClick=()=>{
    
  }
  
  return (
    <div className='center'>

  
{localStorage.getItem('token')?<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>:null}


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    
    <h1 className='aboutush1'>
        About Us
    </h1>
    <div className='established'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga iusto, ad maiores, enim rem in mollitia sit quo, consectetur quam. Architecto accusantium cumque ullam veritatis repudiandae! Magni ad rem fugit corrupti illum harum! Cupiditate nulla ipsum sapiente rerum aliquid numquam accusantium temporibus, earum veniam assumenda adipisci perspiciatis minus corporis quod repellat dolorem autem? Incidunt dolorem inventore voluptatem ad voluptate ratione accusamus sequi. Totam, obcaecati officiis, iusto dolor ratione veniam porro consequatur modi qui voluptates numquam asperiores odio. Earum perspiciatis et fugiat nam architecto quibusdam nulla laboriosam quos. Ratione earum aut et unde. Optio dolores sint nulla culpa dolore temporibus veritatis voluptas et! Corporis, saepe! Est officia quod sunt? Saepe deserunt incidunt aliquam, ut, obcaecati dolorum at accusantium, a atque illum magni voluptatum porro nobis laborum dolor dolore non eligendi natus. Reiciendis laborum dolor possimus quisquam. Libero eos, suscipit ipsum deserunt sequi voluptatum. Expedita numquam quod officiis tempore nesciunt, adipisci, vero cupiditate odio voluptatum incidunt sunt eos, voluptatibus facilis. Eius id pariatur omnis nisi vero ducimus qui cupiditate sint accusamus non beatae assumenda molestiae sapiente tenetur illo odio, molestias cumque doloribus fugit odit quia fugiat ab quam. Modi aliquid ad, natus consectetur velit est harum omnis saepe iure odit ut?</div>

    <h2 className='aboutush2'>Our Faculty</h2>
    <div className="container text-center">
  <div className="row align-items-start">
    <div className="col ls">
     <img src="https://c8.alamy.com/comp/F65ND7/minions-year-2015-usa-director-kyle-balda-pierre-coffin-animation-F65ND7.jpg" alt="" width={"300px"}/>
    </div>
   
    <div className="col">
      <img src="https://c8.alamy.com/comp/F65ND7/minions-year-2015-usa-director-kyle-balda-pierre-coffin-animation-F65ND7.jpg" alt=""  width={"300px"} />
    </div>
  </div>
  </div>
  <h2 className='Bod-1'>Our Board Over the years</h2>
  <h3>2022-2023</h3>


    </div>
  )
}

export default Aboutus