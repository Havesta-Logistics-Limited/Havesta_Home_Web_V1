import { banks, places } from "./riders.data";
export const riderForm = [
  {
    title: "First Name",
    placeholder: "Firstname",
    options: false,
    type: "text",
    name: "firstname",
    required: true,
  },
  {
    title: "Last Name",
    placeholder: "lastname",
    options: false,
    type: "text",
    name: "lastname",
    required: true,
  },
  {
    title: "Email Address",
    placeholder: "example@mail.com",
    options: false,
    type: "email",
    name: "email",
    required: true,
    error_identifier: "email"
  },
  {
    title: "Phone Number",
    placeholder: "Phone Number",
    // options: true,
    type: "number",
    phoneNumber: true,
    name: "phone_number",
    pattern: "d{11}",
    max: "99999999",
    id: "phone_number",
    required: true,
  },

  // {
  //   title: "Date of Birth",
  //   placeholder: "dfg",
  //   type: "date",
  //   name: "date_of_birth",
  //   error_identifier: "Date"
  // },

  // {
  //   title: "Gender",
  //   placeholder: "Choose gender",
  //   options: true,
  //   subItems: ["Male", "Female", "Non-binary"],
  //   phoneNumber: false,
  //   name: "gender",
  // },
  // {
  //   title: "Country",
  //   // placeholder: "Choose your country",
  //   options: false,
  //   subItems: ["Nigeria"],
  //   name: "country",
  //   constant: true,
  // },
  // {
  //   title: "State",
  //   // placeholder: "Choose your state",
  //   options: false,
  //   subItems: ["Lagos"],
  //   name: "state",
  //   constant: true,
  // },
  // {
  //   title: "Method of Delivery",
  //   placeholder: "eg Car",
  //   options: true,
  //   subItems: ["Bike", "Van", "Bicycle"],
  //   type: "text",
  //   name: "method_of_delivery",
  // },
  // {
  //   title: "Where are you located",
  //   placeholder: "Kosofe",
  //   options: true,
  //   type: "text",
  //   name: "location",
  //   subItems: [...places],
  // },
  // {
  //   title: "Are you currently working with another Logistics Company?",
  //   placeholder: "No",
  //   options: true,
  //   subItems: ["Yes", "No"],
  //   name: "currently_working_with_another_logistics",
  // },
  // {
  //   title: "National Identification Number (NIN)",
  //   placeholder: "",
  //   options: false,
  //   name: "NIN",
  // },
  // {
  //   title: "Bank Name",
  //   placeholder: "Bank",
  //   options: true,
  //   subItems: [...banks],
  //   name: "bank_name",
  // },
  // {
  //   title: "Bank Account Number",
  //   placeholder: "Account Number",
  //   options: false,
  //   name: "account_number",
  //   type: "number",
  //   pattern: "d{11}",
  //   maxLength: 11,
  // },
  // {
  //   title: "Guarantor Name 1",
  //   placeholder: "",
  //   options: false,
  //   name: "guarantor_1_name",
  // },
  // {
  //   title: "Guarantor's Phone Number",
  //   placeholder: "",
  //   // options: true,
  //   phoneNumber: true,
  //   name: "guarantor_1_phone_number",
  //   type: "number",
  //   pattern: "d{11}",
  //   maxLength: 11,
  // },
  // {
  //   title: "Guarantor Name 2",
  //   placeholder: "",
  //   options: false,
  //   name: "guarantor_2_name",
  // },
  // {
  //   title: "Guarantor's Phone Number",
  //   placeholder: "",
  //   // options: true,
  //   phoneNumber: true,
  //   name: "guarantor_2_phone_number",
  //   type: "number",
  //   pattern: "d{11}",
  //   maxLength: 11,
  // },
];

export const riderStats = [
  {
    image:
      "https://res.cloudinary.com/dtc89xi2r/image/upload/v1719608684/Group_1000001834_byyhlb.svg",
    text: "Accept Delivery Orders at your convenience. ",
  },
  {
    image:
      "https://res.cloudinary.com/dtc89xi2r/image/upload/v1719608634/Group_1000001831_htqrtr.svg",
    text: "Manage your Rides and Income with our management platform",
  },
  {
    image:
      "https://res.cloudinary.com/dtc89xi2r/image/upload/v1719608633/Group_1000001832_yjdatb.svg",
    text: "Grow your income Daily, Weekly, or Montly with Harvesta.",
  },
];
