import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';


function ConatctForm() {
    const [formData, setFormData] = useState({firstName : '',lastName : '',email : '',phoneNumber : '',country : '',about : ''})
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/addData',{
                method : 'post',
                headers : {'Contect-Type' : 'application/json'},
                body : JSON.stringify(formData)
            });

            if(response === 200){
                console.log("Data has been added successfully");
            }
        }catch(error){
            console.log("error adding data to mongo",error);
        }
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="mb-4">Conatct User</h2>
                    <Form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor='firstName' className='form-label'>First Name</label>
                            <input type="text" id="firstName" className='form-control' placeholder="Enter First Name" onChange={handleChange} value={formData.firstName} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor='lastName' className='form-label'>Last Name</label>
                            <input type="text" id="lastName" className='form-control' placeholder="Enter Last Name" onChange={handleChange} value={formData.lastName}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor='email' className='form-label'>Email</label>
                            <input type="email" id="email" className='form-control' placeholder="Enter Email" onChange={handleChange} value={formData.email}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor='country' className='form-label'>Country</label>
                            <input type="text" id="country" className='form-control' placeholder="Enter Country Name" onChange={handleChange} value={formData.country}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor='phoneNumber' className='form-label'>phone Number</label>
                            <input type="number" id="phoneNumber" className='form-control' placeholder="Enter phone Number" onChange={handleChange} value={formData.phoneNumber}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor='about' className='form-label'>About Me</label>
                            <textarea className="form-control" id="about" rows="4" placeholder="Enter About Me" onChange={handleChange} value={formData.about}/>
                        </div>
                        <button type='submit' className='btn btn-success m-3'>Submit</button> 
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default ConatctForm;