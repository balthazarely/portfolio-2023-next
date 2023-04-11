import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type UserSubmitForm = {
  fullname: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    message: Yup.string()
      .required("message is required")
      .min(6, "message must be at least 6 characters")
      .max(20, "message must not exceed 500 characters"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            {...register("fullname")}
            className={`form-control ${errors.fullname ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.fullname?.message}</div>
        </div>

        <div className="form-group">
          <label>message</label>
          <input
            type="text"
            {...register("message")}
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.message?.message}</div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn-primary btn">
            Register
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="btn-warning btn float-right"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
