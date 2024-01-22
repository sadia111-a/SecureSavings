import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import Lottie from "lottie-react";
import signUpImage from "../../public/image/signUp-svg.json";
import toast from "react-hot-toast";

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();

  const { createUser, updateUserProfile, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data, "form submitted");
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          reset();
          // Swal.fire({
          //   position: "top-end",
          //   icon: "success",
          //   title: "User created successfully",
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success("Your Email is successfully logIn");
        navigate("/dashboard/home");
      })
      .catch((error) => {
        toast.error("Failed");
        console.error(error);
      });
  };
  return (
    // <div className="flex flex-col md:flex-row justify-center items-center lg:h-screen mb-14 mt-14">
    //   {/* Left Side: SignUp Card */}
    //   <Card className="w-full md:w-96 mb-6 md:mb-0 mx-4">
    //     <CardHeader
    //       variant="gradient"
    //       color="gray"
    //       className="mb-4 grid h-28 place-items-center"
    //     >
    //       <Typography variant="h3" color="white">
    //         Sign Up
    //       </Typography>
    //     </CardHeader>
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <CardBody className="flex flex-col gap-4">
    //         <Input label="Name" size="lg" {...register("name")} required />
    //         <Input label="Image" size="lg" {...register("image")} required />
    //         <Input label="Email" size="lg" {...register("email")} required />
    //         <Input
    //           label="Password"
    //           size="lg"
    //           {...register("password", {
    //             minLength: 6,
    //             maxLength: 20,
    //             pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
    //           })}
    //           required
    //         />
    //         <div className="-ml-2.5">
    //           <Checkbox label="Remember Me" />
    //         </div>
    //       </CardBody>
    //       <CardFooter className="pt-0">
    //         <Button variant="gradient" fullWidth type="submit">
    //           Sign Up
    //         </Button>
    //         <Typography variant="small" className="mt-6 flex justify-center">
    //           Already have an account?
    //           <Typography
    //             as="a"
    //             href="/login"
    //             variant="small"
    //             color="blue-gray"
    //             className="ml-1 font-bold"
    //           >
    //             Login
    //           </Typography>
    //         </Typography>
    //       </CardFooter>
    //       <div className="flex items-center  space-x-1">
    //         <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
    //         <p className="px-3 text-sm dark:text-gray-400">
    //           Signup with social accounts
    //         </p>
    //         <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
    //       </div>
    //       <SocialLogin></SocialLogin>
    //     </form>
    //   </Card>

    //   {/* Right Side: Image */}
    //   <div className="w-full md:w-1/2 mb-6 md:mb-0">
    //     <img
    //       src="https://i.ibb.co/QJWk2dd/money-transfer-663-256.gif"
    //       alt="Right Side Image"
    //       className="w-full h-full object-cover"
    //     />
    //   </div>
    // </div>
    <>
      {/* <section className="background-radial-gradient mb-40 overflow-hidden">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n  ",
          }}
        />

        <div className="px-6 py-12 text-center md:px-12 lg:py-24 lg:text-left">
          <div className="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0" style={{ zIndex: 10 }}>
                <h1 className="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                  Unlock the Best <br />
                  <span className="text-[hsl(218,81%,75%)]">
                    Banking Experience
                  </span>
                </h1>
                <p className="opacity-70 text-[hsl(218,81%,85%)]">
                  Welcome to Secure-Savings, where we empower you to achieve
                  your financial goals. Join us on a journey of financial
                  well-being, designed with you in mind. At Secure-Savings, we
                  believe in transparency, security, and personalized
                  service.Explore a world of possibilities with Secure-Savings.
                  From saving for your dreams to handling daily expenses, we are
                  here to support you at every turn.
                </p>
              </div>
              <div className="relative mb-12 lg:mb-0">
                <div
                  id="radius-shape-1"
                  className="absolute rounded-full shadow-lg"
                />
                <div id="radius-shape-2" className="absolute shadow-lg" />
                <div className="relative bg-[hsla(0,0%,100%,0.9)] backdrop-blur-[25px] backdrop-saturate-[200%] block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,15%,0.9)] dark:shadow-black/20 md:px-12">
                  <form>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 md:gap-6 mb-6">
                        <Input color="teal" label="First Name" />
                        <Input color="teal" label="Last Name" />
                      </div>
                      <Input className="mb-6" color="teal" label="Email" />

                      <Input className="mb-6" color="teal" label="Password" />
                    </div>

                    <div className="flex items-center mt-2">
                      <Checkbox color="green" defaultChecked />
                      <label
                        className="inline-block hover:cursor-pointer dark:text-neutral-50"
                        htmlFor="flexCheckChecked"
                      >
                        Remember Me
                      </label>
                    </div>
                    <Button className="my-2" color="green" fullWidth>
                      SIGN UP
                    </Button>
                    <div className="text-center">
                      <h2 className="py-3">
                        Already have an account?
                        <Link className="underline ml-3" to={"/login"}>
                          Sign In
                        </Link>
                      </h2>
                      <p className="mb-6 dark:text-neutral-50">
                        or sign up with:
                      </p>
                    </div>
                    <SocialLogin />
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="flex flex-col justify-center items-center font-[sans-serif] bg-gradient-to-r from-blue-800 to-blue-500 text-[#333] lg:h-screen">
        <div className="grid lg:grid-cols-2 items-center gap-y-8 h-[100svh] w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div className="max-md:order-1 flex flex-col justify-center sm:p-6 p-4  w-full h-full space-y-16">
            <Lottie animationData={signUpImage} />
          </div>
          <div className="lg:rounded-tl-[55px] lg:rounded-bl-[55px] h-full bg-white py-6">
            <form className="md:px-16 pt-6 px-6 w-full my-auto">
              <div className="mb-4">
                <h3 className="text-blue-500 text-3xl font-extrabold max-md:text-center">
                  Register
                </h3>
                <p className="text-sm mt-8">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="text-blue-500 font-semibold hover:underline ml-1"
                  >
                    Login here
                  </Link>
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-y-7 gap-x-7">
                <div>
                  <label className="text-sm mb-2 block">First Name</label>
                  <input
                    name="name"
                    type="text"
                    className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block">Last Name</label>
                  <input
                    name="lname"
                    type="text"
                    className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder="Enter last name"
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block">Email Id</label>
                  <input
                    name="email"
                    type="text"
                    className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block">Mobile No.</label>
                  <input
                    name="number"
                    type="number"
                    className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder="Enter mobile number"
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder="Enter password"
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block">Confirm Password</label>
                  <input
                    name="cpassword"
                    type="password"
                    className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder="Enter confirm password"
                  />
                </div>
              </div>
              <div className="flex items-center mt-8">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 rounded"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  I accept the{" "}
                  <a
                    href="javascript:void(0);"
                    className="text-blue-500 font-semibold hover:underline ml-1"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <div className="mt-10">
                <button
                  type="button"
                  className="min-w-[150px] py-3 px-4 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all"
                >
                  Sign up
                </button>
              </div>
            </form>
            <p className="mb-8 text-sm text-gray-800 text-center">
              or continue with
            </p>
            <div className="space-x-8 flex justify-center">
              <Button
                onClick={handleGoogleLogin}
                type="button"
                color="white"
                className="border-none outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  className="inline"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    data-original="#fbbd00"
                  />
                  <path
                    fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    data-original="#0f9d58"
                  />
                  <path
                    fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    data-original="#31aa52"
                  />
                  <path
                    fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    data-original="#3c79e6"
                  />
                  <path
                    fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                    data-original="#cf2d48"
                  />
                  <path
                    fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                    data-original="#eb4132"
                  />
                </svg>
              </Button>
              <Button
                type="button"
                color="white"
                onClick={() =>
                  toast.error(
                    `Currently Apple Login isn't Available. Please Try with other options`
                  )
                }
                className="border-none outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  fill="#000"
                  viewBox="0 0 22.773 22.773"
                >
                  <path
                    d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                    data-original="#000000"
                  />
                </svg>
              </Button>
              <Button
                onClick={() =>
                  toast.error(
                    `Currently FaceBook Login isn't Available. Please Try with other options`
                  )
                }
                type="button"
                color="white"
                className="border-none outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  fill="#007bff"
                  viewBox="0 0 167.657 167.657"
                >
                  <path
                    d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z"
                    data-original="#010002"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
