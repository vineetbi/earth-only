import React from "react";
import { useFormik, Field, FormikProvider } from "formik";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signUpSchema } from "./schemas";
import { ROLE_OPTIONS, COUNTRY_OPTIONS, LANGUAGE_OPTIONS } from "./options";
import { auth } from "./firebase-config";
import "./App.css";

// Image imports
const design = "assets/design.png";
const design2 = "assets/design-2.png";
const deploy = "assets/deploy.png";
const logo = "assets/herokulogo.png";
const hexagon = "assets/hexagon.png";
const salesforce = "assets/salesforce.png";
const user = "assets/user.png";

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      companyName: "",
      role: "",
      country: "",
      language: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      try{
        await createUserWithEmailAndPassword(
          auth,
          formik.values.email,
          formik.values.password
        );
      }
      catch(error){
        console.log(error.message)
      }
      action.resetForm();
    },
  });


  return (
    <>
      <img
        className="block inset-x-0 absolute w-9/12 mx-auto -z-10"
        src={design}
        alt=""
      />
      <div className="bg-white" style={{ fontSize: "11px", padding: "7.1px 24px" }}>
        <img
          className="w-4 inline-block mr-3 -translate-y-px"
          src={salesforce}
          alt="icon"
        />
        Salesforce Developers / Heroku
      </div>
      <div className="wrapper px-5">
        <div className="signup-page mx-auto" style={{ maxWidth: "800px" }}>
          <div className="flex items-center justify-between header-main py-5">
            <a href="http://https://www.heroku.com/home">
              <img style={{ width: "150px" }} src={logo} alt="logo" />
            </a>
            <div className="header-login text-white text-sm">
              <span className="mr-3 text-sm">Already have an account?</span>
              <a
                className="py-2 px-3"
                style={{ backgroundColor: "rgba(0,0,0,0.3)", fontSize: "13px" }}
                href="https://id.heroku.com/login"
              >
                Log in
              </a>
            </div>
          </div>
          <h1 className="pt-7 pb-10 text-center text-3xl text-white">
            Get started on Heroku today
          </h1>
          <div className="p-5 rounded signup-content relative flex">
            <img
              className="absolute top-0 left-0 rounded w-100"
              src={design2}
              alt=""
            />
            <div className="benefits-wrapper z-10 relative p-10 w-8/12">
              <div className="benefit">
                <div className="flex gap-4 text-2xl items-center benefit-header mb-3">
                  <img className="block w-6 mt-1" src={user} alt="user" />
                  <span className="tracking-wider">Heroku account</span>
                </div>
                <p className="mb-8 text-sm">
                  Create apps, connect databases and add-on services, and
                  collaborate on your apps.
                </p>
              </div>
              <hr />
              <div className="benefit">
                <div className="flex gap-4 text-2xl items-center benefit-header mb-3">
                  <img className="block w-6 mt-1" src={hexagon} alt="hexagon" />
                  <span className="tracking-wider">Your app platform</span>
                </div>
                <p className="mb-8 text-sm">
                  A platform for apps, with app management & instant scaling,
                  for development and production.
                </p>
              </div>
              <hr />
              <div className="benefit">
                <div className="flex gap-4 text-2xl items-center benefit-header mb-3">
                  <img className="block w-6 mt-1" src={deploy} alt="user" />
                  <span className="tracking-wider">Deploy now</span>
                </div>
                <p className="mb-8 text-sm">
                  Go from code to running app in minutes. Deploy, scale, and
                  deliver your app to the world.
                </p>
              </div>
            </div>
            <div className="signup z-10 relative bg-white p-8 rounded shadow-lg border border-slate-200 border-solid">
              <div className="form-wrapper">
                <FormikProvider value={formik}>
                  <form
                    className="signup-form"
                    style={{ fontSize: "13px" }}
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="mb-4">
                      <label className="block pb-1" htmlFor="firstName">
                        First name<sup className="text-red-500">*</sup>
                      </label>
                      <Field
                        type="name"
                        id="firstName"
                        placeholder="First name"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full rounded p-2 border border-slate-400 border-solid block"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block pb-1" htmlFor="lastName">
                        Last name<sup className="text-red-500">*</sup>
                      </label>
                      <Field
                        type="name"
                        id="lastName"
                        placeholder="Last name"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full rounded p-2 border border-slate-400 border-solid block"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block pb-1" htmlFor="email">
                        Email address<sup className="text-red-500">*</sup>
                      </label>
                      <Field
                        type="email"
                        id="email"
                        placeholder="Email address"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full rounded p-2 border border-slate-400 border-solid block"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block pb-1" htmlFor="password">
                        Password<sup className="text-red-500">*</sup>
                      </label>
                      <Field
                        type="password"
                        id="password"
                        placeholder="Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full rounded p-2 border border-slate-400 border-solid block"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block pb-1" htmlFor="companyName">
                        Company name
                      </label>
                      <Field
                        type="name"
                        id="companyName"
                        placeholder="Company name"
                        name="companyName"
                        value={formik.values.companyName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full rounded p-2 border border-slate-400 border-solid block"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block pb-1" htmlFor="role">
                        Role<sup className="text-red-500">*</sup>
                      </label>
                      <Field
                        as="select"
                        id="role"
                        name="role"
                        value={formik.values.role}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full rounded p-2 border border-slate-400 border-solid block"
                      >
                        <option value="">Role</option>
                        {ROLE_OPTIONS.map((option) => (
                          <option key={option.id} value={option.name}>
                            {option.name}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <div className="mb-4">
                      <label className="block pb-1" htmlFor="country">
                        Country/Region<sup className="text-red-500">*</sup>
                      </label>
                      <Field
                        as="select"
                        id="country"
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full rounded p-2 border border-slate-400 border-solid block"
                      >
                        <option value="">Country/Region</option>
                        {COUNTRY_OPTIONS.map((option) => (
                          <option key={option.id} value={option.name}>
                            {option.name}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <div className="mb-4">
                      <label className="block pb-1" htmlFor="language">
                        Primary development language
                        <sup className="text-red-500">*</sup>
                      </label>
                      <Field
                        as="select"
                        id="language"
                        name="language"
                        value={formik.values.language}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full rounded p-2 border border-slate-400 border-solid block"
                      >
                        <option value="">Select a language</option>
                        {LANGUAGE_OPTIONS.map((option) => (
                          <option key={option.id} value={option.name}>
                            {option.name}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <div className="mb-4">
                      <button
                        className="block w-full p-4 rounded-md text-white font-bold"
                        type="submit"
                        style={{ backgroundColor: "#0650aa" }}
                      >
                        CREATE AN ACCOUNT
                      </button>
                    </div>
                    <div>
                      Signing up signifies that you have read and agree to the{" "}
                      <a className="underline text-blue-500" href="http://">
                        Terms of Service
                      </a>{" "}
                      and our{" "}
                      <a className="underline text-blue-500" href="http://">
                        Privacy Policy.
                      </a>{" "}
                      <a className="underline text-blue-500" href="http://">
                        Cookie Preferences.
                      </a>
                    </div>
                  </form>
                </FormikProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
