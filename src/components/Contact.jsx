import React, {useRef} from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser'

const Contact = () => {
  const {
    register,
    formState: { errors },
  } = useForm();



  const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_quqlqqg', 'template_e5bdahn', form.current, 'VnuebFE-RHbLGu1qE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

  return (
      <>
          <form ref={form} onSubmit={sendEmail} className="contact_form">
              <div className="first_row">
                  <input {...register("name", {required: true})}
                         type="text"
                         placeholder="Name *"
                         name="user_name"
                  />

                  {errors.name && errors.name.type === "required" && (
                      <span className="invalid-feedback">Name is required</span>
                  )}
              </div>
              <div className="second">
                  <div className="left">
                      <input
                          {...register(
                              "email",
                              {
                                  required: "Email is Required",
                                  pattern: {
                                      value: /\S+@\S+\.\S+/,
                                      message: "Entered value does not match email format",
                                  },
                              },
                              {required: true}
                          )
                          }
                          type="email"
                          placeholder="Email *"
                          name="user_email"
                      />
                      {errors.email && (
                          <span className="invalid-feedback">{errors.email.message}</span>
                      )}
                  </div>
              <div className="right">
                  <input
                      {...register("subject", { required: true })}
                      placeholder="Subject *"
                      name="subject"
                  />
                  {errors.subject && (
                      <span className="invalid-feedback">Subject is required.</span>
                  )}
              </div>
              </div>
              <div className="third">
              <textarea
                  {...register("message", {required: true})}
                  placeholder="Message *"
                  name="message"
              ></textarea>
                  {errors.message && (
                      <span className="invalid-feedback">Message is required.</span>
                  )}
              </div>
              <div className="beny_tm_button">
                  <button type="submit" className="color" value="Send">
                    <span className="wrapper">
                      <span className="first">Submit</span>
                      <span className="second">Submit</span>
                    </span>
                  </button>
              </div>
          </form>
      </>
  );
};

export default Contact;
