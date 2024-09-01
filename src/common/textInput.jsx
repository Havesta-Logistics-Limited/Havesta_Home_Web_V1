import { Box, styled, Typography, InputBase } from '@mui/material';
const StyledFormGroup = styled(Box)({
  display: 'flex',
  flex: ' 0 0 auto',
  flexFlow: 'column wrap',
  alignItems: 'start',
  marginBottom: 0,
  width: '100%',
});

const StyledInput = styled(InputBase)({
  borderBottom: '1px solid #808080',
  background: 'ffffff',
  width: '100%',

  '&:focus': {
    width: '100%',
    color: '#495057',
    backgroundColor: '#fff',
    borderColor: 'transparent',
    borderBottomColor: '#80bdff',
    outline: 0,
    boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
  },
});

const TextInput = ({ name, label }) => {
  return (
    <>
      <StyledFormGroup>
        <Typography htmlFor={name} gutterBottom fontWeight={500}>
          {label}
        </Typography>
        <StyledInput name={name} id={name} />
      </StyledFormGroup>
    </>
  );
};

export default TextInput;
// const TextInput = ({
//     label,
//     error,
//     required,
//     onChange,
//     placeholder,
//     showLabel,
//     inPutClassName,
//     icon,
//     defaultValue,
//     value,
//     showIcon,
//     inputContainerClassName,
//     type = "text",
//     disabled = false,
//     min,
//     max
//   }) => {
//     return (
//       <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-justify-start tw-gap-2">
//         {showLabel && (
//           <label className="tw-flex tw-items-center tw-justify-center tw-gap-1 tw-capitalize">
//             <span className="tw-font-medium tw-text-sm tw-text-gray-900">{label}</span>
//             {required && <span className="tw-font-medium tw-text-sm tw-text-red-500">*</span>}
//           </label>
//         )}
//         <div
//           className={`${inputContainerClassName} tw-w-full tw-flex tw-items-center tw-justify-start tw-border tw-border-gray-300 tw-bg-gray-50 tw-gap-2.5 tw-rounded-lg`}>
//           {showIcon && <div>{icon}</div>}
//           <input
//             type={type}
//             value={value}
//             defaultValue={defaultValue}
//             onKeyDown={(e) => {
//               const invalidChars = ["@", "$", "#", "%", "&", "^", "*", "!", "~", "`"];
//               if (invalidChars.includes(e.key) && type === "text") {
//                 e.preventDefault(); // Prevent the input of invalid characters
//               }
//             }}
//             disabled={disabled}
//             onChange={onChange}
//             className={`${inPutClassName} tw-bg-gray-50 tw-rounded-lg tw-w-full tw-shadow-none focus:tw-outline-none`}
//             placeholder={placeholder}
//             min={min}
//             max={max}
//           />
//         </div>
//         {error && <small className="tw-text-red-500 ">{error}</small>}
//       </div>
//     );
//   };
