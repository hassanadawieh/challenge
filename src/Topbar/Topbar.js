// import react from 'react';
import { NavLink , useLocation} from 'react-router-dom';

const Topbar = () => {
  const location = useLocation();
  const path = location.pathname;

  //check if the path matches any of the condition
  if (path === "/" || path === "/home" || path === "/protected") {
    console.log("hassan");
    return (
      <ul>
        <li>
          <NavLink to="/home" href="#hero">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/protected" href="#Protected">
            Not Protected
          </NavLink>
        </li>
      </ul>
    );
//   } else {
//     return (
//       <ul>
//         <li>
//           <NavLink to="/notfound">Not Found</NavLink>
//         </li>
//       </ul>
//     );
  }
}


export default Topbar;