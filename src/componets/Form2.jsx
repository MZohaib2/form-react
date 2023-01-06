import React,{ useState }  from 'react'

function Form2(props) {

  
  const [studentArray, setStudentArray] = useState([]);

  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [PostalAddress, setPostalAddress] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  // Helper Functions

  function submitFormFunc() {
    setStudentArray([
      {
        FullName: FullName,
        Email:Email,
        CompanyName:CompanyName,
        PostalAddress: PostalAddress,
        Password:Password,
        ConfirmPassword:ConfirmPassword,
      }
    ]);

    console.log(studentArray);
  }



  return (
<>
<section>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-8 col-xl-6">
          <div class="row">
            <div class="col text-center title">
              {/* <h1>ABDUL KARIM</h1> */}
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mt-4">
              <input type="text" class="form-control" placeholder="Full Name" value={FullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                        }}/>
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col">
              <input type="email" class="form-control" placeholder="Email" value={Email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}/>
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col">
              <input type="text" class="form-control" placeholder="Company Name" value={CompanyName}
                        onChange={(e) => {
                          setCompanyName(e.target.value);
                        }}/>
            </div>
          </div>
                    <div class="row align-items-center mt-4">
            <div class="col">
              <input type="text" class="form-control" placeholder="Postal Address"   value={PostalAddress}
                        onChange={(e) => {
                          setPostalAddress(e.target.value);
                        }}/>
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col">
              <input type="password" class="form-control" placeholder="Password"  value={Password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}/>
            </div>
            <div class="col">
              <input type="password" class="form-control" placeholder="Confirm Password"  value={ConfirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}/>
            </div>
          </div>
          <div class="row justify-content-start mt-4">
            <div class="col">
              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input"/>
                  I hereby agree to abide by the <a href="/">Terms and Conditions.</a>
                </label>
              </div>

              <button  onClick={submitFormFunc} class="btn btn-primary mt-4">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</>
  );
}

export default Form2