export const riderForm = [
  {
    title: "First Name",
    placeholder: "John",
    options: false,
    type: "text",
    name: "firstName",
  },
  {
    title: "Last Name",
    placeholder: "John",
    options: false,
    type: "text",
    name: "lastName",
  },
  {
    title: "Email Address",
    placeholder: "example@mail.com",
    options: false,
    type: "mail",
    name: "email",
  },
  {
    title: "Phone Number",
    placeholder: "John",
    options: true,
    type: "text",
    phoneNumber: true,
    name: "phoneNumber",
  },

  {
    title: "Date of Birth",
    placeholder: "",
    type: "date",
    name: "dateOfBirth",
  },

  {
    title: "Gender",
    placeholder: "Choose gender",
    options: true,
    subItems: ["Male", "Female", "Non-binary"],
    phoneNumber: false,
    name: "gender",
  },
  {
    title: "Country",
    placeholder: "Choose your country",
    options: true,
    subItems: ["Male", "Female", "Non-binary"],
    name: "country",
  },
  {
    title: "State",
    placeholder: "Choose your state",
    options: true,
    subItems: ["Male", "Female", "Non-binary"],
    name: "state",
  },
  {
    title: "Method of Delivery",
    placeholder: "eg Car",
    options: true,
    subItems: ["Bike", "Van", "Bicycle"],
    type: "text",
    name: "methodOfDelivery",
  },
  {
    title: "Where are you located",
    placeholder: "Ikosi-Ketu",
    options: true,
    type: "text",
    name: "location",
  },
  {
    title: "Are you currently working  with another Logistics Company?",
    placeholder: "No",
    options: true,
    subItems: ["Yes", "No"],
    name: "currentlyEmployed",
  },
  {
    title: "National Identification Number (NIN)",
    placeholder: "",
    options: false,
    name: "NIN",
  },
  {
    title: "Bank Name",
    placeholder: "Access Bank",
    options: true,
    name: "bankName",
  },
  {
    title: "Bank Acconnt Number",
    placeholder: "Access Bank",
    options: false,
    name: "accountNumber",
  },
  {
    title: "Guarantor Name 1",
    placeholder: "",
    options: false,
    name: "guarantorOne",
  },
  {
    title: "Guarantor's Phone Number",
    placeholder: "",
    options: true,
    phoneNumber: true,
    name: "gurantorOnePhoneNumber",
  },
  {
    title: "Guarantor Name 2",
    placeholder: "",
    options: false,
    name: "guarantorTwo",
  },
  {
    title: "Guarantor's Phone Number",
    placeholder: "",
    options: true,
    phoneNumber: true,
    name: "guarantorTwoPhoneNumber",
  },
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
