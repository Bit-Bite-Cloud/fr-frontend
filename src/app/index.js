// import React, { useState, useEffect } from "react";
// import Nav from "@components/navbar";

// const RootLayout = ({ children }) => {
//   const router = useRouter();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const jwtToken = localStorage.getItem("jwtToken");
//     if (jwtToken) {
//       setIsLoggedIn(true);
//       router.push(children.props.path);
//     }
//   }, []);

//   const handleSignUp = (e) => {
//     e.preventDefault();

//     const username = e.target.elements.username.value;
//     const adminAccessToken = e.target.elements.adminAccessToken.value;
//     const password = e.target.elements.password.value;

//     // Perform sign-up logic here
//     // You can make an API call or handle the sign-up process as per your requirements

//     // Set JWT session in local storage
//     const jwtToken = "your-generated-jwt-token";
//     localStorage.setItem("jwtToken", jwtToken);
//     setIsLoggedIn(true);
//     router.push(children.props.path);
//   };

//   return (
//     <html lang="en">
//       <div className="m-[10%]">
//         <div className="">
//           {!isLoggedIn && (
//             <>
//               <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//               <form onSubmit={handleSignUp} className="">
//                 <div className="mb-4">
//                   <label
//                     htmlFor="username"
//                     className="block text-gray-700 font-bold mb-2"
//                   >
//                     Username:
//                   </label>
//                   <input
//                     type="text"
//                     id="username"
//                     className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 w-1/2"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     htmlFor="adminAccessToken"
//                     className="block text-gray-700 font-bold mb-2"
//                   >
//                     Admin Access Token:
//                   </label>
//                   <input
//                     type="password"
//                     id="adminAccessToken"
//                     className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 w-1/2"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     htmlFor="password"
//                     className="block text-gray-700 font-bold mb-2"
//                   >
//                     Password:
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     className="border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 w-1/2"
//                     required
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="bg-[#2a2e12] hover:bg-[#556347] text-white font-bold py-2 px-4 rounded"
//                 >
//                   Sign Up
//                 </button>
//               </form>
//             </>
//           )}
//         </div>
//       </div>
//     </html>
//   );
// };

// export default RootLayout;
