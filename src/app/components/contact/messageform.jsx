"use client";
import React from "react";
import { useForm } from "react-hook-form";

const MessageForm = () => {
  // use form methods
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="dark:text-white text-black mx-2 lg:mx-0">
      <h1 className="text-3xl text-center font-[600]">Send us Message</h1>
      <p className="dark:text-grey-small  text-center my-2 lg:my-0">
        We we'll get back to you within 24 hours
      </p>

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-80 lg:w-5/12 mx-auto my-4"
      >
        <div className="w-full flex items-center justify-between gap-2 lg:gap-10  flex-wrap lg:flex-nowrap ">
          {/* first name */}
          <div className="flex flex-col gap-1 my-2 w-full lg:w-6/12">
            <p className="text-sm dark:text-grey-small">First name</p>
            <div className="border p-1 rounded-md">
              <input
                type="text"
                {...register("firstName", {
                  required: "First name is required!",
                  minLength: {
                    value: 2,
                    message: "Minimum length will be 2",
                  },
                  pattern: {
                    value: /^[A-Z][a-z]*$/,
                    message: "First latter must be upper case",
                  },
                })}
                placeholder="Akwa"
                id=""
                className="outline-none flex-1 bg-none bg-transparent px-2 dark:text-grey-small text-sm "
              />
            </div>
            {/* Error message */}
            <div className="my-2">
              <p className="text-xs text-red-500 ">
                {errors.firstName?.message}
              </p>
            </div>
          </div>
          {/* last name */}
          <div className="flex flex-col gap-1 my-2 w-full  lg:w-6/12">
            <p className="text-sm dark:text-grey-small">Last name</p>
            <div className="border p-1 rounded-md">
              <input
                type="text"
                placeholder="Bail"
                {...register("lastName", {
                  required: "Last name is required!",
                  minLength: {
                    value: 2,
                    message: "Minimum length will be 2",
                  },
                  pattern: {
                    value: /^[A-Z][a-z]*$/,
                    message: "First latter must be upper case",
                  },
                })}
                id=""
                className="outline-none bg-transparent flex-1 bg-none px-2 dark:text-grey-small text-sm"
              />
            </div>
            {/* Error message */}
            <div className="my-2">
              <p className="text-xs text-red-500 ">
                {errors.lastName?.message}
              </p>
            </div>
          </div>
        </div>

        {/* email section */}
        <div className="flex flex-col gap-1 my-2 w-full ">
          <p className="text-sm dark:text-grey-small">Email</p>
          <div className="border p-1 rounded-md">
            <input
              type="text"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email!",
                },
              })}
              id=""
              placeholder="ali@gmail.com"
              className="outline-none flex-1 w-full bg-none bg-transparent px-2 dark:text-grey-small text-sm "
            />
          </div>
          {/* Error message */}
          <div className="my-2">
            <p className="text-xs text-red-500 ">{errors.email?.message}</p>
          </div>
        </div>
        {/* phone number */}
        <div className="flex flex-col gap-1 my-2 w-full ">
          <p className="text-sm dark:text-grey-small">Phone</p>
          <div className="border p-1 rounded-md">
            <input
              type="number"
              min={0}
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 12,
                  message: "Minimum length will be 12",
                },
                maxLength: {
                  value: 13,
                  message: "Text exceed limit",
                },
                min: {
                  value: 0,
                  message: "No negative number allowed",
                },
              })}
              id=""
              placeholder="98899949499"
              className="outline-none flex-1 w-full bg-none bg-transparent px-2 dark:text-grey-small text-sm "
            />
          </div>
          {/* Error message */}
          <div className="my-2">
            <p className="text-xs text-red-500 ">{errors.phone?.message}</p>
          </div>
        </div>
        {/* message */}
        <div className="flex flex-col gap-1 my-2 w-full ">
          <p className="text-sm dark:text-grey-small">Message</p>
          <div className="border p-1 rounded-md h-20">
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              placeholder="This is exceptional webiste"
              className="w-full bg-transparent outline-none h-full dark:text-grey-small text-sm px-2"
            ></textarea>
          </div>

          {/* Error message */}
          <div className="my-2">
            <p className="text-xs text-red-500 ">
              {errors.description?.message}
            </p>
          </div>
        </div>
        {/* services */}
        <div className="flex flex-col gap-1 my-2 w-full ">
          <p className="text-sm dark:text-grey-small">Services</p>
          <div className="flex flex-wrap gap-4 lg:gap-8">
            {/* left side */}
            <div className="flex flex-col gap-1">
              <div className="text-sm dark:text-grey-small flex items-center gap-3">
                <input
                  type="checkbox"
                  className="bg-transparent h-4 w-4 rounded-md"
                  name=""
                  id=""
                />
                <p>Website design</p>
              </div>
              <div className="text-sm dark:text-grey-small flex items-center gap-3">
                <input
                  type="checkbox"
                  className="bg-transparent h-4 w-4 rounded-md"
                  name=""
                  id=""
                />
                <p>UI design</p>
              </div>
              <div className="text-sm dark:text-grey-small flex items-center gap-3">
                <input
                  type="checkbox"
                  className="bg-transparent h-4 w-4 rounded-md"
                  name=""
                  id=""
                />
                <p>User research</p>
              </div>
            </div>
            {/* right side */}
            <div className="flex flex-col gap-1">
              <div className="text-sm dark:text-grey-small flex items-center gap-3">
                <input
                  type="checkbox"
                  className="bg-transparent h-4 w-4 rounded-md"
                  name=""
                  id=""
                />
                <p>Content creation</p>
              </div>
              <div className="text-sm dark:text-grey-small flex items-center gap-3">
                <input
                  type="checkbox"
                  className="bg-transparent h-4 w-4 rounded-md"
                  name=""
                  id=""
                />
                <p>Strategy and Consulting</p>
              </div>
              <div className="text-sm dark:text-grey-small flex items-center gap-3">
                <input
                  type="checkbox"
                  className="bg-transparent h-4 w-4 rounded-md"
                  name=""
                  id=""
                />
                <p>Other</p>
              </div>
            </div>
          </div>
        </div>
        {/* send message */}
        <input
          type="submit"
          value="Send Message"
          className="font-[600] bg-violet-900 w-full p-2 rounded-md my-2 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default MessageForm;
