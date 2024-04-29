import React from 'react'


const Login = () => {
  return (
    <>
      <section className="h-full ">
        <div className="container h-full p-10">
          <div
            className="g-6 flex h-full flex-wrap items-center justify-center">
            <div className="w-full">
              <div
                className="block rounded-lg ">
                <div className="lg:flex lg:flex-wrap">
                  {/* <!-- Left column container--> */}
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      {/* <!--Logo--> */}
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="/Images/logo.png"
                          alt="logo" />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          Welcome To Nepal</h4>
                      </div>

                      <form>
                        <p className="mb-4">Please login to your account</p>
                        {/* <!--Username input--> */}
                        <div className="relative space-y-2 mb-4 flex-col flex">
                          <label className="">Username  </label>


                          <input type="text" className=" border border-5 " placeholder="Username" required />

                        </div>

                        {/* <!--Password input--> */}
                        <div className="relative space-y-2 flex-col flex mb-4" d>
                          <label

                          >Password
                          </label>
                          <input
                            type="password" className='border border-5' name='password' required


                            placeholder="Password" />

                        </div>

                        {/* <!--Submit button--> */}
                        <div className="mb-12 pb-1 flex space-y-4  flex-col pt-1 text-center">
                          <button className='btn bg-blue-500 rounded-md '>
                            Log in
                          </button>
                          {/* 
                          <!--Forgot password link--> */}
                          <a href="#!" className='text-green-700'>Forgot password?</a>
                        </div>

                        {/* <!--Register button--> */}
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="inline-block  rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 bg-green-700 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* <!-- Right column container with background and description--> */}
                  <div
                    className="flex bg-slate-500 items-center rounded-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
                     
                    
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <img src='Images/cd.jpg' alt='wallpaper'/>
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login