import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

const App = () => {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    userName:"",
    email: "",
    password:""
  });

  const [formData1, setFormData1] = useState({
    userName:"",
    password:""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleChange1 = (e) => {
    const { id, value } = e.target;
    setFormData1((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming formData is already defined and populated
    console.log(formData);

    // // Redirect to the /Player endpoint
    // navigate("/Player", { state: { formData } });
};

const handleSubmit1 = (e) => {
  e.preventDefault();

  // Assuming formData is already defined and populated
  console.log(formData1);

  // // Redirect to the /Player endpoint
  // navigate("/Player", { state: { formData } });
};

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane open={justifyActive === 'tab1'}>

          <form onSubmit={handleSubmit1}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Username' id='userName' type='text' value={formData1.userName} onChange={handleChange1}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' value={formData1.password} onChange={handleChange1}/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" type='submit'>Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>
          </form>

        </MDBTabsPane>

        <MDBTabsPane open={justifyActive === 'tab2'}>
          <form onSubmit={handleSubmit}>

          <div className="text-center mb-3">
            <p>Sign un with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' className='form-control' label='Full Name' id='fullName' type='text' value={formData.fullName} onChange={handleChange}/>
          <MDBInput wrapperClass='mb-4' label='Username' id='userName' type='text' value={formData.userName} onChange={handleChange}/>
          <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' value={formData.email} onChange={handleChange}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' value={formData.password} onChange={handleChange}/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100" type='submit'>Sign up</MDBBtn>
          </form>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default App;