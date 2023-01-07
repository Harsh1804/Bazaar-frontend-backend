import React from 'react'

const Contact = () => {
  return (
    <div>
          <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div class="app-contact">CONTACT INFO : +91 999 5555 999</div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                <form name="submit-to-google-sheet">
                  <div class="app-form-group">
                    <input type="text" class="app-form-control" name="name" placeholder="Name" required></input>
                    <input type="email" class="app-form-control" name="Email" placeholder="Enter Your Email" required></input>
                    <input type="number" class="app-form-control" name="number" placeholder="Contact No" required></input>
                    <input type="text" class="app-form-control" name="message" placeholder="Message" required></input>
                    <div class="button-container">
                        <button class="app-form-button">Submit</button></div>
                  </div>
                </form>
                
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
