function Navbar(){
    return (
        <nav style={{ display: "flex",
      justifyContent: "space-between",
      background: "black",
      padding: "10px 20px",
      color: "white"}}>
            <div style={{fontSize:"20px", fontWeight:"bold"}}>MyBrand</div>

            <ul style={{ display:"flex", gap:"15px",color:"red", listStyle:"none",margin:"0",padding:"0"}}>
                <li>home</li>
                <li>about us</li>
                <li>contact us</li>
                <li>services</li>
            </ul>
            <button style={{padding:"5px 15px", marginRight:"-400px", cursor:"pointer"}}>login</button>
            <button style={{padding:"5px 10px",  cursor:"pointer"}}>signup</button>
        </nav>
    )
}
export default Navbar;
// function Navbar() {
//   return (
//     <nav style={{
//       display: "flex",
//       justifyContent: "space-between",
//       background: "black",
//       padding: "10px 20px",
//       color: "white"
//     }}>
//       <div style={{ fontSize: "20px", fontWeight: "bold" }}>MyBrand</div>

//       <ul style={{ display: "flex", gap: "15px", listStyle: "none", margin: 0, padding: 0 }}>
//         <li>Home</li>
//         <li>About Us</li>
//         <li>Contact Us</li>
//         <li>Services</li>
//       </ul>

//       <div>
//         <button style={{ padding: "5px 10px", marginRight: "10px", cursor: "pointer" }}>Login</button>
//         <button style={{ padding: "5px 10px", cursor: "pointer" }}>Sign Up</button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
