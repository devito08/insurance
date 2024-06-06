import { useState } from "react";
import Signin from "./Signin";

const Signup=()=> {
    const[signup,setsignup]=useState(false);
    const[name,setname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    // const handlebtn={
    //     setsignup(!signup);
    // }
    


  return (
    <div>
        {signup ? Signup : Signin}
        <form className="">
            {signup && (
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    className="border p-3 rounded-lg"
                    onChange={(e)=>{
                        setname(e.target.value)
                    }}
                />
            )}
            <input
                type="email"
                placeholder="email"
                id="email"
                className="border p-3 rounded-lg"
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
            />
            <input
                type="password"
                placeholder="password"
                id="password"
                className="border p-3 rounded-lg"
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
            />
            <button
                type="submit"
                className="bg-slate-800 text-white p-3 rounded-lg  hover:opacity-95 disabled:opacity-80">
                    {signup ? "Signup" : "Signin"}
            </button>
            <div>
                <p>{signup ? "Already have an account" : "Don't have an account"}?</p>
                <button className="text-blue-700" >{signup ? "signin" : "signup"}</button>
            </div>
        </form>
    </div>
  )
}

export default Signup