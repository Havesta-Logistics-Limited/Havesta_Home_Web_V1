export const vendorForm = [
    {
        title: "First Name",
        placeholder: "Firstname",
        type: "text",
        name:"firstname"

    },
    {
        title: "Last Name",
        placeholder: "Lastname",
        type: "text",
        name:"lastname"
    },
   {
        title: "Name of Business",
        // placeholder: "Ola Buka",
        name:"name_of_business"
       
    }, 
    {
        title: "Email Address",
        // option: true
        placeholder:"Email Address",
        name: "email"
    },
    {
        title: "Phone Number",
        placeholder: "Phone Number",
        // options: true,
        type: "number",
        phoneNumber: true,
        name: "phone_number",
        pattern: "d{11}",
        maxLength: 11,
        id: "phone_number",
        required: true,
        img:'icons/naija-flag.svg'
    },
    // {
    //     title: "Date of birth",
    //     placeholder: "",
    //     type: 'date'
    // },
    // {
    //     title: "Gender",
    //     placeholder: "Choose gender",
    //     option: true,
    //     subItems: ["Male", "Female", "Non-binary"],
    //     phoneNumber: false
    //   },
    {
        title: "Legal Business Address",
        placeholder: "Ikosi-Ketu",
        name: "legal_business_address"
    },
    // {
    //     title: "Category of Business",
    //     placeholder: "",
    //     option: true,
    //     subItems: ["Produce", "Meat", "Dairy", "Grocery", "Beverages", "Bakery", "Cleaning", "Electronics", "Home Goods", "Health & Beauty", "Other"],
        
    // },
    // {
    //     title: "Are you a registerd Business",
    //     placeholder: "Yes/No",
    //     option: true,
    //     subItems: ['Yes', "No"]
    // }, 
]


export const vendorStats = [
    {
        image: "https://res.cloudinary.com/dtc89xi2r/image/upload/v1719608563/Group_1000001828_1_fzmhwi.svg",
        text: "Sell your products to customers around you. ",
      },
      {
        image: "https://res.cloudinary.com/dtc89xi2r/image/upload/v1719608562/Group_1000001829_hqn2cj.svg",
        text: "Manage you store/products with our management platform",
      },
      {
        image: "https://res.cloudinary.com/dtc89xi2r/image/upload/v1719608561/Group_1000001830_ewkhqd.svg",
        text: "Grow your business and improve your online presence. ",
      },
]